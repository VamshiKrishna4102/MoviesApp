import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import MovieCard from '../../components/MovieCard';

import {useSelector, useDispatch} from 'react-redux';
import {fetchMoviesList} from '../../redux/actions';

import {PlusIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useTheme} from '../../themes/themeProvider';

const MovieListScreen = () => {
  const {Movies, Loading} = useSelector(state => state.MoviesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesList());
  }, []);
  const navigation = useNavigation();

  const {colors} = useTheme();
  return (
    <View style={{backgroundColor:colors.background}}>
      <SafeAreaView>
        {Loading ? (
          <ActivityIndicator size={'large'} color={'black'} />
        ) : (
          <FlatList
            contentContainerStyle={{alignItems: 'center'}}
            scrollEnabled={true}
            data={Movies}
            numColumns={2}
            renderItem={({item}) => <MovieCard Data={item} />}
            keyExtractor={item => item.imdbID}
          />
        )}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddMovie')}>
          <PlusIcon size={20} color={'white'} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default MovieListScreen;

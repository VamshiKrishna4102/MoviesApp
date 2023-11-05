import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ArrowUpTrayIcon} from 'react-native-heroicons/outline';
import {useTheme} from '../../themes/themeProvider';

import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';

import {addMovie} from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';
const AddMovieScreen = () => {
  const navigation = useNavigation();
  const {Movies} = useSelector(state => state.MoviesReducer);
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const [Title, setTitle] = useState('');
  const [Director, setDirector] = useState('');
  const [Year, setYear] = useState('');
  const [Type, setType] = useState('');
  const [Poster, setPoster] = useState(null);

  function generateId() {
    var digits = '0123456789';
    let ImdbId = '';
    for (let i = 0; i < 8; i++) {
      ImdbId += digits[Math.floor(Math.random() * 10)];
    }
    return ImdbId;
  }

  const AddMovie = () => {
    let Id = generateId();
    let NewMovie = {
      Title: Title,
      Year: Year,
      imdbID: Id,
      Type: Type,
      Poster: Poster,
    };
    let NewList = [NewMovie].concat(Movies);
    setTimeout(() => {
      dispatch(addMovie(NewList));
      navigation.navigate('Tabs')
    }, 500);
    console.log('added', Movies);
  };

  const GetPoster = second => {
    ImagePicker.openPicker({
      width: 300,
      height: 700,
    }).then(image => {
      setPoster(image.path);
    });
  };
  return (
    <View style={[styles.con, {backgroundColor: colors.background}]}>
      <TextInput
        style={[styles.input, {backgroundColor: colors.input}]}
        placeholder="Movie Title"
        placeholderTextColor={colors.InputText}
        onChangeText={value => setTitle(value)}
        defaultValue={Title}
      />
      <TextInput
        style={[styles.input, {backgroundColor: colors.input}]}
        placeholder="Movie Director"
        placeholderTextColor={colors.InputText}
        onChangeText={value => setDirector(value)}
        defaultValue={Director}
      />
      <TextInput
        style={[styles.input, {backgroundColor: colors.input}]}
        placeholder="Year"
        placeholderTextColor={colors.InputText}
        onChangeText={value => setYear(value)}
        defaultValue={Year}
      />
      <TextInput
        style={[styles.input, {backgroundColor: colors.input}]}
        placeholder="Type"
        placeholderTextColor={colors.InputText}
        onChangeText={value => setType(value)}
        defaultValue={Type}
      />
      <TouchableOpacity
        onPress={GetPoster}
        style={[styles.poster, {backgroundColor: colors.input}]}>
        {Poster !== null ? (
          <Image style={styles.poster_image} source={{uri: Poster}} />
        ) : (
          <>
            <ArrowUpTrayIcon size={50} color={colors.InputText} />
            <Text style={[styles.poster_text, {color: colors.InputText}]}>
              Upload poster
            </Text>
          </>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.submit} onPress={AddMovie}>
        <Text style={styles.submit_text}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMovieScreen;

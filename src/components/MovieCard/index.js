import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import {HeartIcon} from 'react-native-heroicons/solid';
  import React, {useState} from 'react';
import styles from './styles';
  const MovieCard = props => {
    const Movie = props.Data;
  
    const [isFavorite, setisFavorite] = useState(false);
  
    const UpdateFavorite = () => {
      setisFavorite(!isFavorite);
    };
  
    return (
      <View style={styles.card}>
        <ImageBackground
          source={{uri: Movie.Poster}}
          style={styles.poster}
          resizeMode="cover">
          <View style={styles.top}>
            <TouchableOpacity onPress={UpdateFavorite}>
              <HeartIcon size={22} color={isFavorite ? 'red' : 'gray'} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.title}>{Movie.Title}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default MovieCard;
  
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

import { ArrowUpTrayIcon } from 'react-native-heroicons/outline';
const AddMovieScreen = () => {
  return (
    <View style={styles.con}>
      <TextInput style={styles.input} placeholder="Movie Title" />
      <TextInput style={styles.input} placeholder="Movie Director" />
      <TextInput style={styles.input} placeholder="Year" />
      <TouchableOpacity style={styles.poster}>
        <ArrowUpTrayIcon size={50} color={"#fff"} />
        <Text style={styles.poster_text}>Upload poster</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.submit_text}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMovieScreen;

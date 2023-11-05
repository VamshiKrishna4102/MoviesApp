import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../themes/themeProvider';
import {darkColors, lightColors} from '../../themes/colors';
import styles from './styles';
const SettingsScreen = () => {
  const {dark, setScheme, colors} = useTheme();
  const ToggleTheme = () => {
    dark ? setScheme('light') : setScheme('dark');
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <SafeAreaView>
        <View style={styles.row}>
          <Text style={{color: colors.text}}>Current Theme</Text>
          <TouchableOpacity style={styles.btn} onPress={ToggleTheme}>
            <Text style={[styles.btn_text,{color:colors.primary}]}>{dark ? 'Dark Mode' : 'Light Mode'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default SettingsScreen;

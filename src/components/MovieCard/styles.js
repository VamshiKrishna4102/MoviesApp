import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
      width: width * 0.45,
      height: height * 0.35,
      margin: 5,
    },
    poster: {
      width: '100%',
      height: '100%',
    },
    bottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 5,
    },
    title: {
      color: 'white',
      fontSize: 12,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 3,
    },
    top: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: 25,
      margin: 10,
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default styles
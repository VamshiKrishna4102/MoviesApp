import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
  },
  input: {
    backgroundColor: '#f3f3f3',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  poster: {
    width: width * 0.35,
    height: width * 0.25 + width * 0.25,
    backgroundColor: '#f3f3f3',
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster_image:{
height:'100%',
width:'100%'
  },
  poster_text: {
    marginTop:10,
    color:"lightgray",
  },
  submit: {
    backgroundColor: '#4285f4',
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit_text: {
    color: '#fff',
    fontWeight: '600',
  },
});
export default styles;

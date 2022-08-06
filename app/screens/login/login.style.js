import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  go: {
    fontSize: viewportWidth*0.075,
    fontFamily: 'unisansbook',
    backgroundColor: 'rgba(255,255,255,0.0)',
    color: '#8DC440'
  },
  readysetContainer: {
    marginBottom: 20,
    flexDirection: 'row'
  },
  readyset: {
    fontSize: viewportWidth*0.075,
    fontFamily: 'unisansbook',
    backgroundColor: 'rgba(255,255,255,0.0)',
    color: '#ffffff'

  },
  loginformcontainer: {
    marginTop: 50,
    marginBottom: 20,
    flex: 1,
    height: 'auto',

    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  forgot: {
    backgroundColor: '#2EA10E',
    paddingHorizontal: 7,
    borderRadius: 100,
    height: 25,
    zIndex: 99,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 20,
    right: 0.2
  },
  forgotEye: {
    backgroundColor: 'transparent',
    paddingHorizontal: 7,
    borderRadius: 100,
    height: 25,
    zIndex: 99,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 20,
    right: 0.2
  },

  forgotText: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    color: '#ffffff',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },

  img: {
    flex: 1,
   height:viewportHeight,
   width:viewportWidth
  },

  logocontainer: {
    // textAlign: 'center',
    alignItems: 'center',
    marginTop: 120
  },
  loginlogo: {
    width: viewportWidth*0.9,
    height: 70,
    resizeMode: 'contain'
  },
  copyrightText: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    marginTop: 80,
    color: '#ffffff'
  },


  '@media (min-width: 768) and (max-width: 2732)': {
    loginlogo: {
      width: viewportWidth*0.8,
      resizeMode: 'contain'
    },
    logocontainer: {
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 150
    },
    readyset: {
      fontSize: '5rem',
      fontFamily: 'unisansbook',
      backgroundColor: 'rgba(255,255,255,0.0)',
      color: '#ffffff'
  
    },
    go: {
      fontSize: '5rem',
      fontFamily: 'unisansbook',
      backgroundColor: 'rgba(255,255,255,0.0)',
      color: '#8DC440'
    },
    forgot: {
      backgroundColor: '#2EA10E',
      paddingHorizontal: 10,
      borderRadius: 100,
      height: 35,
      zIndex: 99,
      position: 'absolute',
      alignSelf: 'center',
      justifyContent: 'center',
      marginRight: 20,
      right: 0.2
    },
    forgotEye: {
      backgroundColor: 'transparent',
      paddingHorizontal: 10,
      borderRadius: 100,
      height: 35,
      zIndex: 99,
      position: 'absolute',
      alignSelf: 'center',
      justifyContent: 'center',
      marginRight: 20,
      right: 0.2
    },
    forgotText: {
      backgroundColor: 'rgba(255,255,255,0.0)',
      color: '#ffffff',
      alignSelf: 'center',
      fontSize:20,
      textDecorationLine: 'underline',
    },
  
    readysetContainer: {
      marginBottom: 0,
      marginTop:50,
      flexDirection: 'row'
    },


     },
});
export default styles;

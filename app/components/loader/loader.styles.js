import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';


const {
  width: viewportWidth,
  height: viewportHeight
} = Dimensions.get('window');
const styles = StyleSheet.create({
  
   loaderContainer: {
    width: viewportWidth,
    height: 200,
  //  flex:1,
    zIndex:9999999999,
  //  position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    padding: 8,
   },

   loaderLogoContainer:{
    //borderWidth: 3,
   // borderColor: 'rgba(255,255,255,0.9)',
    borderRadius:100,
    padding:12,
    //backgroundColor:'rgba(0,0,0,0.7)',
   }

});
export default styles;



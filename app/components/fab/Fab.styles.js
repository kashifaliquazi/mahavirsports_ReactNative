import {StyleSheet,Dimensions} from 'react-native';

const {
  width: viewportWidth,
  height: viewportHeight
} = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant';

const styles = StyleSheet.create({
  fabButton: {
    width: CONSTANTS.FAB_BUTTON_SIZE,
    height: CONSTANTS.FAB_BUTTON_SIZE,
    backgroundColor: '#8DC440',
    alignSelf: 'flex-end',
    borderRadius: (CONSTANTS.FAB_BUTTON_SIZE)/2,
    justifyContent: 'center',
    alignItems: 'center',
    right:viewportWidth*0.045,
    top: viewportHeight - viewportHeight*0.38,
    position: 'absolute',
    zIndex: 9999,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    borderColor: 'white',
    borderWidth: viewportWidth*0.006
  },
  fabIcon:{
    fontSize:viewportWidth*0.08,color:'white'
  },

});
export default styles;


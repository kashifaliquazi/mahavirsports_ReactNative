import React, { Component } from 'react';
import styles from './loader.styles'
import {  View, Animated, Image,Modal, Easing, Text,Platform,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { Dimensions } from 'react-native';


const {
  width: viewportWidth,
  height: viewportHeight
} = Dimensions.get('window');

class Loader extends Component<{}> {

  constructor () {
    super()
    // this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {

  }


getLoader(){
  


  if(this.props.loader.isLoaderVisible){
  
  return(
    
    <Modal
    animationType='fade'
    transparent={true}
    visible={true}>
    <View style={{flex:1,backgroundColor:'rgba(0,0,0,.2)'}}>
      <ActivityIndicator size='large' color='red' style={{flex:1}} />
    </View>
  </Modal>
     
  )}
}

getStyle()
{
  const platformCss = Platform.OS === 'ios' ? {flex:1,position:'absolute',zIndex:9999999,alignContent:'center',left:viewportWidth/2} : {};
  const Theam = (this.props.loader.theam == 'Dark') ? {backgroundColor: 'black'}: {};
  if(this.props.loader.isLoaderVisible)
return(
  [Theam]
)
}
  render() {
    // const RotateData = this.RotateValueHolder.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // })
    let loader = this.props.loader.isLoaderVisible? styles.loaderContainer:{};
    return (
      <View>
   {this.getLoader()}
    </View>
    );
  }
}
function mapStatetoProps(state)
{
    return {
      loader:state.loaderReducer
    }
}
export default connect(mapStatetoProps)(Loader);
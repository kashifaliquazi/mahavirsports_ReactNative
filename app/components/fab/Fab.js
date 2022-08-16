import React, { Component } from 'react';
import { Image  } from 'react-native';
import FontAwesome, {Icons,SolidIcons, RegularIcons, BrandIcons} from 'react-native-fontawesome';
// import FontAwesome, {Icons} from 'react-native-fontawesome';
import styles from './Fab.styles';

import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Platform,
  Text
} from 'react-native';
// import { connect } from 'react-redux';
const {
  width: viewportWidth,
  height: viewportHeight
} = Dimensions.get('window');

export default class Fab extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      spin:new Animated.Value(0),
      isOpen:true}
      
    }
    

  onRotateFABCTap = ()=>{
    if(this.props.isRotate){
      if(this.state.isOpen){
                Animated.timing(                  
                      this.state.spin,            
                        {   
                              toValue: 1,                  
                              duration: 120,              
                        }
                      ).start(); 
      }else
                Animated.timing(                  
                      this.state.spin,            
                        {
                              toValue: 0,                  
                              duration: 120,              
                        }
                      ).start(); 

      this.setState({isOpen:!this.state.isOpen});

      }
  }
  render() {
    const spinValue = this.state.spin.interpolate({ 
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    });
    const TOP = this.props.top?{top:this.props.top}:{};
 return (

  <TouchableOpacity activeOpacity={0.9} style={[styles.fabButton,TOP]}
      onPress={()=>{
        this.props.onClick();
      this.onRotateFABCTap();
        }
        }
        
            >
             <FontAwesome style={{fontSize: 32,color:"white"}} icon={SolidIcons.plus} />
              {/* <Image style={{height:viewportWidth*0.15,width:viewportWidth*0.15}} source={require("../../assets/images/add.png")}/> */}

          </TouchableOpacity>
    );
  }
}

import React, {Component} from 'react';
// import FontAwesome, {Icons} from 'react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant'
import globalStyles from '../../assets/css/globalstyles';
import {Text, Dimensions,TouchableOpacity, View, Image, Platform} from 'react-native';
import {connect} from 'react-redux';
 class GradientButton extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      onEditMode:false
    }
    this.How_It_works = '';
    this.isDisabled = this.props.isDisabled ? this.props.isDisabled : false;
  }

  // getIcon = () => {
  //   const iconStyle = this.props.type == 'CTA'
  //     ? globalStyles.ctaIcon
  //     : globalStyles.btnIcon;
  //     if (this.props.image) 
  //     return (<Image source={this.props.image} style={{width:105,height:105}}/>)
  //     if (this.props.fontIcon) 
  //     return (<FontAwesome style={globalStyles.customButtonIcon}>{Icons[this.props.fontIcon]}</FontAwesome>)
  //   if (this.props.icon) 
  //     return (<Image source={this.props.icon} style={iconStyle}/>)
  // }
  onLongPress =()=>{

    if(this.props.editable)
    {
      this.setState({onEditMode:true});
    }
  }
  getButton=()=>{
    const textStyle = this.props.type == 'CTA'
    ? globalStyles.ctaText
    : globalStyles.btnText;
  const containerStyle = this.props.type == 'CTA'
    ? globalStyles.ctaButton
    : globalStyles.btnContainer;

    const iconWrapper  = this.props.type == 'CTA'?{width:CONSTANTS.UI_CONSTANTS.CTA_ICON_SIZE,height:Platform.isPad?95:CONSTANTS.UI_CONSTANTS.CTA_ICON_SIZE,justifyContent:'center',alignItems:'center'}:{};
    if(this.state.onEditMode){
    return (<LinearGradient
      colors={this.props.color}
      start={{
      x: -0.3,
      y: 1
    }}
      end={{
      x: 1,
      y: 1
    }}
      style={[containerStyle,{height:Platform.isPad?CONSTANTS.UI_CONSTANTS.IPAD_CTA_BUTTON_HEIGHT:CONSTANTS.UI_CONSTANTS.CTA_BUTTON_HEIGHT,paddingHorizontal:0}]}>

<View style={{width:'100%'}}>
<View style={[globalStyles.ctaOverlay]}>

<TouchableOpacity style={globalStyles.ctaInnerButton}
onPress={()=>{
  this.props.editable.onEdit(this.props.item,this.props.index);
  this.setState({onEditMode:false});
  }}
>
{/* <FontAwesome style={globalStyles.ctaInnerIcon}>{Icons.edit}</FontAwesome> */}
<Text style={globalStyles.ctaInnerButtonText}>Edit</Text>
</TouchableOpacity>

<TouchableOpacity style={globalStyles.ctaInnerButton}

onPress={()=>{
  this.props.editable.onDelete(this.props.item.ID);
  this.setState({onEditMode:false});
  }}
>
{/* <FontAwesome style={globalStyles.ctaInnerIcon}>{Icons.trash}</FontAwesome> */}
<Text style={globalStyles.ctaInnerButtonText}>Delete</Text>
</TouchableOpacity>

<TouchableOpacity style={[globalStyles.ctaInnerButton,{width:'20%',justifyContent:'center'}]}
onPress={()=>{
  this.setState({onEditMode:false});}}
>
{/* <FontAwesome style={globalStyles.ctaInnerIcon}>{Icons.timesCircle}</FontAwesome> */}
</TouchableOpacity>

</View>
     
  </View>      
    </LinearGradient>
    )
     }
     else{
       const OPACITY = this.props.buttonOpacity ? this.props.buttonOpacity : 0.90
    return (<TouchableOpacity activeOpacity={this.isDisabled?1:OPACITY} style={[this.props.containerStyle]}
      onPress={()=>{
        if(this.isDisabled){
            this.props.dispatch({ type: 'SHOW_TOAST', message: "This is a premium feature" });
    return;
        }
      
        this.props.onPress()}}
      onLongPress={()=>this.onLongPress()}
      >
       <LinearGradient
         colors={this.props.color}
         start={{
         x: -0.3,
         y: 1
       }}
         end={{
         x: 1,
         y: 1
       }}
         style={containerStyle}>
         {/* <View style={iconWrapper}>{this.getIcon()}</View> */}
         <Text style={textStyle}>{this.props.text}</Text>
       </LinearGradient>
     </TouchableOpacity>)
  }}

  // getPremiumImage = (isDisabled) => {
  //   if (isDisabled) {
  //     return (
  //       <View style={{
  //         position: 'absolute', zIndex: 9999, width: 40, height: 40, justifyContent: 'flex-start', alignItems: 'flex-start',
  //         alignSelf:'flex-start', top:viewportWidth*0.05, left:viewportWidth*0.05,
  //       }}>
  //         <Image style={{ width: viewportWidth*0.06, height: viewportWidth*0.06 }} source={require('../../assets/images/White.png')} />
  //       </View>
  //     )
  //   }
  // }

  render() {

    return (
      <View>
      {this.getButton()}
      {/* {this.getPremiumImage(this.isDisabled)} */}
      </View>
    );
  }
}
export default connect()(GradientButton);


{/* <TouchableOpacity  activeOpacity={0.85}>
<LinearGradient colors={CONSTANTS.UI_CONSTANTS.BTN_COLORS} start={{
    x: -0.3,
    y: 1
  }} end={{
    x: 1,
    y: 1
  }} style={globalStyles.btnContainer}>
<Text style={globalStyles.btnText}>Login</Text>
</LinearGradient>
</TouchableOpacity>

//Button with icon
   <TouchableOpacity  activeOpacity={0.85}>
<LinearGradient colors={CONSTANTS.UI_CONSTANTS.BTN_COLORS} start={{
    x: -0.3,
    y: 1
  }} end={{
    x: 1,
    y: 1
  }} style={globalStyles.btnContainer}>
<Image source={require('./app/assets/images/play-line.png')} style={globalStyles.btnIcon}/>
<Text style={globalStyles.btnText}>Login</Text>
</LinearGradient>
</TouchableOpacity>



//CTA Button
<TouchableOpacity  activeOpacity={0.85}>
<LinearGradient colors={['green', 'blue']} start={{x: 0.1,y: 1.1}} end={{x: 1,y: 1}}  style={globalStyles.ctaButton}>
<Image source={require('./app/assets/images/drvisitplanner/icon1.png')} style={globalStyles.ctaIcon}/>
<Text style={globalStyles.ctaText}>What is the meaing of Wellness</Text>
</LinearGradient>
</TouchableOpacity> */
}
import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant'

const menuHeight=2;
const globalStyles = StyleSheet.create({
  labelText:{
    fontWeight: 'bold',
    fontSize:viewportWidth*0.05,
    color:CONSTANTS.UI_CONSTANTS.MAIN_COLOR,
    paddingHorizontal:10,
  },
modelText:{
  width:'100%',
  backgroundColor:'white',
  height:viewportHeight*0.08,
  borderRadius:viewportHeight*0.04,
  fontSize:viewportWidth*0.05,
  shadowColor:'rgba(0,0,0,0.3)',
  shadowRadius:2,
  shadowOffset:{width:0,height:1},
  shadowOpacity:1,borderColor:'rgba(0,0,0,0.5)',
  borderWidth:1,
  borderColor:'rgba(100,100,100,0.2)',
  fontFamily:'unisansregular',
  color:'black',
  paddingLeft:viewportWidth*0.03,
},
// older css
  '@media (max-width: 320)':{
    btnText: {
      fontSize:viewportWidth*0.045,},
      headerImage: {
        width:'100%',
        height: CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT,
        resizeMode: 'contain',
        top:Platform.OS==='ios'?0:viewportHeight*0.06,
        alignSelf:'center'
        
      },
      checkText: {
        fontSize:viewportWidth*0.05,
        top:viewportWidth*0.012,
    
      },

      iOSPicker:{top:-100},

      headerImage:{
        top:-5
      },
  
      HowItWorksBtn:{
        //position:'absolute',
        alignSelf:'center',
        zIndex:9999,
       // top:-viewportHeight*0.16,
        width:'90%',
        marginBottom:10,
      },
      contentContainerImage:{marginTop:Platform.OS==='ios'?-viewportHeight*0.12:-viewportHeight*0.06},
      
  },

 



  h1:{fontSize:viewportWidth*0.07,fontFamily:'unisansregular',alignSelf:'center',textAlign:'center'},
  whiteText:{color:'white'},
  
  h2:{fontSize:viewportWidth*0.05,fontFamily:'unisansregular',alignSelf:'center',textAlign:'center',width:'80%'},
blueContainer:{backgroundColor:'#17AAF1'},
  iOSPicker:{width:'100%',height:viewportHeight/3.3,backgroundColor:'white',borderTopWidth:1,borderColor:'rgba(40,40,40,1)',borderTopLeftRadius:viewportWidth*0.04,borderTopRightRadius:viewportWidth*0.04,top:-26},
  iOSDarkThemePicker:{backgroundColor:'rgba(20,20,20,0.98)'},
  
  iOSPickerText:{backgroundColor:'rgba(20,20,20,0.98)',borderColor:'white',fontFamily:'UniSansSemiBold',fontSize:viewportWidth*0.06},
  iOSPickerHeader:{width:'100%',borderBottomColor:'rgba(150,150,150,0.4)',borderBottomWidth:1,padding:7},
  iOSPickerHeaderButton:{borderRadius:12,alignSelf:'flex-end',padding:5,margin:5,backgroundColor:'rgba(130,130,130,0.4)',alignItems:'center',justifyContent:'center',paddingHorizontal:10},
  iOSPickerHeaderButtonText:{fontSize:viewportWidth*0.04,fontFamily:'UniSansSemiBold',top:3},
  filterDrawerContainer: {
    width: '100%',
    height: viewportHeight,
    
 //   backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    zIndex: 10000,
    
  },
  filterDrawercloseDrawerBtnContainer: {
    // color: '#555555',
    borderRadius: viewportWidth*0.035,
    backgroundColor:'rgba(0,0,0,0.2)',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    width: viewportWidth*0.07,
    height: viewportWidth*0.07,
    justifyContent: 'center',
    alignItems: 'center'
  },

  filterDrawerCloseIcon:{fontSize:viewportWidth*0.04,color:'#323232'},
    filterDrawer: {
    width: '100%',
    backgroundColor:'#E7E7EC',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 44,
    height: viewportHeight,
  },
  filterTitle: {
    fontFamily: 'unisansregular',
    color:'#323232',
    fontSize: viewportWidth*0.05,
    top:Platform.OS==='ios'?viewportWidth*0.008:0,
  },
  filterHeaderContainer: {
    width: '100%',
    backgroundColor:'white',
    padding: viewportWidth*0.03,
    borderTopWidth: 22,
    borderTopColor: CONSTANTS.UI_CONSTANTS.PRIMARY_COLOR,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  filterHeaderContainerDark: {
    borderTopColor: CONSTANTS.UI_CONSTANTS.DARK_STATUS_BAR,
    backgroundColor:'#121212'
  },
  //Input Components css
  contentWrapper:{paddingHorizontal:CONSTANTS.UI_CONSTANTS.CONTENT_MASTER_PADDING,alignSelf:'center',width:'100%'},
  fullRow:{width:'100%',padding:4,justifyContent:'center',alignItems:'center',margin:3},
  halfRow:{width:'50%',padding:4,justifyContent:'center',alignItems:'center',margin:3},
  halfRowContainer:{flexDirection:'row',width:'100%',justifyContent:'flex-start',alignItems:'flex-start'},
  darkTheme:{backgroundColor: '#121212',color:'white',borderColor:'rgba(100,100,100,0.5)'},
  darkThemeText:{backgroundColor:'transparent',color:'white'},

  textBox1:{
    width:'100%',
    backgroundColor:'white',
    height:viewportHeight*0.08,
    borderRadius:viewportHeight*0.04,
    fontSize:viewportWidth*0.05,
    shadowColor:'rgba(0,0,0,0.3)',
    shadowRadius:2,
    shadowOffset:{width:0,height:1},
    shadowOpacity:1,borderColor:'rgba(0,0,0,0.5)',
    borderWidth:1,
    borderColor:'rgba(100,100,100,0.2)',
    fontFamily:'unisansregular',
    color:'black',
    paddingLeft:viewportWidth*0.03,
  },
  textArea:{height:viewportHeight*0.25,textAlignVertical:'top',paddingTop:(viewportHeight*0.25)/10,borderRadius:20,width:'100%', fontSize: '1.2rem',},
  textBoxLables:{fontFamily:'unisansregular',fontSize:viewportWidth*0.0454,color:'#232323',paddingVertical:viewportHeight*0.015,alignSelf:'flex-start'},
  dropDownRow:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  arrowDown:{fontSize:viewportWidth*0.08,position:'absolute',left:'100%',marginLeft:-viewportWidth*0.05},

  datePicker:{justifyContent:'center',alignItems:'center',paddingHorizontal:viewportWidth*0.03},    
  datePickerText:{alignSelf:'flex-start',fontSize:viewportWidth*0.05,fontFamily:'unisansregular',top:Platform.OS==='ios'?viewportWidth*0.01:0},
  datePickerIcon:{marginLeft:viewportWidth*0.02,width:viewportWidth*0.06,height:viewportWidth*0.06,tintColor:'rgba(150,150,150,1)'},
  datePickerInput:{borderWidth:0},

  dropDowntext:{fontSize:viewportWidth*0.05,fontFamily:'unisansregular',top:Platform.OS==='ios'?viewportWidth*0.005:viewportWidth*0.001},
  

  //End of input components-->
  
  
  dateInputText:{fontFamily: 'unisansregular',fontSize:viewportWidth*0.05,color:'black'},
  barChartContainer:{ flexDirection: 'row',paddingHorizontal:0,paddingBottom:0,height:viewportHeight*1.05},
  kpiDetailsInnerPageWrapper:{paddingTop:0,minHeight:viewportHeight},
  chartContainer:{backgroundColor:'#121212',borderRadius:viewportWidth*0.05,paddingVertical:20,marginVertical:10,borderWidth:1,borderColor:'rgba(255,255,255,0.2)',shadowColor:'rgba(0,0,0,0.5)',shadowRadius:10,shadowOffset:{width:0,height:5},shadowOpacity:1,elevation:0,alignSelf:'center',justifyContent:'center',alignItems:'center',width:'95%',alignContent:'center'},
  chartTitle:{color:'white',fontSize:viewportWidth*0.06,alignSelf:'center',marginTop:20, paddingHorizontal:50, textAlign:'center'},
  PageWrapper: {
      
      minHeight:viewportHeight,
      backgroundColor:'white',
    },

  paragraphText:{
    fontSize:viewportWidth*0.045,
    fontFamily:'unisansregular',
    marginVertical:20,
    letterSpacing:0,
    textAlign:'center',

  },

    // BUTTONS AND CTA CSS
  btnContainer: {
    margin: 5,
    width: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    padding: 10,
    shadowColor: 'rgba(6, 6, 6, 0.43)',
      shadowOffset: {
        width: 0,
        height: 4
      },
    shadowRadius: 1,
   
    flexDirection: 'row',
    shadowOpacity: 0.3,
    justifyContent: 'center'
  },
  btnIcon: {
    width: CONSTANTS.UI_CONSTANTS.BTN_ICON_SIZE,
    height: CONSTANTS.UI_CONSTANTS.BTN_ICON_SIZE,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  btnText: {
    fontSize: CONSTANTS.UI_CONSTANTS.BTN_TEXT_SIZE,
    color: CONSTANTS.UI_CONSTANTS.BTN_TEXT_COLOR,
    backgroundColor: 'transparent',
    fontFamily: CONSTANTS.UI_CONSTANTS.BTN_TEXT_FONTFAMILY,
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0, 1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    top: Platform.OS === 'ios'
      ? 3
      : 0,
    shadowRadius: 2,
    shadowOpacity: 0.7
  },

  textBoxWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  textBox: {
    backgroundColor: 'white',
    height: viewportHeight*0.09,
    color: 'black',
    //padding: 12,
    borderRadius: 100,
    width: viewportWidth*0.8,
    marginVertical: 10,
    fontFamily: 'unisansbook',
    fontSize: '1.45rem',
    lineHeight:20,
    paddingLeft: viewportWidth*0.04,
    shadowColor: 'rgba(6, 6, 6, 0.43)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    fontFamily: 'unisansregular',
    shadowRadius: 1,

    shadowOpacity: 0.3
  },
  textBoxIcon: {
    width: viewportWidth*0.06,
    height:  viewportWidth*0.06,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft:viewportWidth*0.05,
    zIndex: 99,
  
  },

  textInputAlert: {
    borderColor: 'rgba(255, 0, 0, 1)',
    borderWidth: 1,
    shadowColor: 'rgba(255, 0, 0, 1)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    fontFamily: 'unisansregular',
    shadowRadius: 8,
    shadowOpacity: 0.9
  },

  ctaContainer: {
    flex: 1
  },
  contentContainerNoHeader:{marginTop:-viewportHeight*0.18},

//new CSS- iOS fix
ctaSubmenu:{
  width:CONSTANTS.UI_CONSTANTS.CTA_BUTTON_WIDTH,
  height:CONSTANTS.UI_CONSTANTS.CTA_BUTTON_HEIGHT/menuHeight,
  justifyContent:'space-between',
  padding:15,
  //paddingTop:27,
  alignItems:'center',
  alignSelf:'center',
  flexDirection:'row',
  position:'relative',
  // borderBottomLeftRadius:Platform.OS === 'ios'? 12: 0,
  // borderBottomRightRadius:Platform.OS === 'ios'? 12: 0,
 // borderBottomWidth:0,//Platform.OS === 'ios'? 1: 1,
  borderWidth:0.3,
  //borderBottomWidth:0,
  borderColor:'white'//Platform.OS === 'ios'? 'rgba(255,255,255,1)':'rgba(255,255,255,0)',
  },
   
//old CSS
// ctaSubmenu:{
//   width:CONSTANTS.UI_CONSTANTS.CTA_BUTTON_WIDTH,
//   height:CONSTANTS.UI_CONSTANTS.CTA_BUTTON_HEIGHT/menuHeight,
//   justifyContent:'space-between',
//   padding:15,
//   //paddingTop:27,
//   alignItems:'center',
//   alignSelf:'center',
//   flexDirection:'row',
//   position:'relative',
//   borderBottomLeftRadius:Platform.OS === 'ios'? 12: 0,
//   borderBottomRightRadius:Platform.OS === 'ios'? 12: 0,
//   borderTopWidth:Platform.OS === 'ios'? 1: 1,
//   borderColor:Platform.OS === 'ios'? 'rgba(255,255,255,1)':'rgba(255,255,255,0)',
//   },

  ctaButton: {
    padding: 20,
    width: CONSTANTS.UI_CONSTANTS.CTA_BUTTON_WIDTH,
    height:CONSTANTS.UI_CONSTANTS.CTA_BUTTON_HEIGHT,
    alignSelf: 'center',
    alignItems:'center',
    alignContent:'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: CONSTANTS.UI_CONSTANTS.CTA_BORDER_RADIUS,
    margin: 10,
    shadowColor: 'rgba(6, 6, 6, 0.43)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 1,
    shadowOpacity: 0.3,elevation:4,
  },

  ctaIcon: {
    width: CONSTANTS.UI_CONSTANTS.CTA_ICON_SIZE,
    height: CONSTANTS.UI_CONSTANTS.CTA_ICON_SIZE,

  },

  ctaText: {
    //fontSize: CONSTANTS.UI_CONSTANTS.CTA_FONT_SIZE,
    fontSize: viewportWidth*.055,
    color: 'white',
    fontFamily: 'unisansregular',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    width: '60%',
    textAlign: 'right',
    shadowColor: 'rgba(0,0,0, 1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.4
  },
  highlightText: {
    color: '#8DC440'
  },

  innerHeaderTitle: {
    fontSize: 22,
    color: 'white',
    top: Platform.OS === 'ios'
      ? 10
      : 5,
    fontFamily: 'unisansregular',

    alignSelf: 'center'
  },

  innerHeaderContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    backgroundColor: CONSTANTS.UI_CONSTANTS.PRIMARY_COLOR,
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowRadius: 20,
    shadowOpacity: 0.2,
    zIndex: 999,
    width: '100%'

  },
  filterBtn: {
    top: 9
  },
  backButton: {
    padding:Platform.OS==="ios"?0:10,
      
  
  },

  backButtonContainer: {
    position: 'absolute',
   
   
    zIndex: 1000,
    marginLeft: 15,
    top: 40,
    height: 35,
    width: 35,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: 'lightgrey'
  },

  backIcon: {
    top:Platform.OS==='ios'?-2:-1,
    fontSize: viewportWidth*0.1,
    color: 'white',
    alignSelf: 'center',
    left:-2,
  },
  checkColor: {
    color: 'black',
    left: -2
  },
  checkText: {
    fontSize:viewportWidth*0.04,
  
    color:'black',
    //top:Platform.OS==='ios'?viewportWidth*0.007:viewportWidth*0.005,

    top:Platform.OS==='ios'?viewportWidth*0.01:viewportWidth*0.005,
    fontFamily:'unisansregular'
  },
  checkContainer: {
    borderWidth: 0,
   // width:viewportWidth*0.06,height:viewportWidth*0.06,
    margin:0,padding:0,
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    alignContent:'flex-start',
     backgroundColor:'transparent'
  },


  headerImageNoHeader:{top:Platform.OS==='ios'?-55:-25,height:CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT,width:'100%'},


  HowItWorksBtn:{
 //   position:'absolute',
    alignSelf:'center',
    zIndex:9999,
  //  top:-viewportHeight*0.22,
    width:'90%',
    marginBottom:10,
  },

  
  headerTitle:{
    color:'white',
    fontSize:36,
    fontFamily:'unisansbook',
    alignSelf:'flex-end',
    backgroundColor:'transparent',
    position:'absolute',
    marginTop:250,
    zIndex:100,
  },

  headerImage: {
    width:'100%',
    height: Platform.OS==="ios"?CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT-30:CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT,
    resizeMode: Platform.OS==="ios"?'contain':'cover',
    top:Platform.OS==='ios'?viewportHeight*0.04:viewportHeight*0.06,


    alignSelf:'center'
    
  },
  headerImageContainer: {
    backgroundColor:CONSTANTS.UI_CONSTANTS.PRIMARY_COLOR,
    height:Platform.OS==='android'?CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT+50:CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT-30,
    width:'100%',

    
    
  },
  borderRadiusPatch:{height:viewportHeight*0.06,width:'100%', borderRadius:CONSTANTS.UI_CONSTANTS.CONTENT_CONTAINER_BORDER_RADIUS, top:-viewportHeight*0.14,borderBottomLeftRadius:0,borderBottomRightRadius:0,zIndex:101, backgroundColor:'white'},
  contentContainer:{
    backgroundColor:'white',
    zIndex:100,
    marginTop:0,
    paddingVertical:20,
   borderRadius:CONSTANTS.UI_CONSTANTS.CONTENT_CONTAINER_BORDER_RADIUS,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    shadowColor:'black',
    shadowOpacity:0.1,
    elevation:5,
    shadowRadius:8,
    //minHeight: viewportHeight-CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT+100,
    shadowOffset:{width:0, height:-14},
    
   // position:'absolute',
    //marginTop:-viewportHeight*0.1
  },
  contentContainer2:{
    backgroundColor:'white',
    zIndex:100,
    // marginTop:0,
    paddingVertical:0,

    // shadowColor:'black',
    // shadowOpacity:0.1,
    // elevation:5,
    // shadowRadius:8,
    //minHeight: viewportHeight-CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT+100,
    // shadowOffset:{width:0, height:-14},
    
   // position:'absolute',
    //marginTop:-viewportHeight*0.1
  },
  contentContainerImage:{marginTop:Platform.OS==='ios'?-viewportHeight*0.12:-viewportHeight*0.12},
  
  pageFirstTitle:{
    fontSize:CONSTANTS.UI_CONSTANTS.PAGE_FIRST_TITLE_FONTSIZE,
    fontFamily:CONSTANTS.UI_CONSTANTS.PAGE_FIRST_TITLE_FONTFAMILY,
    paddingHorizontal:0,
    lineHeight:CONSTANTS.UI_CONSTANTS.PAGE_FIRST_TITLE_FONTSIZE+5,
    backgroundColor:'transparent',
    width:'100%',
    alignSelf:'center',
    textAlign:'center'
  },

  buttonsContainer:{
    alignSelf:'center',
    width:'100%',
    backgroundColor:'white',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'center'
    },
    scrollPatch:{
      height:CONSTANTS.STICKY_BUTTON_HEIGHT
   },
    scrollPatchWithFAB:{
      height:CONSTANTS.STICKY_BUTTON_HEIGHT+viewportWidth*0.12,
   },
    
  HowitWorksFix:{
        top:-80
      },
      healthyouGuideHeaderImageFix:{
      top:90
      },
       
  ctaOverlay:{
    width:'100%',
    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0.8)',
    zIndex:1000,
    position:'absolute',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20,
    top:Platform.OS==='ios'?-viewportHeight*0.15/2.1:-viewportHeight*0.15/2,
    height:viewportHeight*0.15
  },
  customButtonIcon:{
    fontSize:45,color:'white',alignContent: 'center'},
  ctaInnerButton:{
    width:'38%',
    backgroundColor:'rgba(255,255,255,0.1)',
    borderRadius:8,
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'space-between'
  },
  ctaInnerIcon:{
    fontSize: 25,
    color:'white',
    alignContent: 'center',},

  ctaInnerButtonText:{
    fontFamily:'UniSansSemiBold',
    fontSize:viewportWidth*0.035,
    color:'white',
    lineHeight:18},

  articleImage: {
    width:'100%',
    height: CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT+30,
    top:0,
    resizeMode: 'cover',
  },

  aritcleTitleText:{fontSize:25,color:'white',backgroundColor:'transparent',margin:12,marginLeft:24,flexWrap:'wrap'},


  //image loader styles

  ImageloaderFeaturedContainer:{
    width:viewportWidth,
    height:CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT+46,
    backgroundColor:'rgba(240,240,240,1)',
    alignItems:'center',alignContent:'center',
    justifyContent: 'center',
    zIndex:998,position:'absolute',
    borderRadius:20,
  },

ImageloaderFeaturedIcon:{
  color:'rgba(0,0,0,0.2)',
  fontSize:80,
  borderRadius:20,
  top:-60,
  padding:20,
},

ImageLoaderFeaturedText:{
  color:'rgba(0,0,0,0.2)',
  fontFamily:'UniSansSemiBold',
  fontSize:20,
  flexWrap: 'wrap',
  top:-60,
  width:viewportWidth*0.4,
  textAlign:'center'},

ImageloaderHeaderContainer:{
  width:viewportWidth,
  height:CONSTANTS.UI_CONSTANTS.HEADER_IMAGE_HEIGHT+30,
  backgroundColor:'rgba(220,220,220,1)',
  alignItems:'center',
  alignContent:'center',
  justifyContent: 'center',
  zIndex:998,
  position:'absolute'
},
    
ImageloaderHeaderIcon:{
  color:'rgba(0,0,0,0.5)',
  fontSize:80,marginVertical:20
},


ImageLoaderHeaderText:{
  color:'rgba(0,0,0,0.5)',
  fontFamily:'UniSansSemiBold',
  fontSize:18,
  flexWrap: 'wrap',
  width:viewportWidth*0.25,
  textAlign:'center'
},
ImageloaderArticleContainer:{
  width:viewportWidth*0.9,
  borderRadius:20,
  height:320,
  backgroundColor:'white',
  alignItems:'center',
  alignContent:'center',
  justifyContent: 'center',
  zIndex:998,
  position:'absolute'
},

ImageloaderCompanyNewsContainer:{
  width:'90%',
  top:0,
  borderRadius:20,
  height:200,
  backgroundColor:'white',
  alignItems:'center',  
  alignContent:'center',
  justifyContent: 'center',
  zIndex:998,
  position:'absolute'
},

ImageloaderArticleIcon:{
  color:'rgba(0,0,0,0.2)',
  fontSize:150
},

ImageloaderCompanyNewsIcon:{
  color:'rgba(0,0,0,0.2)',
  fontSize:150
},

sortingMenuContainer:{padding:0,justifyContent: 'center',alignItems:'center',paddingTop:20},
sortingMenuItemContainer:{flexDirection:"row",padding:10,justifyContent:'center',alignItems:'center',width:'100%'},
sortMenuCloseBtn:{color:CONSTANTS.UI_CONSTANTS.SECONDARY_COLOR,fontSize:viewportWidth*0.045,fontFamily:'UniSansSemiBold'},
sortMenuIcon:{fontSize:viewportWidth*0.06,color:'#555555',marginHorizontal:20},
sortMenuText:{fontFamily:'UniSansSemiBold',fontSize:viewportWidth*0.055,color:'#333333',textAlign:'center'},
},);
export default globalStyles;

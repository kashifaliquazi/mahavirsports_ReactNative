import {StyleSheet, Dimensions, FlatList} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

import * as CONSTANTS from '../../utils/constant';
const styles = StyleSheet.create({

  goalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 14,
    width: '100%',
    // shadowColor: 'rgba(0,0,0,1)',
    // shadowOpacity: 0.2,
    // shadowRadius: 6,
    elevation:10,
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // },
    marginVertical: 15
  },
  goalRowInner:{width:'60%'},
  deadlineRow:{width:'40%',alignSelf:'stretch'},
  remarksRow:{width:'100%'},
  title: {
    color: '#01689A',
    // fontSize: 27,
  
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 25
  },
  addGoalButton: {
    width: 60,
    height: 60,
    right: 15,
    backgroundColor: '#8DC440',
    alignSelf: 'flex-end',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9999,
    // shadowColor: 'black',
    // shadowOpacity: 0.3,
    // shadowRadius: 12,
    borderColor: 'white',
    borderWidth: 3
  },
  
  smallWhiteText: {
    // fontSize: '1.2rem',
    // fontFamily: 'unisansregular',
    color: 'white',

    textAlign: 'center'
  },

  filterIcon: {
    width: 36,
    height: 36,
    alignSelf: 'flex-end',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addGoalButton: {
    width: 60,
    height: 60,
    right: 15,
    backgroundColor: '#8DC440',
    alignSelf: 'flex-end',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9999,
    // shadowColor: 'black',
    // shadowOpacity: 0.3,
    // shadowRadius: 12,
    borderColor: 'white',
    borderWidth: 3
  },
  filterDrawerContainer: {
    width: '100%',
    height: viewportHeight,
    //backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    zIndex: 10000
  },
  filterDrawer: {
    width: '100%',
    backgroundColor:'rgba(240,240,240,1)',
    // shadowColor: 'black',
    // shadowOpacity: 0.4,
    // shadowRadius: 44,
    height: viewportHeight,
    
    
  },
  filterHeaderContainer: {
    width: '100%',
    backgroundColor:'white',
    padding: 10,
    borderTopColor: CONSTANTS.UI_CONSTANTS.PRIMARY_COLOR,
    borderTopWidth: 22,
    paddingTop:20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  filterTitle: {
    // fontFamily: 'unisansregular',
    color:'#555555',
    // fontSize: 24
  },
  closeDrawerBtn: {
    // color: '#555555',
    borderRadius: 25,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    // fontSize: 22,
    // fontFamily: 'UniSansSemiBold',
    color: '#555555',
    alignSelf:'flex-start',
    paddingVertical:10
  },
  drawerRow:{
    marginVertical:10,
        paddingHorizontal:15
  },

  darkContainer:{
    backgroundColor:'#111111',
    paddingVertical: 20,
    paddingTop:25,
    marginTop:-10,
  },

  tileWrapper:{flex:1,paddingHorizontal:10,flexWrap: 'wrap',zIndex:100}, //added flex:1 to fix : https://gohealthyyou.atlassian.net/browse/MYHMOBILE-1981
  // tileWrapper:{paddingHorizontal:10,flexWrap: 'wrap',zIndex:100},
  tileRowInner:{width:'60%',},
  tileContainer: {
    backgroundColor: 'white',
    flexShrink:1, //added flexShrink:1 to fix : https://gohealthyyou.atlassian.net/browse/MYHMOBILE-1981
    // flexWrap: 'wrap',
    padding: 12,
    borderRadius: 14,
    width: '100%',
    // shadowColor: 'rgba(0,0,0,1)',
    // shadowOpacity: 0.2,
    // shadowRadius: 6,
    elevation:5,
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // },
    marginVertical: 10
  },

  tileRow: {
    flexDirection:'row',  
    paddingVertical:10,
    flexWrap: 'wrap',
    width:'100%',
    justifyContent: 'space-between',   
    
  },

  tileIcon: {
    width: 42,
    height: 42,
    padding: 10,
    backgroundColor: '#D8D8D8',
    alignSelf: 'flex-end',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5,
    alignSelf: 'flex-start'
  },

  contentText: {
    // fontSize: '1.17rem',
    color: 'black',
    // fontFamily: 'unisansregular',
    paddingRight:20
  },

  tileTitleText: {
    // fontSize: '1rem',
    color: '#8DC440',
    // fontFamily: 'UniSansSemiBold'
  },

  buttonRow:{flexDirection:'row',justifyContent: 'space-between'},

  
  
 
  iconTile:{backgroundColor:'white',width:viewportWidth*0.15,height:viewportWidth*0.15,margin:10,borderRadius:10,justifyContent: 'center',alignContent: 'center',alignItems: 'center',shadowOpacity:0.2,shadowRadius:22,elevation:10},
  iconGridContainer:{flex:1,flexDirection: 'row',flexWrap: 'wrap',padding:10,justifyContent:'center'},
  categoryIcon:{
    // fontSize:32
},
  

});

export default styles;

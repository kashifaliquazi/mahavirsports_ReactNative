
import React, { Component } from 'react';
import globalStyles from "../../assets/css/globalstyles";
import { Text, View, Button, TextInput,ImageBackground, TouchableOpacity, Dimensions,Image,StyleSheet ,Modal} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { AsyncStorage } from 'react-native';
import styles from './signup.style';
import GradientButton from '../../components/gradientbutton/gradientButton';
import * as CONSTANTS from '../../utils/constant';
import Fab from '../../components/fab/Fab'
import { connect } from 'react-redux';
import Loader from '../../components/loader/loader'
// import globalStyles from '../../assets/css/globalStyles';

class VerifyUser extends Component {
  constructor(props) {
    super(props);
    //alert("Loginn ",this.props);
    this.state = { mobileno: '', password: '',name:'',modalVisible:true,
    nameDirty:false,
    isNameEmpty:true,
    passwordDirty:false,
    isPasswordEmpty:true,
    mobileDirty:false,
    isMobileEmpty:true,
   };

  }


  componentDidMount() {

  }

  getNameStyle()
  {
    if(this.state.isNameEmpty && this.state.nameDirty){
    return(globalStyles.textInputAlert);
    }
  }
  getPasswordStyle()
  {
    if(this.state.isPasswordEmpty && this.state.passwordDirty){
        return(globalStyles.textInputAlert);
    }
  }
  getNameStyle()
  {
    if(this.state.isNameEmpty && this.state.nameDirty){
        return(globalStyles.textInputAlert);
    }
  }
  getMobileStyle()
  {
    if(this.state.isMobileEmpty && this.state.mobileDirty){
        return(globalStyles.textInputAlert);
    }
  }
  getModel =()  =>{
    const { modalVisible } = this.state;
    return (
      <View style={[modelStyle.centeredView]}>
        
        <View
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          preventNegativeScrolling={false}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >

          <View style={modelStyle.centeredView}>
            <View style={modelStyle.modalView}>


            <View style={styles.readysetContainer}>
            <Text style={styles.go}>Sign Up</Text>
            </View>
            <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'100%'}]}>
        <TextInput underlineColorAndroid='transparent'
        placeholder='Name'
        style={[globalStyles.modelText,this.getNameStyle()]}
        onChangeText={(name) => {
          this.setState({name});
          this.setState({naemDirty : false});
          // this.setState({isUserNameEmpty : false});
          }}
          value={this.state.name}
        />
        </View>
        <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'100%'}]}>
        <TextInput underlineColorAndroid='transparent'
        placeholder='Mobile no'
        keyboardType ='numeric'
        style={[globalStyles.modelText,this.getMobileStyle()]}
        onChangeText={(mobileno) => {
          this.setState({mobileno});
          this.setState({mobileDirty : false});
          // this.setState({isUserNameEmpty : false});
          }}
          value={this.state.mobileno}

        />
        </View>
        
        <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'100%'}]}>
        <TextInput underlineColorAndroid='transparent'
        placeholder='Password'
        style={[globalStyles.modelText,this.getPasswordStyle()]}
        onChangeText={(password) => {
          this.setState({password});
          this.setState({passwordDirty : false});
          // this.setState({isUserNameEmpty : false});
          }}
          value={this.state.password}
        />
        </View>

          
<View style={{width:'80%'}}>
  <GradientButton color={CONSTANTS.UI_CONSTANTS.LIGHTBLUE_CTA_COLORS} type={'BTN'} text={'Sign up'} onPress={()=>{
 //this.props.navigation.navigate('VerifyUser',{ mobileno: this.state.mobileno });
 this.signup();
}}/>
  <TouchableOpacity style={{marginTop:10, 
      width:"100%",
      alignSelf:'center'}} onPress={()=> { this.props.navigation.navigate('VerifyUser');}}>
    <Text style={styles.forgotText}>Login</Text></TouchableOpacity>
</View>
        

{/* <Text style={styles.copyrightText}> {CONSTANTS.COPYRIGHTS.COPYRIGHT} </Text> */}


            </View>
           
          </View>
        </View>

      </View>
    );
  }
  signup = () => {

    let submutForm = true;
      if(this.state.name == ''){
        this.setState({isNameEmpty : true});
        this.setState({nameDirty : true});
        submutForm = false;
      } 

       if(this.state.password == '')
      {
        this.setState({isPasswordEmpty : true});
       this.setState({passwordDirty : true});
        submutForm = false;
      }

      if(this.state.mobileno == '')
      {
        this.setState({isMobileEmpty : true});
       this.setState({mobileDirty : true});
        submutForm = false;
      }
      if(!submutForm)
      return
    this.props.dispatch({ type: 'SHOW_LOADER'});
    let url = CONSTANTS.BASE_URL + CONSTANTS.SIGNUP_API;
  //  alert(url+ this.state.mobileno);
    fetch(url, {
      method: CONSTANTS.METHODS.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": this.state.name,
        "mobileno": this.state.mobileno,
        "password": this.state.password
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.dispatch({ type: 'HIDE_LOADER' });
        console.log(responseJson)
        alert(JSON.stringify(responseJson));
        if (responseJson.success) {
         // alert(responseJson.success);
          this.props.navigation.navigate('VerifyUser',{ mobileno: this.state.mobileno });
        } 
          // alert("error" + JSON.stringify(responseJson));
      })
      .catch((error) => {
        this.props.dispatch({ type: 'HIDE_LOADER', message: "This is a premium feature" });
        alert(error);
        console.error(error);
      });
  }

  render() {
   // alert("Login ",this.props.loader);
    return (
      <ImageBackground style={{
        flex: 1,
       // backgroundColor:'red',
        justifyContent: "center",
        alignItems: "center",
        height:viewportHeight,
        width:viewportWidth
      }}
      source={require("../../assets/images/login.jpg")}
      >
         {this.getModel()}
      </ImageBackground>
    );
  }
}
function mapStatetoProps(state)
{
    return {
      loader:state.loaderReducer
    }
}

const modelStyle = StyleSheet.create({
  centeredView: {
    // height:viewportHeight - viewportHeight*0.2,
    // width:viewportWidth -viewportWidth *0.1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  //.  marginTop: 22
  },
  modalView: {
   // flex: 1,
    height:viewportHeight - viewportHeight*0.4,
    width:viewportWidth -viewportWidth *0.1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    width:viewportWidth-viewportWidth*.7,
    borderRadius: 12,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default connect(mapStatetoProps)(VerifyUser);
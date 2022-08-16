
import React, { Component } from 'react';
import globalStyles from "../../assets/css/globalstyles";
import { Text, View, Button, TextInput,ImageBackground, TouchableOpacity, Dimensions,Image,StyleSheet ,Modal} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { AsyncStorage } from 'react-native';
import styles from './verify.style';
import GradientButton from '../../components/gradientbutton/gradientButton';
import * as CONSTANTS from '../../utils/constant';
import Fab from '../../components/fab/Fab'
import { connect } from 'react-redux';
import Loader from '../../components/loader/loader'
// import globalStyles from '../../assets/css/globalStyles';

class SignUp extends Component {
  constructor(props) {
    super(props);
    //alert("Loginn ",this.props);
    this.state = { OTP: '',
    OTPDirty:false,
    isOTPEmpty:true, };

  }


  componentDidMount() {
    alert(this.props.route.params.mobileno);
  }


  getOTPStyle()
  {
    if(this.state.isOTPEmpty && this.state.OTPDirty){
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
            <Text style={styles.go}>Verify Account</Text>
            </View>
            <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'100%'}]}>
        <TextInput underlineColorAndroid='transparent'
        placeholder='Enter the OTP'
        style={[globalStyles.modelText,this.getOTPStyle()]}
        onChangeText={(OTP) => {
          this.setState({OTP});
          this.setState({OTPDirty : false});
          // this.setState({isUserNameEmpty : false});
          }}
          keyboardType ='numeric'
          value={this.state.OTP}
        />
        </View>
        
          
<View style={{width:'80%'}}>
  <GradientButton color={CONSTANTS.UI_CONSTANTS.LIGHTBLUE_CTA_COLORS} type={'BTN'} text={'Verify'} onPress={()=>{
  this.VerifyUser();
}}/>
  <TouchableOpacity style={{marginTop:10, 
      width:"100%",
      alignSelf:'center'}} onPress={()=> { this.props.navigation.navigate('Login');}}>
    <Text style={styles.forgotText}>resend otp</Text></TouchableOpacity>
</View>
        

{/* <Text style={styles.copyrightText}> {CONSTANTS.COPYRIGHTS.COPYRIGHT} </Text> */}


            </View>
           
          </View>
        </View>

      </View>
    );
  }
  VerifyUser = () => {

    let submutForm = true;
    if(this.state.OTP == ''){
      this.setState({isOTPEmpty : true});
      this.setState({OTPDirty : true});
      submutForm = false;
    } 


    if(!submutForm)
    return

    this.props.dispatch({ type: 'SHOW_LOADER', message: "This is a premium feature" });
    let url = CONSTANTS.BASE_URL + CONSTANTS.VERIFY_USER_API;
  //  alert(url+ this.state.mobileno);
    fetch(url, {
      method: CONSTANTS.METHODS.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "mobileno": this.props.route.params.mobileno
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.dispatch({ type: 'HIDE_LOADER', message: "This is a premium feature" });
        console.log(responseJson)
        alert(JSON.stringify(responseJson));
        if (responseJson.success) {
      //    alert(responseJson.success);
      this.props.navigation.navigate('Login');

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
        
        {/* <ImageBackground 
        style ={{
        //  flex: 1,
         height:viewportHeight,
         width:viewportWidth
        }}
        source={require("../../assets/images/login.jpg")}
        /> */}
         {this.getModel()}
           {/* <Loader/> */}
            
       

        {/* <Text>login!</Text>
        <TextInput
          placeholder="Mobile number"
          // underlineColorAndroid='transparent'
          style={[{
            width: '80%',
            backgroundColor: 'white',
            height: viewportHeight * 0.08,
            // borderRadius:viewportHeight*0.04,
            // fontSize:viewportWidth*0.05,
            // shadowColor:'rgba(0,0,0,0.3)',
            // shadowRadius:2,
            // shadowOffset:{width:0,height:1},
            // shadowOpacity:1,borderColor:'rgba(0,0,0,0.5)',
            // borderWidth:1,
            // borderColor:'rgba(100,100,100,0.2)',
            // fontFamily:'unisansregular',
            color: 'black',
            //   paddingLeft:viewportWidth*0.03,
          }]}
        // onChangeText={(userName) => {
        // this.setState({userName});
        // this.setState({userNameDirty : false});
        // // this.setState({isUserNameEmpty : false});
        // }}
        //   value={this.state.userName}
        />
        <TextInput
          placeholder="Password"
          // underlineColorAndroid='transparent'
          style={[{
            width: '80%',
            backgroundColor: 'white',
            height: viewportHeight * 0.08,
            borderRadius: viewportHeight * 0.04,
            fontSize: viewportWidth * 0.05,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowRadius: 2,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 1, borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 1,
            borderColor: 'rgba(100,100,100,0.2)',
            fontFamily: 'unisansregular',
            color: 'black',
            paddingLeft: viewportWidth * 0.03,
          }]}
        // onChangeText={(userName) => {
        // this.setState({userName});
        // this.setState({userNameDirty : false});
        // // this.setState({isUserNameEmpty : false});
        // }}
        //   value={this.state.userName}
        />
        <Button
          title="Login"
          onPress={() => {
            // this.props.navigation.navigate('Home');


            this.login()
          }
          } />

        <Button
          title="verify user"
          onPress={() => {
            this.props.navigation.navigate('VerifyUser');
          }
          } />

        <Button
          title="signup"
          onPress={() => {
            this.props.dispatch({ type: 'SHOW_LOADER', message: "This is a premium feature" });
         //   this.props.navigation.navigate('SignUp');
          }
          } /> */}
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


export default connect(mapStatetoProps)(SignUp);
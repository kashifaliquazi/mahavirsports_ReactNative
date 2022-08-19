
import React, { Component } from 'react';
import globalStyles from "../../assets/css/globalstyles";
import { Text, View, Button, TextInput,ImageBackground, TouchableOpacity, Dimensions,Image,StyleSheet ,Modal} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { AsyncStorage } from 'react-native';
import styles from './login.style';
import GradientButton from '../../components/gradientbutton/gradientButton';
import * as CONSTANTS from '../../utils/constant';
import Fab from '../../components/fab/Fab'
import { connect } from 'react-redux';
import Loader from '../../components/loader/loader'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// import globalStyles from '../../assets/css/globalStyles';

class Login extends Component {
  constructor(props) {
    super(props);
    //alert("Loginn ",this.props);
    this.state = { mobileno: '9977297397', password: 'Test@123',
    modalVisible:true };

  }

  getUserDataFromStorage = async () =>{

    const userData = await AsyncStorage.getItem('userSession');
    if (userData !== null) {
      // We have data!!
      //alert(userData)
      this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
      });
    }
  }
  componentDidMount() {
   // this.props.dispatch({ type: 'SHOW_LOADER', message: "This is a premium feature" });
    try {
     // alert("mounted")
  //     this.props.navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'Login' }],
  // });
      this.getUserDataFromStorage();
      // this.setState({modalVisible:true});
      // const userData = await AsyncStorage.getItem('userSession');
      // if (userData !== null) {
      //   // We have data!!
      //   alert(userData)
      //   console.log(value);
      //   // this.props.navigation.reset({
      //   //       index: 0,
      //   //       routes: [{ name: 'Home' }],
      //   // });
      // }
      // AsyncStorage.getItem(
      //   'userSession',
      //   (err, result) => {
      //     if (result != null) {
      //       this.props.navigation.reset({
      //         index: 0,
      //         routes: [{ name: 'Home' }],
      //       });
      //     }
      //   }
      // );
    } catch (error) {
      // Error saving data
    }
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
            <Text style={styles.go}>Login</Text>
            </View>
        <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'100%'}]}>
        <TextInput underlineColorAndroid='transparent'
        placeholder='Mobile no'
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
  <GradientButton color={CONSTANTS.UI_CONSTANTS.LIGHTBLUE_CTA_COLORS} type={'BTN'} text={'Login'} onPress={()=>{
  this.login();
}}/>
  <TouchableOpacity style={{marginTop:10, 
      width:"100%",
      alignSelf:'center'}} onPress={()=> { this.props.navigation.navigate('SignUp');}}>
    <Text style={styles.forgotText}>Forgot Password?</Text></TouchableOpacity>
</View>
        

<View style={{width:'80%'}}>
  <GradientButton color={CONSTANTS.UI_CONSTANTS.BTN_COLORS} type={'BTN'} text={'Sign Up'} onPress={()=>{
  this.props.navigation.navigate('SignUp');
}}/>
  
</View>
{/* <Text style={styles.copyrightText}> {CONSTANTS.COPYRIGHTS.COPYRIGHT} </Text> */}


            </View>
           
          </View>
        </View>

      </View>
    );
  }
  login = () => {

    this.props.dispatch({ type: 'SHOW_LOADER', message: "This is a premium feature" });
    let url = CONSTANTS.BASE_URL + CONSTANTS.LOGIN_API;
  //  alert(url+ this.state.mobileno);
    fetch(url, {
      method: CONSTANTS.METHODS.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "mobileno": this.state.mobileno,
        "password": this.state.password
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.dispatch({ type: 'HIDE_LOADER', message: "This is a premium feature" });
        console.log(responseJson)

        if (responseJson.success) {
      //    alert(responseJson.success);
          try {
            AsyncStorage.setItem(
              'userSession',
              JSON.stringify(responseJson.success), (err, result) => {
                this.props.navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                }); 
              }
            );
          } catch (error) {
            // Error saving data
            alert(error);
          }

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
            // 
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
            //fontFamily: 'unisansregular',
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


export default connect(mapStatetoProps)(Login);
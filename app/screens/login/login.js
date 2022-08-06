
import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { AsyncStorage } from 'react-native';
import styles from './login.style';
import * as CONSTANTS from '../../utils/constant';
// import globalStyles from '../../assets/css/globalStyles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileno: '', password: '' };

  }
  componentDidMount() {
    try {
      AsyncStorage.getItem(
        'userSession',
        (err, result) => {
          if (result != null) {
            this.props.navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }
        }
      );
    } catch (error) {
      // Error saving data
    }
  }
  login = () => {

    let url = CONSTANTS.BASE_URL + CONSTANTS.LOGIN_API;
    fetch(url, {
      method: CONSTANTS.METHODS.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "mobileno": "123",
        "password": "Test@123"
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)

        if (responseJson.success) {
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
          }

        } else
          // alert("error" + JSON.stringify(responseJson));
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>

        <Text>login!</Text>
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
          title="Go to Home"
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
            this.props.navigation.navigate('SignUp');
          }
          } />
      </View>
    );
  }
}

export default Login;
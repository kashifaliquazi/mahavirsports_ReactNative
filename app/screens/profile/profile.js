import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
class Profile extends Component {
    constructor(props){
        super(props);
    }
    logout = async ()=>{
         this.props.navigation.reset({
        index: 0,
        key: null,
        routes: [{ name: 'Login' }],
  });
      await AsyncStorage.clear();

    }
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Profile!</Text>
        <Button
        title="logout"
        onPress={() =>this.logout()}/>
      </View>
    );
  }
}

export default Profile;
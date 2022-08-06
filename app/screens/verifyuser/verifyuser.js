import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class VerifyUser extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>VerifyUser!</Text>
        <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}

export default VerifyUser;
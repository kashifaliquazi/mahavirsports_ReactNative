import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Home extends Component {
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
        <Text>Home!</Text>
        <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}

export default Home;
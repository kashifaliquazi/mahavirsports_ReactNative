import React, { Component } from 'react';
import { Text,TouchableOpacity, View, Button, TextInput, Dimensions, ScrollView, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
class MyButton extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {


  }

  render() {
    return (
      <TouchableOpacity
   style={[styles.buttonLargeContainer, styles.primaryButton,
  { borderRadius:10,backgroundColor:this.props.color}]}
   onPress={() => {this.props.onPress()}}>
  <Text style={styles.buttonText}>{this.props.title}</Text>
 </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonLargeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
   height:viewportHeight*0.05
  },
primaryButton: {
    backgroundColor: '#FF0017',
  },
buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default connect()(MyButton);
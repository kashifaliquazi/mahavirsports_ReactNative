import React, { Component } from 'react';
import { Text, View, Button, TextInput, Dimensions, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

class KeyboardHandling extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {


  }

  render() {
    return (
      <SafeAreaView
        edges={['left', 'right']}
        style={{
          backgroundColor: 'white',
        }}
      >
        <KeyboardAvoidingView behavior="padding" enabled={false} keyboardVerticalOffset= {20}>
          <ScrollView
            bounces={false}
            // contentContainerStyle={commonStyles.scrollContainer}
          // contentInsetAdjustmentBehavior="always"
           // overScrollMode="always"
           // showsVerticalScrollIndicator={true}
          //    style={commonStyles.scroll}
          >
            {this.props.children}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default connect()(KeyboardHandling);
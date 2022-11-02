import React, { Component } from 'react';
import { Text, View, Button, TextInput, Dimensions, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
// import { useHeaderHeight } from '@react-navigation/native-stack';
import { HeaderHeightContext } from '@react-navigation/elements';

class KeyboardHandling extends Component {
  constructor(props) {
    super(props);
    this.state ={height:10}

  }

  componentDidMount() {

    // const height = useHeaderHeight()
    // alert("heingt"+height);
  }

  render() {

    return (

      <SafeAreaView
        edges={['left', 'right']}
        style={{
          backgroundColor: 'white',
        }}
      >
        
        <HeaderHeightContext.Consumer>
  {(headerHeight) => {
        return (<KeyboardAvoidingView behavior="padding" enabled={false}  keyboardVerticalOffset= {headerHeight}>
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
        </KeyboardAvoidingView>)
            
  }}
  </HeaderHeightContext.Consumer>
      </SafeAreaView>
    );
  }
}

export default connect()(KeyboardHandling);
import React, { Component } from 'react';
import { Text, View,ActivityIndicator, Button,TextInput, Dimensions, TouchableOpacity,FlatList,Modal, Alert,Pressable,StyleSheet, ScrollView  } from 'react-native';
import styles from '../../assets/css/lisitng' ;
import Fab from '../../components/fab/Fab'
import { AsyncStorage } from 'react-native';
const {width: viewportWidth,height: viewportHeight} = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant';
import { connect } from 'react-redux';
import globalStyles from "../../assets/css/globalstyles";
import CheckBox from '@react-native-community/checkbox';
class TicketDetails extends Component {
    constructor(props){
        super(props);
        this.state= {
          serviceboys:[],
          filterModalVisible:false
        }
    }
    fetchServiceBoys = (user,filers={}) => {
      this.props.dispatch({ type: 'SHOW_LOADER' });

  let url = CONSTANTS.BASE_URL + CONSTANTS.GETUSERS_API+`?role=SERVICEUSER`;
  // alert(url);
  fetch(url, {
    method: CONSTANTS.METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.dispatch({ type: 'HIDE_LOADER' });
      if (responseJson.success) {
         this.setState({serviceboys:responseJson.success,filterModalVisible:true})


      } else
      this.setState({filterModalVisible:false})

    })
    .catch((error) => {
      this.setState({filterModalVisible:false})
      this.props.dispatch({ type: 'HIDE_LOADER' });
    });
}
  getTickets = async () =>{

    const userData = await AsyncStorage.getItem('userSession');
    if (userData !== null) {
     
      let user = JSON.parse(userData);
      this.user =user;
      this.fetchServiceBoys(user)
    }
  }

  getFilterModel =()  =>{
    const { filterModalVisible } = this.state;
    return (
      <View style={modelStyle.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={filterModalVisible}
          preventNegativeScrolling={false}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={modelStyle.centeredView}>
            <View style={modelStyle.modalView}>
              <ScrollView>
            {this.state.serviceboys.map((item)=>{
            return ( <Text style={modelStyle.modalText}>{item.name}</Text>)
          })}
            {this.state.serviceboys.map((item)=>{
            return ( <Text style={modelStyle.modalText}>{item.name}</Text>)
          })}
            {this.state.serviceboys.map((item)=>{
            return ( <Text style={modelStyle.modalText}>{item.name}</Text>)
          })}
          
          </ScrollView>
            </View>
           
          </View>
        </Modal>

      </View>
    );
  }
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
          {this.getFilterModel()}
        <Text>Assign</Text>
        <Button
        title="Assign"
        onPress={() => {
          this.getTickets();
          if(this.state.serviceboys.length ==0){
            
          }else{

          }
        }}/>
      </View>
    );
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


export default connect()(TicketDetails);
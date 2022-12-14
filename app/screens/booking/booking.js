import React, { Component } from 'react';
import { Text, View,ActivityIndicator, Button,TextInput, Dimensions, TouchableOpacity,FlatList,Modal, Alert,Pressable,StyleSheet  } from 'react-native';
import styles from '../../assets/css/lisitng' ;
import Fab from '../../components/fab/Fab'
import { AsyncStorage } from 'react-native';
const {width: viewportWidth,height: viewportHeight} = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant';
import { connect } from 'react-redux';
import globalStyles from "../../assets/css/globalstyles"
import MyButton from "../../components/mybutton/mybutton";
import FontAwesome, {Icons,SolidIcons, RegularIcons, BrandIcons} from 'react-native-fontawesome';

class Booking extends Component {
    constructor(props){
        super(props);
        this.state = {
          user:[],
          modalVisible: false,
          "name":"",
          "mobileno":"",
          "password":"",
          nameDirty:false,
          isNameEmpty:true,
          passwordDirty:false,
          isPasswordEmpty:true,
          mobileDirty:false,
          isMobileEmpty:true,
          pin:"",
          item:{}
        };
        this.user ={};
    }

      fetchBookings = (user,filers={}) => {
        this.props.dispatch({ type: 'SHOW_LOADER' });
    let url = CONSTANTS.BASE_URL + CONSTANTS.GET_USERS_TICKETS_API;
    fetch(url, {
      method: CONSTANTS.METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
      //  alert(JSON.stringify(responseJson))
        this.props.dispatch({ type: 'HIDE_LOADER' });
        if (responseJson.success) {
           this.setState({user:responseJson.success})
  

        } 

      })
      .catch((error) => {
        this.props.dispatch({ type: 'HIDE_LOADER' });
      });
  }
    getUsers = async () =>{

      const userData = await AsyncStorage.getItem('userSession');
      if (userData !== null) {
       
        let user = JSON.parse(userData);
        this.user =user;
        this.fetchBookings(user)
      }
    }

    componentDidMount(){
      
     this.getUsers();
    }


    createTicket = () => {
      let submutForm = true;
      if(this.state.name == ''){
        this.setState({isNameEmpty : true});
        this.setState({nameDirty : true});
        submutForm = false;
      } 

       if(this.state.password == '')
      {
        this.setState({isPasswordEmpty : true});
       this.setState({passwordDirty : true});
        submutForm = false;
      }

      if(this.state.mobileno == '')
      {
        this.setState({isMobileEmpty : true});
       this.setState({mobileDirty : true});
        submutForm = false;
      }
      if(!submutForm)
      return
      this.props.dispatch({type:'SHOW_LOADER'});
      let url = CONSTANTS.BASE_URL + CONSTANTS.ADD_SERVICE_BOY;
      fetch(url, {
        method: CONSTANTS.METHODS.POST,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.user.token}`
        },
        body: JSON.stringify({
          "name": this.state.name,
          "mobileno": this.state.mobileno,
          "password": this.state.password
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.props.dispatch({type:'HIDE_LOADER'});
          console.log(responseJson)
          
          if (responseJson.success) {
            let createdUser ={
              "name": this.state.name,
              "mobileno": this.state.mobileno,
              "password": this.state.password,
              "userid":responseJson.success.userid,
              "role":"SERVICEBOY"
            }
            let users = [createdUser, ...this.state.user];
            this.setState({user:users,modalVisible:false})
           // this.setModalVisible(false)

  
          } 
        })
        .catch((error) => {
          this.props.dispatch({type:'HIDE_LOADER'});
          this.setModalVisible(!modalVisible)
          console.error(error);
        });
    }
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
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
    getPinText = ()=>{
      if(this.state.item.status == "INPROGRESS"){
        return `Share ${this.state.pin} to close the Ticket!`
      }else if(this.state.item.status == "COMPLETED"){
        return 'This ticket is already closed'
      }else if(this.state.item.status == "PENDING"){
        return 'We will assign you the vender shortly'
      }else{
        return "asasdf"
      }
    }
    getModel =()  =>{
      const { modalVisible } = this.state;
      return (
        <View style={modelStyle.centeredView}>
          <Modal
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

              <View style={[{paddingVertical:10}]}>
              <Text style={globalStyles.labelText}>Verification Code</Text>
              </View>
               
              <View style={[{paddingVertical:10}]}>
              <Text style={globalStyles.textBoxLables}>{this.getPinText()}</Text>
              </View>
               
       
          
      
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>

                  
              <MyButton
    title="cancel"
    color="grey"
       onPress={() => {this.setModalVisible(!modalVisible)}
       }/>               
              </View>
          {/* <View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly',margin:10}}>
              <Pressable
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() =>{ 
                 
                    this.setModalVisible(!modalVisible)
                  }
                  }
                >
                  <Text style={modelStyle.textStyle}>cancel</Text>
                </Pressable>
                <Pressable
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() =>{ 
                    this.createTicket();
                   
                  }}
                >
                  <Text style={modelStyle.textStyle}>Create User</Text>
                </Pressable>
              </View> */}
              </View>
             
            </View>
          </Modal>

        </View>
      );
    }
  renderTickets =(item, index, separators) =>{
    return (<View style={styles.tileWrapper}>
      <View style={styles.tileContainer}>
       
      <View style={styles.tileRow}>
          <View style={styles.tileRowInner}>
            <Text style={styles.tileTitleText}>Ticket Id</Text>
            <Text style={styles.contentText}>{item.ticketid==undefined?CONSTANTS.BLANK_FIELD:item.ticketid}</Text>
          </View>
          
          <View style={styles.buttonRow}>

            <TouchableOpacity activeOpacity={0.8} style={[styles.tileIcon, { width: 112, height: 42, }]}
              onPress={() => {
            
                this.setState({ modalVisible: true, purchaseid: item.purchaseid,pin:item.pin,item:item });

              }}
            >
              <Text style={styles.tileTitleText}>Resolve</Text>
            </TouchableOpacity>
          </View>
      </View>
         
          <View style={styles.tileRow}>
         
                      
  
              <View style={{marginVertical:10}}>
                <Text style={styles.tileTitleText}>Status</Text>
                <Text style={styles.contentText}>{item.status}</Text>
              </View>
                 <View style={{marginVertical:10}}>
           <Text style={styles.tileTitleText}>Created on</Text>
           <Text style={styles.contentText}>{item.assigneecontact}</Text>
         </View>

          </View> 
          <View style={styles.tileRow}>
         
                      
      
 
             <View style={{marginVertical:10}}>
               <Text style={styles.tileTitleText}>Assignee</Text>
               <Text style={styles.contentText}>{item.status}</Text>
             </View>
                <View style={{marginVertical:10}}>
          <Text style={styles.tileTitleText}>Assignee Contact</Text>
          <Text style={styles.contentText}>{item.assigneecontact}</Text>
        </View>

         </View> 
  
          </View>
          
          </View>)
  }
  render() {
    return (
      <View style= {{
      

        backgroundColor:'white',
      }}>
        {/* <View style= {{
      
      flex: 1,
      justifyContent: "center",
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      height:viewportHeight,
      width:viewportWidth,
      position:'absolute',
      zIndex:999999
    }}>
          <ActivityIndicator size="large" />
          </View> */}
      <View >
        {this.getModel()}
      {/* <Fab
      onClick={()=>{
        this.setModalVisible(true)
      }}
         /> */}
        
      <FlatList
  data={this.state.user}
  renderItem={({ item, index, separators }) => (

this.renderTickets(item, index, separators)

        )}
/>
      </View>
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
    height:viewportHeight - viewportHeight*0.6,
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


export default connect()(Booking);
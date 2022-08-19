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
          filterModalVisible:false,
          purchasedetails:{},
          assigneedetails:{}
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

fetchPurchaseDetails = (user,purchaseid) => {
  this.props.dispatch({ type: 'SHOW_LOADER' });

let url = CONSTANTS.BASE_URL + CONSTANTS.GET_PURCHASES_API+`?purchaseid=${purchaseid}`;
fetch(url, {
method: CONSTANTS.METHODS.GET,
headers: {
  'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.token}`
}
})
.then((response) => response.json())
.then((responseJson) => {
  // alert(JSON.stringify(responseJson));
  this.props.dispatch({ type: 'HIDE_LOADER' });
  if (responseJson.success) {
     this.setState({purchasedetails:responseJson.success[0]})
  }
})
.catch((error) => {
  this.setState({filterModalVisible:false})
  this.props.dispatch({ type: 'HIDE_LOADER' });
});
}
fetchAssigneeDetails = (user,userid) => {
  this.props.dispatch({ type: 'SHOW_LOADER' });

let url = CONSTANTS.BASE_URL + CONSTANTS.GETUSERS_API+`?userid=${userid}`;
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
     this.setState({assigneedetails:responseJson.success[0]})
  }
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
    //  
      this.fetchPurchaseDetails(user,this.props.route.params.ticket.purchaseid);
      if(this.props.route.params.ticket.assignee !=null && this.props.route.params.ticket.assignee !=undefined)
      this.fetchAssigneeDetails(user,this.props.route.params.ticket.assignee);
    }
  }
componentDidMount(){
  this.getTickets();
}

assignTicket = () => {
// alert(JSON.stringify({
//   "ticketid": this.props.route.params.ticket.ticketid,
//   "assignee": this.state.assigneedetails.userid
// }))
  if(this.state.assigneedetails.name == undefined){
    Alert.alert(
      "Alert",
      "Please select assigne",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return
  } 
 
 
  this.props.dispatch({type:'SHOW_LOADER'});
  let url = CONSTANTS.BASE_URL + CONSTANTS.ASSIGN_TICKET;
  fetch(url, {
    method: CONSTANTS.METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    },
    body: JSON.stringify({
      "ticketid": this.props.route.params.ticket.ticketid,
      "assignee": this.state.assigneedetails.userid
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
getServiceBoyRow(assigneedetails){
 return ( <View style={styles.tileWrapper}>
   <TouchableOpacity
   onPress={()=>{
    this.setState({assigneedetails:assigneedetails,filterModalVisible:false})
   }}
   style={{
    backgroundColor: 'white',
    flexShrink:1,
    padding: 5,
    borderRadius: 14,
    width: '100%',
    elevation:5,
    marginVertical: 3,
    alignItems:'center'
  }}>
   <Text style={{}}> {assigneedetails.name} </Text>
 
        </TouchableOpacity>
    </View>
 )
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
            return ( this.getServiceBoyRow(item))
          })}
            {this.state.serviceboys.map((item)=>{
            return ( <Text style={modelStyle.modalText}>{item.name}</Text>)
          })}
            {this.state.serviceboys.map((item)=>{
            return ( <Text style={modelStyle.modalText}>{item.name}</Text>)
          })}
          
          </ScrollView>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly',margin:10}}>
            <Pressable
                style={[modelStyle.button, modelStyle.buttonClose]}
                onPress={() =>{ 
               
                  this.setState({filterModalVisible:false})
                }
                }
              >
                <Text style={modelStyle.textStyle}>cancel</Text>
              </Pressable>
    
            </View>
            </View>
           
          </View>
        </Modal>

      </View>
    );
  }
  renderPurcahseDetails(){
    return ( <View style={styles.tileWrapper}>
      <View style={styles.tileContainer}>
        <View style={styles.tileRow}>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Purchase ID</Text>
            <Text style={styles.contentText}>{this.state.purchasedetails.purchaseid == undefined ? CONSTANTS.BLANK_FIELD : this.state.purchasedetails.purchaseid}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Product Id</Text>
            <Text style={styles.contentText}>{this.state.purchasedetails.productid == undefined ? CONSTANTS.BLANK_FIELD : this.state.purchasedetails.productid}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Bill Id</Text>
            <Text style={styles.contentText}>{this.state.purchasedetails.billid == undefined ? CONSTANTS.BLANK_FIELD : this.state.purchasedetails.billid}</Text>
          </View>
        </View>
        <View style={styles.tileRow}>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Product Details</Text>
            <Text style={styles.contentText}>{this.state.purchasedetails.productdetails == undefined ? CONSTANTS.BLANK_FIELD : this.state.purchasedetails.productdetails}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Sold By</Text>
            <Text style={styles.contentText}>{this.state.purchasedetails.initiatedbyname == undefined ? CONSTANTS.BLANK_FIELD : this.state.purchasedetails.initiatedbyname}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Purchased on</Text>
            <Text style={styles.contentText}>{this.state.purchasedetails.purchasedate == undefined ? CONSTANTS.BLANK_FIELD : this.state.purchasedetails.purchasedate}</Text>
          </View>
        </View>
      </View>
    </View>)
  }

  renderTicketDetials(){
    let item ={};
    return( <View style={styles.tileWrapper}>
      <View style={styles.tileContainer}>
        <View style={styles.tileRow}>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>User ID</Text>
            <Text style={styles.contentText}>{this.props.route.params.ticket.userid == undefined ? CONSTANTS.BLANK_FIELD : this.props.route.params.ticket.userid}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Name</Text>
            <Text style={styles.contentText}>{this.props.route.params.ticket.name == undefined ? CONSTANTS.BLANK_FIELD : this.props.route.params.ticket.name}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Mobile no</Text>
            <Text style={styles.contentText}>{this.props.route.params.ticket.name == undefined ? CONSTANTS.BLANK_FIELD : this.props.route.params.ticket.name}</Text>
          </View>
        </View>
        <View style={styles.tileRow}>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Ticket Id</Text>
            <Text style={styles.contentText}>{this.props.route.params.ticket.ticketid == undefined ? CONSTANTS.BLANK_FIELD : this.props.route.params.ticket.ticketid}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Status</Text>
            <Text style={styles.contentText}>{this.props.route.params.ticket.status == undefined ? CONSTANTS.BLANK_FIELD : this.props.route.params.ticket.status}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Created</Text>
            <Text style={styles.contentText}>{this.props.route.params.ticket.created == undefined ? CONSTANTS.BLANK_FIELD : this.props.route.params.ticket.created}</Text>
          </View>
        </View>
      </View>
    </View>)
  }
  renderAssigneeDetails(){
    if(this.props.route.params.ticket.status == 'PENDING'){
      if(this.state.assigneedetails.name ==undefined){
        return ( <View style={styles.tileWrapper}>
          <TouchableOpacity
          onPress={()=>{
           if(this.state.serviceboys.length ==0){
             this.fetchServiceBoys(this.user);
           }else{
             this.setState({filterModalVisible:true})
           }
          }}
          style={{
           backgroundColor: 'white',
           flexShrink:1,
           padding: 12,
           borderRadius: 14,
           width: '100%',
           elevation:5,
           marginVertical: 10,
           alignItems:'center'
         }}>
        <Text style={{}}>Tap to assign </Text>
        
        
               </TouchableOpacity>
               <Button
               title="Assign"
               onPress={() => {
               // this.props.navigation.navigate('Users');
                this.assignTicket();
             
               }}/>
           </View>);
      }else{
        return ( <View style={styles.tileWrapper}>
          <TouchableOpacity
          onPress={()=>{
           if(this.state.serviceboys.length ==0){
             this.fetchServiceBoys(this.user);
           }else{
             this.setState({filterModalVisible:true})
           }
          }}
          style={{
           backgroundColor: 'white',
           flexShrink:1,
           padding: 12,
           borderRadius: 14,
           width: '100%',
           elevation:5,
           marginVertical: 10,
          // alignItems:'center'
         }}>
           <View><View style={styles.tileRow}>
                 <View style={{ marginVertical: 10 }}>
                   <Text style={styles.tileTitleText}>Name</Text>
                   <Text style={styles.contentText}>{this.state.assigneedetails.name == undefined ? CONSTANTS.BLANK_FIELD : this.state.assigneedetails.name}</Text>
                 </View>
                 <View style={{ marginVertical: 10 }}>
                   <Text style={styles.tileTitleText}>Mobile no</Text>
                   <Text style={styles.contentText}>{this.state.assigneedetails.mobileno == undefined ? CONSTANTS.BLANK_FIELD : this.state.assigneedetails.mobileno}</Text>
                 </View>
               </View></View>
        
               </TouchableOpacity>
               <Button
               title="Assign"
               onPress={() => {
                this.assignTicket();
             
               }}/>
           </View>);
      }
   
    }
    else
    return ( <View style={styles.tileWrapper}>
      <View style={styles.tileContainer}>
        <View style={styles.tileRow}>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Name</Text>
            <Text style={styles.contentText}>{this.state.assigneedetails.name == undefined ? CONSTANTS.BLANK_FIELD : this.state.assigneedetails.name}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Mobile no</Text>
            <Text style={styles.contentText}>{this.state.assigneedetails.mobileno == undefined ? CONSTANTS.BLANK_FIELD : this.state.assigneedetails.mobileno}</Text>
          </View>
        </View>
      </View>
    </View>)
  }
  render() {
    
    return (
      <View style={{
           flex: 1,
          // justifyContent: "center",
          // alignItems: "center"
        }}>
         
        <ScrollView>
        <View>
        <Text style={globalStyles.labelText}>Ticket Details</Text>
      </View>
        {this.renderTicketDetials()}
        <View>
        <Text style={globalStyles.labelText}>Purchase Details</Text>
      </View>
        {this.renderPurcahseDetails()}
        <View>
        <Text style={globalStyles.labelText}>Assignee</Text>
      </View>
        {this.renderAssigneeDetails()}
        
       
   
        </ScrollView>
         {this.getFilterModel()}
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
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
import utils from '../../utils/utils'
class Purchases extends Component {
    constructor(props){
        super(props);
        this.state = {
          user:[],
          modalVisible: false,
          "comment":"",
          commentDirty:false,
          isCommentEmpty:true,
          purchaseid:-1
        };
        this.user ={};
    }

      fetchPurchases = (user,filers={}) => {
        this.props.dispatch({ type: 'SHOW_LOADER' });
    let url = CONSTANTS.BASE_URL + CONSTANTS.GET_USERS_PURCHASES_API;
    fetch(url, {
      method: CONSTANTS.METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // alert(JSON.stringify(responseJson))
        this.props.dispatch({ type: 'HIDE_LOADER' });
        if (responseJson.success) {
           this.setState({user:responseJson.success})
  

        } 

      })
      .catch((error) => {
        this.props.dispatch({ type: 'HIDE_LOADER' });
      });
  }
    getPurchases = async () =>{

      const userData = await AsyncStorage.getItem('userSession');
      if (userData !== null) {
       
        let user = JSON.parse(userData);
        this.user =user;
        this.fetchPurchases(user)
      }
    }

    componentDidMount(){
      
     this.getPurchases();
    }


    createTicket = () => {
      
      let submutForm = true;
       if(this.state.comment == '')
      {
        this.setState({isCommentEmpty : true});
       this.setState({commentDirty : true});
        submutForm = false;
      }
      if(!submutForm)
      return
      //alert("call API");
      this.props.dispatch({type:'SHOW_LOADER'});
      let url = CONSTANTS.BASE_URL + CONSTANTS.CREATE_TICKET_API;
      fetch(url, {
        method: CONSTANTS.METHODS.POST,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.user.token}`
        },
        body: JSON.stringify({
          "purchaseid": this.state.purchaseid,
          "comment": this.state.comment
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.props.dispatch({type:'HIDE_LOADER'});
          console.log(responseJson)
          alert(JSON.stringify(responseJson));
          if (responseJson.success) {
            alert("The ticket has been created we will shortly assign to one of our Team member!");
            // alert(JSON.stringify(responseJson.success));
            // let createdUser ={
            //   "name": this.state.name,
            //   "mobileno": this.state.mobileno,
            //   "password": this.state.password,
            //   "userid":responseJson.success.userid,
            //   "role":"SERVICEBOY"
            // }
            // let users = [createdUser, ...this.state.user];
            // this.setState({user:users,modalVisible:false})
            this.setModalVisible(false)

  
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
  
    getComemntStyle()
    {
      if(this.state.isCommentEmpty && this.state.commentDirty){
      return(globalStyles.textInputAlert);
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

                <Text style={modelStyle.modalText}>Please tell us more!</Text>
                <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'90%'}]}>
          <TextInput underlineColorAndroid='transparent'
          placeholder='Comment'
          style={[globalStyles.modelText,this.getComemntStyle(),{height:120}]}
          onChangeText={(comment) => {
            this.setState({comment});
            this.setState({commentDirty : false});
            // this.setState({isUserNameEmpty : false});
            }}
            value={this.state.comment}
            multiline={true}
          />
          </View>


          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>

                  
<MyButton
title="cancel"
color="grey"
onPress={() => {this.setModalVisible(!modalVisible)}
}/>

<MyButton
title="Create Ticket"
color={CONSTANTS.UI_CONSTANTS.SECONDARY_COLOR}
onPress={() => {this.createTicket()}
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
                  <Text style={modelStyle.textStyle}>Raise Ticket</Text>
                </Pressable>
              </View> */}
              </View>
             
            </View>
          </Modal>

        </View>
      );
    }
  renderPurchases = (item, index, separators)=>{
    return (<View style={styles.tileWrapper}>
      <View style={styles.tileContainer}>
        <View style={styles.tileRow}>
          <View style={styles.tileRowInner}>
            <Text style={styles.tileTitleText}>Bill Id</Text>
            <Text style={styles.contentText}>{item.billid == undefined ? CONSTANTS.BLANK_FIELD : item.billid}</Text>
          </View>

          <View style={styles.buttonRow}>

            <TouchableOpacity activeOpacity={0.8} style={[styles.tileIcon, { width: 112, height: 42, }]}
              onPress={() => {
                this.setState({ modalVisible: true, purchaseid: item.purchaseid });

              }}
            >
              <Text style={styles.tileTitleText}>Raise Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tileRow}>


          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>purchaseid ID</Text>
            <Text style={styles.contentText}>{item.purchaseid}</Text>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Purchased Date</Text>
            <Text style={styles.contentText}>{item.purchasedate == undefined ? CONSTANTS.BLANK_FIELD :utils.getFormatedData(item.purchasedate)}</Text>
          </View>
        </View>
        <View style={styles.tileRow}>


         
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.tileTitleText}>Product Details</Text>
            <Text style={styles.contentText}>{item.productdetails == undefined ? CONSTANTS.BLANK_FIELD : item.productdetails}</Text>
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
     
      <View >
        {this.getModel()}

      <FlatList
  data={this.state.user}
  renderItem={({ item, index, separators }) => (
this.renderPurchases(item, index, separators)


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


export default connect()(Purchases);
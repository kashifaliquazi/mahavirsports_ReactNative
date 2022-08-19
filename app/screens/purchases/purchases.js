import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button, TextInput, Dimensions, TouchableOpacity, FlatList, Modal, Alert, Pressable, StyleSheet } from 'react-native';
import styles from '../../assets/css/lisitng';
import Fab from '../../components/fab/Fab'
import { AsyncStorage } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant';
import { connect } from 'react-redux';
import globalStyles from "../../assets/css/globalstyles"
class Purchases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      modalVisible: false,
      filterModalVisible:false,
      "userid": "",
      "purchaseid": "",
      "initiatedby": "",
      initiatedbyDirty: false,
      isNameEmpty: true,
      passwordDirty: false,
      isPasswordEmpty: true,
      mobileDirty: false,
      isMobileEmpty: true,
    };
    this.user = {};
  }

  fetchPurchases = (user, filers = {}) => {
    this.props.dispatch({ type: 'SHOW_LOADER' });
    let url = CONSTANTS.BASE_URL + CONSTANTS.GET_PURCHASES_API+`?userid=${this.state.userid}&purchaseid=${this.state.purchaseid}&initiatedby=${this.state.initiatedby}`;
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
          this.setState({ user: responseJson.success,filterModalVisible:false })
        }
      })
      .catch((error) => {
        this.props.dispatch({ type: 'HIDE_LOADER' });
      });
  }

  getPurchases = async () => {
    const userData = await AsyncStorage.getItem('userSession');
    if (userData !== null) {
      let user = JSON.parse(userData);
      this.user = user;
      this.fetchPurchases(user)
    }
  }

  componentDidMount() {

    this.getPurchases();
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button style ={{backgroundColor:'yellow'}} onPress={() => this.setState({filterModalVisible:true})} title="Filter" />
      ),
    });
  }

  createServiceBoy = () => {
    let submutForm = true;
    if (this.state.name == '') {
      this.setState({ isNameEmpty: true });
      this.setState({ nameDirty: true });
      submutForm = false;
    }

    if (this.state.password == '') {
      this.setState({ isPasswordEmpty: true });
      this.setState({ passwordDirty: true });
      submutForm = false;
    }

    if (this.state.mobileno == '') {
      this.setState({ isMobileEmpty: true });
      this.setState({ mobileDirty: true });
      submutForm = false;
    }
    if (!submutForm)
      return
    this.props.dispatch({ type: 'SHOW_LOADER' });
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
        this.props.dispatch({ type: 'HIDE_LOADER' });
        console.log(responseJson)

        if (responseJson.success) {
          let createdUser = {
            "name": this.state.name,
            "mobileno": this.state.mobileno,
            "password": this.state.password,
            "userid": responseJson.success.userid,
            "role": "SERVICEBOY"
          }
          let users = [createdUser, ...this.state.user];
          this.setState({ user: users, modalVisible: false })
          // this.setModalVisible(false)


        }
      })
      .catch((error) => {
        this.props.dispatch({ type: 'HIDE_LOADER' });
        this.setModalVisible(!modalVisible)
        console.error(error);
      });
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  getNameStyle() {
    if (this.state.isNameEmpty && this.state.nameDirty) {
      return (globalStyles.textInputAlert);
    }
  }

  getPasswordStyle() {
    if (this.state.isPasswordEmpty && this.state.passwordDirty) {
      return (globalStyles.textInputAlert);
    }
  }

  getMobileStyle() {
    if (this.state.isMobileEmpty && this.state.mobileDirty) {
      return (globalStyles.textInputAlert);
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

              <Text style={modelStyle.modalText}>Apply Filters</Text>
              <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'90%'}]}>
                
                <TextInput underlineColorAndroid='transparent'
                placeholder='Purchase Id'
                keyboardType ='numeric'
                style={[globalStyles.modelText]}
                onChangeText={(purchaseid) => {
                  this.setState({purchaseid});
        
                  // this.setState({isUserNameEmpty : false});
                  }}
                  value={this.state.purchaseid}
                />
                </View>
              <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'90%'}]}>
                
        <TextInput underlineColorAndroid='transparent'
        placeholder='User Id'
        keyboardType ='numeric'
        style={[globalStyles.modelText]}
        onChangeText={(userid) => {
          this.setState({userid});

          // this.setState({isUserNameEmpty : false});
          }}
          value={this.state.userid}
        />
        </View>
        <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'90%'}]}>
                
                <TextInput underlineColorAndroid='transparent'
                placeholder='Sold by- Id'
                keyboardType ='numeric'
                style={[globalStyles.modelText]}
                onChangeText={(initiatedby) => {
                  this.setState({initiatedby});
        
                  // this.setState({isUserNameEmpty : false});
                  }}
                  value={this.state.initiatedby}
                />
                </View>
        <View style={[{padding:4,alignItems:'flex-start',margin:3,width:'90%'}]}>
    
    

        </View>
        

        
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
              <Pressable
                style={[modelStyle.button, modelStyle.buttonClose]}
                onPress={() =>{ 
                  let filter = {};
                  this.fetchPurchases(this.user)
                  //this.createServiceBoy();
                 
                }}
              >
                <Text style={modelStyle.textStyle}>Apply</Text>
              </Pressable>
            </View>
            </View>
           
          </View>
        </Modal>

      </View>
    );
  }
  getModel = () => {
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

              <Text style={modelStyle.modalText}>Add Service Boy</Text>
              <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '90%' }]}>
                <TextInput underlineColorAndroid='transparent'
                  placeholder='Name'
                  style={[globalStyles.modelText, this.getNameStyle()]}
                  onChangeText={(name) => {
                    this.setState({ name });
                    this.setState({ nameDirty: false });
                    // this.setState({isUserNameEmpty : false});
                  }}
                  value={this.state.name}
                />
              </View>
              <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '90%' }]}>
                <TextInput underlineColorAndroid='transparent'
                  placeholder='Mobile no'
                  style={[globalStyles.modelText, this.getMobileStyle()]}
                  onChangeText={(mobileno) => {
                    this.setState({ mobileno });
                    this.setState({ mobileDirty: false });
                    // this.setState({isUserNameEmpty : false});
                  }}
                  value={this.state.mobileno}

                />
              </View>

              <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '90%' }]}>
                <TextInput underlineColorAndroid='transparent'
                  placeholder='Password'
                  style={[globalStyles.modelText, this.getPasswordStyle()]}
                  onChangeText={(password) => {
                    this.setState({ password });
                    this.setState({ passwordDirty: false });
                    // this.setState({isUserNameEmpty : false});
                  }}
                  value={this.state.password}
                />
              </View>

              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
                <Pressable
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() => {

                    this.setModalVisible(!modalVisible)
                  }
                  }
                >
                  <Text style={modelStyle.textStyle}>cancel</Text>
                </Pressable>
                <Pressable
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() => {
                    this.createServiceBoy();

                  }}
                >
                  <Text style={modelStyle.textStyle}>Create User</Text>
                </Pressable>
              </View>
            </View>

          </View>
        </Modal>

      </View>
    );
  }

  render() {
    return (
      <View style={{


        backgroundColor: 'white',
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
          {this.getFilterModel()}
          <Fab
            onClick={() => {
              this.props.navigation.navigate('AddPurchase');
            }}
          />

          <FlatList
            data={this.state.user}
            renderItem={({ item, index, separators }) => (


              <View style={styles.tileWrapper}>
                <View style={styles.tileContainer}>

                <View style={styles.tileRow}>


<View style={{ marginVertical: 10 }}>
  <Text style={styles.tileTitleText}>Name</Text>
  <Text style={styles.contentText}>{item.name==undefined?CONSTANTS.BLANK_FIELD:item.name}</Text>
</View>

<View style={{ marginVertical: 10 }}>
  <Text style={styles.tileTitleText}>Mobile no</Text>
  <Text style={styles.contentText}>{item.mobileno==undefined?CONSTANTS.BLANK_FIELD:item.mobileno}</Text>
</View>

<View style={{ marginVertical: 10 }}>
  <Text style={styles.tileTitleText}>Product id</Text>
  <Text style={styles.contentText}>{item.productid==undefined?CONSTANTS.BLANK_FIELD:item.productid}</Text>
</View>
</View>

                  <View style={styles.tileRow}>

                  <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>Purchase Id</Text>
                      <Text style={styles.contentText}>{item.purchaseid==undefined?CONSTANTS.BLANK_FIELD:item.purchaseid}</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>bill Id</Text>
                      <Text style={styles.contentText}>{item.billid==undefined?CONSTANTS.BLANK_FIELD:item.billid}</Text>
                    </View>


                    <View style={{ marginVertical: 10 }}>
    <Text style={styles.tileTitleText}>Sold By</Text>
    <Text style={styles.contentText}>{item.initiatedbyname==undefined?CONSTANTS.BLANK_FIELD:item.initiatedbyname}</Text>
  </View>
                 

                  <View style={styles.tileRow}>

<View style={{ marginVertical: 10 }}>
    <Text style={styles.tileTitleText}>Product Details</Text>
    <Text style={styles.contentText}>{item.productdetails==undefined?CONSTANTS.BLANK_FIELD:item.productdetails}</Text>
  </View>
  <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>purchasedate</Text>
                      <Text style={styles.contentText}>{item.purchasedate==undefined?CONSTANTS.BLANK_FIELD:item.purchasedate}</Text>
                    </View>
                  </View>

</View>
<View style={{ marginVertical: 10 }}>
    <Text style={styles.tileTitleText}>Comment</Text>
    <Text style={styles.contentText}>{item.comment==undefined?CONSTANTS.BLANK_FIELD:item.comment}</Text>
  </View>




                </View>
              </View>
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
    height: viewportHeight - viewportHeight * 0.4,
    width: viewportWidth - viewportWidth * 0.1,
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
    width: viewportWidth - viewportWidth * .7,
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
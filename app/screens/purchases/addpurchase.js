import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button, TextInput, ScrollView, SafeAreaView, Dimensions, KeyboardAvoidingView, TouchableOpacity, FlatList, Modal, Alert, Pressable, StyleSheet } from 'react-native';
import styles from '../../assets/css/lisitng';
import Fab from '../../components/fab/Fab'
import { AsyncStorage } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant';
import { connect } from 'react-redux';
import globalStyles from "../../assets/css/globalstyles";
import CheckBox from '@react-native-community/checkbox';
import GradientButton from '../../components/gradientbutton/gradientButton';
import KeyboardHandling from "../../components/keyboardhandling/keyboardhandling";
class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      modalVisible: false,
      filterModalVisible: false,
      "name": '',
      "billid": '',
      "mobileno": '',
      "userid": '',
      "productid": '',
      "purchasedetails": '',
      "comment": '',
      nameDirty: false,
      isNameEmpty: true,
      billidDirty: false,
      isBillidEmpty: true,
      mobileDirty: false,
      isMobileEmpty: true,
      useridDirty: false,
      isUseridEmpty: true,
      productidDirty: false,
      isProductidEmpty: true,
      purchasedetailsDirty: false,
      isPurchasedetailsEmpty: true,
      commentDirty: false,
      isCommentEmpty: true,
    };
    this.user = {};
  }

  fetchUsers = (user, filers = {}) => {
    this.props.dispatch({ type: 'SHOW_LOADER' });
    let userid = '';
    let role = '';
    if (filers.userid) {
      userid = filers.userid;
    }
    if (filers.role) {
      role = filers.role;
    }
    let url = CONSTANTS.BASE_URL + CONSTANTS.GETUSERS_API + `?userid=${userid}&role=${role}`;

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
          this.setState({ user: responseJson.success, filterModalVisible: false })


        } else
          this.setState({ filterModalVisible: false })

      })
      .catch((error) => {
        this.setState({ filterModalVisible: false })
        this.props.dispatch({ type: 'HIDE_LOADER' });
      });
  }
  getUsers = async () => {

    const userData = await AsyncStorage.getItem('userSession');
    if (userData !== null) {

      let user = JSON.parse(userData);
      this.user = user;
      //  this.fetchUsers(user)
    }
  }

  componentDidMount() {
    this.getUsers();
  }


  createPurcahse = () => {
    let submutForm = true;
    if (this.state.userid == '') {
      this.setState({ isUseridEmpty: true });
      this.setState({ useridDirty: true });
      submutForm = false;
    }

    if (this.state.productid == '') {
      this.setState({ isProductidEmpty: true });
      this.setState({ productidDirty: true });
      submutForm = false;
    }

    if (this.state.billid == '') {
      this.setState({ isBillidEmpty: true });
      this.setState({ billidDirty: true });
      submutForm = false;
    }

    if (this.state.purchasedetails == '') {
      this.setState({ isProductidEmpty: true });
      this.setState({ purchasedetailsDirty: true });
      submutForm = false;
    }

    if (this.state.comment == '') {
      this.setState({ isCommentEmpty: true });
      this.setState({ commentDirty: true });
      submutForm = false;
    }
    if (!submutForm)
      return
    this.props.dispatch({ type: 'SHOW_LOADER' });
    let url = CONSTANTS.BASE_URL + CONSTANTS.ADD_PURCHASE_API;
    fetch(url, {
      method: CONSTANTS.METHODS.POST,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.user.token}`
      },
      body: JSON.stringify({
        "userid": this.state.userid,
        "productid": this.state.productid,
        "comment": this.state.comment,
        "purchasedetails": this.state.purchasedetails,
        "billid": this.state.billid
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.dispatch({ type: 'HIDE_LOADER' });
        console.log(responseJson)
        // alert(JSON.stringify(responseJson));
        if (responseJson.success) {


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

  getUseridStyle() {
    if (this.state.isUseridEmpty && this.state.useridDirty) {
      return (globalStyles.textInputAlert);
    }
  }
  getProductidStyle() {
    if (this.state.isProductidEmpty && this.state.productidDirty) {
      return (globalStyles.textInputAlert);
    }
  }
  getBillidStyles() {
    if (this.state.isBillidEmpty && this.state.billidDirty) {
      return (globalStyles.textInputAlert);
    }
  }
  getPurchasedetailsStyles() {
    if (this.state.isPurchasedetailsEmpty && this.state.purchasedetailsDirty) {
      return (globalStyles.textInputAlert);
    }
  }
  getCommentStyles() {
    if (this.state.isCommentEmpty && this.state.commentDirty) {
      return (globalStyles.textInputAlert);
    }
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

                <Button
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() => {

                    this.setModalVisible(!modalVisible)
                  }
                  }
                  title="cancel"
                >

                </Button>
                <Button
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() => {
                    this.createPurcahse();

                  }}
                  title="Create User"
                >

                </Button>
              </View>
            </View>

          </View>
        </Modal>

      </View>
    );
  }

  getFilterModel = () => {
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
              <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '90%' }]}>

                <TextInput underlineColorAndroid='transparent'
                  placeholder='User Id'
                  keyboardType='numeric'
                  style={[globalStyles.modelText]}
                  onChangeText={(userid) => {
                    this.setState({ userid });

                    // this.setState({isUserNameEmpty : false});
                  }}
                  value={this.state.userid}
                />
              </View>
              <View style={[{ padding: 4, alignItems: 'flex-start', margin: 3, width: '90%' }]}>
                <View style={[globalStyles.fullRow, { alignItems: 'flex-start' }]}>
                  <Text style={globalStyles.textBoxLables}>User Type</Text>
                  <View style={{ width: '100%', alignSelf: 'flex-start', flexDirection: 'row', margin: 5 }}>
                    <CheckBox
                      disabled={false}
                      value={this.state.isuser}
                      onValueChange={(isuser) => this.setState({ isuser })}
                    />
                    <View style={{ marginTop: -7 }}>
                      <Text style={globalStyles.textBoxLables}>Users</Text>
                    </View>
                  </View>
                  <View style={{ width: '100%', alignSelf: 'flex-start', flexDirection: 'row', margin: 10 }}>

                    <CheckBox
                      disabled={false}
                      value={this.state.isadmin}
                      onValueChange={(isadmin) => this.setState({ isadmin })}
                    />

                    <View style={{ marginTop: -7 }}>
                      <Text style={globalStyles.textBoxLables}>Service man</Text>
                    </View>
                  </View>
                </View>


              </View>



              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
                <Pressable
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() => {

                    this.setState({ filterModalVisible: false })
                  }
                  }
                >
                  <Text style={modelStyle.textStyle}>cancel</Text>
                </Pressable>
                <Pressable
                  style={[modelStyle.button, modelStyle.buttonClose]}
                  onPress={() => {
                    let filter = {};
                    filter.userid = this.state.userid;

                    if (this.state.isuser && !this.state.isadmin) {
                      filter.role = 'USER';
                    } else if (!this.state.isuser && this.state.isadmin) {
                      filter.role = 'SERVICEUSER';
                    }
                    this.fetchUsers(this.user, filter)
                    //this.createPurcahse();

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
  render() {
    return (
      <KeyboardHandling>
        <View>
          <View style={{ width: "45%", paddingHorizontal: "4%", paddingVertical: 20 }}>
            <Text style={[globalStyles.labelText, { color: "#0E86D4", paddingHorizontal: 0 }]}>Add Purchase</Text>
          </View>
          <View style={{ backgroundColor: 'white', width: "95%", alignContent: "center", alignItems: "center" }}>


            {/* {this.getModel()}
          {this.getFilterModel()} */}
            <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '95%' }]}>
              <TextInput underlineColorAndroid='transparent'
                placeholder='User Id'
                eyboardType='numeric'
                style={[globalStyles.modelText, this.getUseridStyle()]}
                onChangeText={(userid) => {
                  this.setState({ userid });
                  this.setState({ useridDirty: false });
                  // this.setState({isUserNameEmpty : false});
                }}
                value={this.state.userid} />
            </View>
            <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '95%' }]}>
              <TextInput underlineColorAndroid='transparent'
                placeholder='Product Id'
                style={[globalStyles.modelText, this.getProductidStyle()]}
                onChangeText={(productid) => {
                  this.setState({ productid });
                  this.setState({ productidDirty: false });
                  // this.setState({isUserNameEmpty : false});
                }}
                value={this.state.productid}
              />
            </View>
            <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '95%' }]}>
              <TextInput underlineColorAndroid='transparent'
                placeholder='Bill Id'
                style={[globalStyles.modelText, this.getBillidStyles()]}
                onChangeText={(billid) => {
                  this.setState({ billid });
                  this.setState({ billidDirty: false });
                  // this.setState({isUserNameEmpty : false});
                }}
                value={this.state.billid}
              />
            </View>
            <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '95%' }]}>
              <TextInput underlineColorAndroid='transparent'
                placeholder='Purchase Details'
                multiline={true}
                style={[globalStyles.modelText, this.getPurchasedetailsStyles(), { height: 120 }]}
                onChangeText={(purchasedetails) => {
                  this.setState({ purchasedetails });
                  this.setState({ purchasedetailsDirty: false });
                  // this.setState({isUserNameEmpty : false});
                }}
                value={this.state.purchasedetails}
              />
            </View>
            <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '95%' }]}>
              <TextInput underlineColorAndroid='transparent'
                placeholder='Comment'
                multiline={true}
                style={[globalStyles.modelText, this.getCommentStyles(), { height: 120 }]}
                onChangeText={(comment) => {
                  this.setState({ comment });
                  this.setState({ commentDirty: false });
                  // this.setState({isUserNameEmpty : false});
                }}
                value={this.state.comment}
              />
            </View>
            <GradientButton color={CONSTANTS.UI_CONSTANTS.LIGHTBLUE_CTA_COLORS} type={'BTN'} text={'Create Purchse'}
              onPress={() => this.createPurcahse()} />
            <View style={{
              flexDirection: "column",
              paddingVertical: 7
            }}></View>



          </View>
        </View>
      </KeyboardHandling>
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


export default connect()(UserManagement);
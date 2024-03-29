import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button, TextInput, Dimensions, TouchableOpacity, FlatList, Modal, Alert, Pressable, StyleSheet } from 'react-native';
import styles from '../../assets/css/lisitng';
import Fab from '../../components/fab/Fab'
import { AsyncStorage } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import * as CONSTANTS from '../../utils/constant';
import { connect } from 'react-redux';
import globalStyles from "../../assets/css/globalstyles";
import CheckBox from '@react-native-community/checkbox';
import MyButton from "../../components/mybutton/mybutton";
import FontAwesome, {Icons,SolidIcons, RegularIcons, BrandIcons} from 'react-native-fontawesome';
import utils from '../../utils/utils'
import GradientButton from '../../components/gradientbutton/gradientButton';
class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      modalVisible: false,
      filterModalVisible: false,
      "name": "",
      "mobileno": "",
      "password": "",
      "userid": '',
      "isuser": true,
      "isadmin": true,
      nameDirty: false,
      isNameEmpty: true,
      passwordDirty: false,
      isPasswordEmpty: true,
      mobileDirty: false,
      isMobileEmpty: true,
    };
    this.user = {};
  }

  fetchUsers = (user, filers = {}) => {
    //alert("called")
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
      this.fetchUsers(user)
    }
  }

  componentDidMount() {

    this.getUsers();
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity color ="blue" style={{right:12 }} onPress={() => this.setState({ filterModalVisible: true })} title="Filter" >
                      <FontAwesome style={{fontSize: 25,color:"white"}} icon={SolidIcons.filter} />
           </TouchableOpacity>
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
            <View style={[modelStyle.modalView,{}]}>
            <View style={[{paddingVertical:10}]}>
              <Text style={globalStyles.labelText}>Add Service Boy</Text>
              </View>
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

                  
              <MyButton
    title="cancel"
    color="grey"
       onPress={() => {this.setModalVisible(!modalVisible)}
       }/>

<MyButton
    title="Create User"
    color={CONSTANTS.UI_CONSTANTS.SECONDARY_COLOR}
       onPress={() => {this.createServiceBoy()}
       }/>

               
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
            <View style={[modelStyle.modalView,,{}]}>
            <View style={[{paddingVertical:10}]}>
              <Text style={globalStyles.labelText}>Filters</Text>
              </View>
              
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
                    <View style={{ marginTop: -7 ,marginHorizontal:7}}>
                      <Text style={globalStyles.textBoxLables}>Users</Text>
                    </View>
                  </View>
                  <View style={{ width: '100%', alignSelf: 'flex-start', flexDirection: 'row', margin: 5 }}>

                    <CheckBox
                      disabled={false}
                      value={this.state.isadmin}
                      onValueChange={(isadmin) => this.setState({ isadmin })}
                    />

                    <View style={{ marginTop: -7,marginHorizontal:7 }}>
                      <Text style={globalStyles.textBoxLables}>Service man</Text>
                    </View>
                  </View>
                </View>


              </View>


              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>

                  
<MyButton
title="cancel"
color="grey"
onPress={() => {this.setState({ filterModalVisible: false })}
}/>

<MyButton
title="Apply"
color={CONSTANTS.UI_CONSTANTS.SECONDARY_COLOR}
onPress={() => {
  let filter = {};
  filter.userid = this.state.userid;

  if (this.state.isuser && !this.state.isadmin) {
    filter.role = 'USER';
  } else if (!this.state.isuser && this.state.isadmin) {
    filter.role = 'SERVICEUSER';
  }
  this.fetchUsers(this.user, filter)
}
}/>

 
</View>

              {/* <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
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
                    //this.createServiceBoy();

                  }}
                >
                  <Text style={modelStyle.textStyle}>Apply</Text>
                </Pressable>
              </View> */}
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
       
        <View >
          {this.getModel()}
          {this.getFilterModel()}
          <Fab
            onClick={() => {
              this.setModalVisible(true)
            }}
          />

          <FlatList
            data={this.state.user}
            renderItem={({ item, index, separators }) => (


              <View style={styles.tileWrapper}>
                <View style={styles.tileContainer}>

                  <View style={styles.tileRow}>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>User ID</Text>
                      <Text style={styles.contentText}>{item.userid == undefined ? CONSTANTS.BLANK_FIELD : item.userid}</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>Name</Text>
                      <Text style={styles.contentText}>{item.name == undefined ? CONSTANTS.BLANK_FIELD : item.name}</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>Mobile no</Text>
                      <Text style={styles.contentText}>{item.mobileno}</Text>
                    </View>


                  </View>

                  <View style={styles.tileRow}>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>Status</Text>
                      <Text style={styles.contentText}>{item.status}</Text>
                    </View>
                    
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>Created</Text>
                      <Text style={styles.contentText}>{utils.getFormatedData(item.created)}</Text>
                    </View>
                  </View>
                  <View style={styles.tileRow}>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.tileTitleText}>Role</Text>
                      <Text style={styles.contentText}>{item.role}</Text>
                    </View>
         
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
  buttonLargeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
primaryButton: {
    backgroundColor: '#FF0017',
  },
buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
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
import React, { Component } from 'react';
import { Text, View, Button ,TextInput,Dimensions, ScrollView,SafeAreaView,KeyboardAvoidingView} from 'react-native';
import { AsyncStorage } from 'react-native';
import globalStyles from "../../assets/css/globalstyles";
import { connect } from 'react-redux';
import * as CONSTANTS from '../../utils/constant';
// import Separator from '../../components/separator/separator'
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
          user:[],
          modalVisible: false,
          filterModalVisible:false,
          "name":'',
          "repeatpassword":'',
          "mobileno":'',
          "currentpassword":'',
          "newpassword":'',
          "purchasedetails":'',
          "comment":'',
          nameDirty:false,
          isNameEmpty:true,

          repeatpasswordDirty:false,
          isRepeatpasswordEmpty:true,
  
          currentpasswordDirty:false,
          isCurrentpasswordEmpty:true,

          newpasswordDirty:false,
          isNewpasswordEmpty:true,
          purchasedetailsDirty:false,
          isPurchasedetailsEmpty:true, 
          commentDirty:false,
          isCommentEmpty:true,          
        };
    }
    getUsers = async () =>{

      const userData = await AsyncStorage.getItem('userSession');
      if (userData !== null) {
       
        let user = JSON.parse(userData);
        this.user =user;
      }
    }
    componentDidMount(){
      
      this.getUsers();
     }
    logout = async ()=>{
         this.props.navigation.reset({
        index: 0,
        key: null,
        routes: [{ name: 'Login' }],
  });
      await AsyncStorage.clear();

    }

    getCurrentPasswordStyle()
    {
      if(this.state.isCurrentpasswordEmpty && this.state.currentpasswordDirty){
      return(globalStyles.textInputAlert);
      }
    }
    getNewPasswordStyle()
    {
      if(this.state.isNewpasswordEmpty && this.state.newpasswordDirty){
          return(globalStyles.textInputAlert);
      }
    }
    getRepeatPasswordStyle()
    {
      if(this.state.isRepeatpasswordEmpty && this.state.repeatpasswordDirty){
          return(globalStyles.textInputAlert);
      }
    }

    changePassword = () => {
      let submutForm = true;
      if(this.state.currentpassword == ''){
        this.setState({isCurrentpasswordEmpty : true});
        this.setState({currentpasswordDirty : true});
        submutForm = false;
      } 

       if(this.state.newpassword == '')
      {
        this.setState({isNewpasswordEmpty : true});
       this.setState({newpasswordDirty : true});
        submutForm = false;
      }
      if(this.state.repeatpassword == '')
      {
        this.setState({isRepeatpasswordEmpty : true});
       this.setState({repeatpasswordDirty : true});
        submutForm = false;
      }
      if(this.state.repeatpassword != this.state.newpassword)
      {
        this.setState({isRepeatpasswordEmpty : true});
       this.setState({repeatpasswordDirty : true});
        submutForm = false;
      }

      if(!submutForm)
      return
      this.props.dispatch({type:'SHOW_LOADER'});
      let url = CONSTANTS.BASE_URL + CONSTANTS.UPDATE_PASSWORD_API;
      fetch(url, {
        method: CONSTANTS.METHODS.POST,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.user.token}`
        },
        body: JSON.stringify({
          "currentpassword": this.state.currentpassword,
          "newpassword": this.state.newpassword
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
  render() {
    return (
      <SafeAreaView
      edges={[ 'left', 'right' ]}
      style= {{
        backgroundColor:'white',
      }}
     >
        <KeyboardAvoidingView behavior="position" style= {{
          backgroundColor:'white',
        }}>
           <ScrollView
          bounces={false}
         // contentContainerStyle={commonStyles.scrollContainer}
          contentInsetAdjustmentBehavior="always"
          overScrollMode="always"
          showsVerticalScrollIndicator={true}
      //    style={commonStyles.scroll}
        >
      <View style={{
          flex: 1,
          // justifyContent: "space-between",
           alignItems: "center"
        }}>
          <View style={{
        //paddingVertical:40
       // top:30
      }}>
         <View style={{
        width:"90%",
        height:30
      }}></View> 
        <View style={{
          flexDirection:"row",

       //  marginTop:7
        }}>
          <View style={{width:"45%"}}>
        <Text style={[globalStyles.labelText,{color:"grey",fontSize:viewportWidth*0.04,}]}>User Id</Text>
        </View>
        <Text style={[globalStyles.labelText,{color:"black",}]}>1</Text>
      </View>
      <View style={{
          flexDirection:"row",
          paddingVertical:7
        }}>
         <View style={{width:"45%"}}>
        <Text style={[globalStyles.labelText,{color:"grey",fontSize:viewportWidth*0.04,}]}>Name</Text>
        </View>
        <Text style={[globalStyles.labelText,{color:"black",}]}>Kashif Ali</Text>
      </View>
      <View style={{
          flexDirection:"row",
          paddingVertical:7
        }}>
         <View style={{width:"45%"}}>
        <Text style={[globalStyles.labelText,{color:"grey",fontSize:viewportWidth*0.04,}]}>Mobile Number</Text>
        </View>
        <Text style={[globalStyles.labelText,{color:"black",}]}>9098580784</Text>
      </View>
      </View>
      {/* <View style={{
        width:"90%",
        height:80
      }}></View> */}
      <View
      style={{
        width:"90%",
       // paddingVertical:80
      }}
      >
         <View style={globalStyles.separator} />
  
  <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'95%'}]}>
          <TextInput underlineColorAndroid='transparent'
          placeholder='Existing Password'
          eyboardType ='numeric'
          style={[globalStyles.modelText,this.getCurrentPasswordStyle()]}
          onChangeText={(currentpassword) => {
            this.setState({currentpassword});
            this.setState({currentpasswordDirty : false});
            // this.setState({isUserNameEmpty : false});
            }}
            value={this.state.currentpassword}/>
          </View>
                <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'95%'}]}>
          <TextInput underlineColorAndroid='transparent'
          placeholder='New Password'
          style={[globalStyles.modelText,this.getNewPasswordStyle()]}
          onChangeText={(newpassword) => {
            this.setState({newpassword});
            this.setState({newpasswordDirty : false});
            // this.setState({isUserNameEmpty : false});
            }}
            value={this.state.newpassword}
          />
          </View>
          <View style={[{padding:4,justifyContent:'center',alignItems:'center',margin:3,width:'95%'}]}>
          <TextInput underlineColorAndroid='transparent'
          placeholder='Repeat Password'
          style={[globalStyles.modelText,this.getRepeatPasswordStyle()]}
          onChangeText={(repeatpassword) => {
            this.setState({repeatpassword});
            this.setState({repeatpasswordDirty : false});
            // this.setState({isUserNameEmpty : false});
            }}
            value={this.state.repeatpassword}
          />
          </View>
          <View style={{
          flexDirection:"column",
          paddingVertical:7
        }}>
        <Button
        title="Change Password"
        onPress={() =>this.changePassword()}/>
   
        </View>
        <View style={{
          flexDirection:"column",
          paddingVertical:7
        }}>
        <Button
        title="Logout"
        style={{
          color:"grey"
        }}
        onPress={() =>this.logout()}/>
   
        </View>
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
    );
  }
}

export default connect()(Profile);
import React, { Component } from 'react';
import { Text, View, Button, TextInput, Dimensions, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { AsyncStorage } from 'react-native';
import globalStyles from "../../assets/css/globalstyles";
import { connect } from 'react-redux';
import * as CONSTANTS from '../../utils/constant';
// import Separator from '../../components/separator/separator'
import GradientButton from '../../components/gradientbutton/gradientButton';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import KeyboardHandling from "../../components/keyboardhandling/keyboardhandling";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class CloseTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      modalVisible: false,
      filterModalVisible: false,
      "verificationcode": '',
      "comment": '',
      verificationcodeDirty: false,
      isVerificationcodeEmpty: true,
      commentDirty: false,
      isCommentEmpty: true,
      attachment:""
    };
  }
  getUsers = async () => {

    const userData = await AsyncStorage.getItem('userSession');
    if (userData !== null) {

      let user = JSON.parse(userData);
      this.user = user;
    }
  }
  componentDidMount() {
    
    this.getUsers();
  }

  getCommentStyle() {
    if (this.state.isCommentEmpty && this.state.commentDirty) {
      return (globalStyles.textInputAlert);
    }
  }
  getVerificationcodeStyle() {
    if (this.state.isVerificationcodeEmpty && this.state.verificationcodeDirty) {
      return (globalStyles.textInputAlert);
    }
  }


  getSignedUrl = async (filename)=>{
    try{
      let url = `${CONSTANTS.BASE_URL}${CONSTANTS.GET_SIGNED_URL}?file=${filename}`;
      this.props.dispatch({ type: 'SHOW_LOADER' });
      let response = await fetch(url, {
        method: CONSTANTS.METHODS.GET,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.user.token}`
        }
      });
      const responseJson = await response.json();
      return responseJson;
    }catch(ex){
      alert("ex>"+ex);
      throw ex;
    }
  }

    getBlob = async (fileUri) => {
    const resp = await fetch(fileUri);
    const imageBody = await resp.blob();
    return imageBody;
  };
  uploadData = async (signedURL,file)=>{
   
    try{
      const imageBody = await this.getBlob(file.uri);
      let url = signedURL.success;
      await fetch(url, {
        method: "PUT",
        body: imageBody,
      });
    }catch(ex){
alert("Error on file upload"+ex);
    }
  }
  closeTicket = async ()=>{
    try{
      let submutForm = true;
      if (this.state.verificationcode == '') {
        this.setState({ isVerificationcodeEmpty: true });
        this.setState({ verificationcodeDirty: true });
        submutForm = false;
      }
  
      if (this.state.comment == '') {
        this.setState({ isCommentEmpty: true });
        this.setState({ commentDirty: true });
        submutForm = false;
      }
  
      if (!submutForm)
        return
      let url = `${CONSTANTS.BASE_URL}${CONSTANTS.CLOSE_TICKET}`;
      this.props.dispatch({ type: 'SHOW_LOADER' });
      let response = await fetch(url, {
        method: CONSTANTS.METHODS.POST,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.user.token}`
        },
        body: JSON.stringify({
          "ticketid": this.props.route.params.ticketid,
          "verificationcode": this.state.verificationcode,
          "comments":this.state.comment,
          "attachments":this.state.attachment
        })
      });
      const responseJson = await response.json();
      //alert("Close resolt"+JSON.stringify(responseJson));
      this.props.dispatch({ type: 'HIDE_LOADER' });
     
      this.props.navigation.navigate('Tickets');
      return responseJson;
      
    }catch(ex){
      this.props.dispatch({ type: 'Hide_LOADER' });
alert("Close ticket Exceptiom"+JSON.stringify(ex));
    }
  }
  uploadAttachment = async (attachment)=>{
    try{
      let signedURL = await this.getSignedUrl(attachment.assets[0].fileName);
      let uploadResult = await this.uploadData(signedURL,attachment.assets[0]);

      this.setState({attachment:attachment.assets[0].fileName})
      // let uploadResult = await this.closeTicket();
      this.props.dispatch({ type: 'HIDE_LOADER' });
    }catch(ex){
      this.props.dispatch({ type: 'HIDE_LOADER' });
      alert("exception upload"+JSON.stringify(ex));
    }
    
  }

  getCloseTicketView = ()=>{
    return (<View
      style={{
       // width: "90%",
      //  backgroundColor:'blue'
        // paddingVertical:80
      }}>
        <View style={ {alignItems:"center",
    justifyContent:"center",
    alignContent:"center",}}
    >
      </View>
      <View style={{ width: "90%",paddingHorizontal:"4%",paddingVertical:"5%" }}>
        <Text style={[globalStyles.labelText, { color: "#0E86D4", paddingHorizontal: 0 }]}>Mark Ticket Completed</Text>
      </View>
      <View style={{ paddingHorizontal:"8%" }}>
      <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '95%' }]}>
        <TextInput underlineColorAndroid='transparent'
          placeholder='Verification Code'
          eyboardType='numeric'
          style={[globalStyles.modelText, this.getVerificationcodeStyle()]}
          onChangeText={(verificationcode) => {
            this.setState({ verificationcode });
            this.setState({ verificationcodeDirty: false });
          }}
          value={this.state.verificationcode} />
      </View>
      <View style={[{ padding: 4, justifyContent: 'center', alignItems: 'center', margin: 3, width: '95%' }]}>
        <TextInput underlineColorAndroid='transparent'
          placeholder='Comment'
          multiline={true}
          style={[globalStyles.modelText, this.getCommentStyle(), { height: 120 }]}
          onChangeText={(comment) => {
            this.setState({ comment });
            this.setState({ commentDirty: false });
          }}
          value={this.state.comment}
        />
      </View>

      <View style={{
        flexDirection: "column",
        paddingVertical: 7
      }}>
        <GradientButton color={CONSTANTS.UI_CONSTANTS.LIGHTBLUE_CTA_COLORS} type={'BTN'} text={'Attach Media'}
          onPress={() => {
            launchImageLibrary({}, (data)=>{
              this.uploadAttachment(data)
             // alert(data.assets[0].fileName);
            });
          }} />
   <View style={{
        flexDirection: "column",
        paddingVertical: 7
      }}>
        <GradientButton color={CONSTANTS.UI_CONSTANTS.GREY_COLORS} type={'BTN'} text={'Close Ticket'}
          style={{
            color: "grey"
          }}
          onPress={() => {
            this.closeTicket();
          }} />

      </View>
</View>
      </View>
    </View>)
  }
  render() {
    return (
      <KeyboardHandling>
            <View style={{
              flex: 1,
              backgroundColor: 'white',
              minHeight:viewportHeight
            }}>
              {this.getCloseTicketView()}
              
            </View>
      </KeyboardHandling>
 
    );
  }
}

export default connect()(CloseTicket);
import * as React from 'react';
import  { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Dimensions } from 'react-native';
const {width: viewportWidth,height: viewportHeight} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./app/screens/home/home"
import Login from "./app/screens/login/login"
import VerifyUser from "./app/screens/verifyuser/verifyuser"
import SignUp from "./app/screens/signup/signup"
import Purchases from "./app/screens/purchases/purchases"
import UserPurchases from "./app/screens/purchases/userspurchases"
import ServiceUserPurchases from "./app/screens/purchases/serviceuserspurchases"
import Booking from "./app/screens/booking/booking"
import Profile from "./app/screens/profile/profile"
import UserManagement from "./app/screens/usermanagement/usermanagement"
import TicketManagement from "./app/screens/ticketmanagement/ticketmanagement"
import ServiceTicketManagement from "./app/screens/ticketmanagement/serviceticketmanagement"
import AddPurchase from "./app/screens/purchases/addpurchase"
import TicketDetails from "./app/screens/ticketmanagement/ticketdetails"
import ServiceTicketDetails from "./app/screens/ticketmanagement/serviceticketdetails"
import CloseTicket from "./app/screens/ticketmanagement/closeticket"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from "./context"
const Tab = createBottomTabNavigator();
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/config/store';
import Loader from './app/components/loader/loader'
import * as CONSTANTS from './app/utils/constant';
import { navigationRef } from './RootNavigation';
import FontAwesome, {Icons,SolidIcons, RegularIcons, BrandIcons} from 'react-native-fontawesome';
// import PubNubReact from 'pubnub-react';
function TicketManagementComponent(){
  return(   <Stack.Navigator initialRouteName="TicketManagement">
  <Stack.Screen 
  //options={{ headerShown: true }}
    options={{
    //  unmountOnBlur: true,
      //title: 'My home',
      headerStyle: {
        backgroundColor: "#0E86D4",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize:viewportWidth*0.06,
        fontWeight: 'bold',
      },
      title:"Ticket Management"
    }}
  name="TicketManagement" component={TicketManagement} />
  <Stack.Screen options={{ headerShown: true }} name="TicketDetails" component={TicketDetails} />
</Stack.Navigator>
)
}

function ServicePuchaseManagementComponent(){
  return(   <Stack.Navigator tialRouteName="Purchases">
  <Stack.Screen 
  //options={{ headerShown: true }}
    options={{
    //  unmountOnBlur: true,
      //title: 'My home',
      headerStyle: {
        backgroundColor: "#0E86D4",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize:viewportWidth*0.06,
        fontWeight: 'bold',
      },
    }}
  name="Purchases" component={ServiceUserPurchases} />
  <Stack.Screen options={{ headerShown: true,title: '', }} name="AddPurchase" component={AddPurchase} />
</Stack.Navigator>
)
}
function ServiceTicketManagementComponent(){
  return(   <Stack.Navigator tialRouteName="Tickets">
  <Stack.Screen 
  //options={{ headerShown: true }}
    options={{
    //  unmountOnBlur: true,
      title: 'Tickets',
      headerStyle: {
        backgroundColor: "#0E86D4",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize:viewportWidth*0.06,
        fontWeight: 'bold',
      },
    }}
  name="Tickets" component={ServiceTicketManagement} />
  <Stack.Screen options={{ headerShown: true,title: '', }} name="TicketDetailsService" component={ServiceTicketDetails} />
  <Stack.Screen options={{ headerShown: true,title: '', }} name="CloseTicket" component={CloseTicket} />
</Stack.Navigator>
)
}
function PuchaseManagementComponent(){
  return(   <Stack.Navigator tialRouteName="Purchases">
  <Stack.Screen 
  //options={{ headerShown: true }}
    options={{
    //  unmountOnBlur: true,
      //title: 'My home',
      headerStyle: {
        backgroundColor: "#0E86D4",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize:viewportWidth*0.06,
        fontWeight: 'bold',
      },
    }}
  name="Purchases" component={Purchases} />
  <Stack.Screen options={{ 
    
    headerShown: true,title: '', }} name="AddPurchase" component={AddPurchase} />
</Stack.Navigator>
)
}
const USER_MENU =[{
    "name":"Purchases",
    "component":UserPurchases,
    "icon":SolidIcons.shoppingBasket
},{
  "name":"Tickets",
  "component":Booking,
  "icon":SolidIcons.suitcase
},
{
  "name":"Profile",
  "component":Profile,
  "icon":SolidIcons.userEdit
}];

const ADMIN_MENU = [
  {
    "name": "Users",
    "component": UserManagement,
    "icon": SolidIcons.users
  },
  {
    "name": "Purchases",
    "showHeader": false,
    "component": PuchaseManagementComponent,
    "icon": SolidIcons.shoppingBasket
  },
  {
    "name": "Tickets",
    "component": TicketManagementComponent,
    "showHeader": false,
    "icon": SolidIcons.suitcase
  },
  {
    "name": "Profile",
    "component": Profile,
    "icon": SolidIcons.userEdit
  }
];

const SERVICE_MENU = [{
  "name": "Purchases",
  "component": ServicePuchaseManagementComponent,
  "showHeader": false,
  "icon": SolidIcons.shoppingBasket
},
  {
    "name": "Tickets",
    "component": ServiceTicketManagementComponent,
    "showHeader": false,
    "icon": SolidIcons.suitcase
  },
  {
    "name": "Profile",
    "component": Profile,
    "icon": SolidIcons.userEdit
  }];

const Stack = createNativeStackNavigator();

class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { menu:USER_MENU };

    // this.pubnub = new PubNubReact({
    //   publishKey: 'pub-c-b1ef8bb6-4a2e-4c4b-9976-4168d266d16e',
    //   subscribeKey: 'sub-c-3b3b0e8a-1dbd-11e7-aca9-02ee2ddab7fe'
    // }); 
    // this.pubnub.init(this);
  }
  getUserDataFromStorage = async () =>{

    const userData = await AsyncStorage.getItem('userSession');
    if (userData !== null) {  
      let user = JSON.parse(userData);
      if(user.role == "SERVICEUSER"){
        this.setState({menu:SERVICE_MENU})
      } else if(user.role == "ADMIN"){
        this.setState({menu:ADMIN_MENU})
      }   
    }
  }
  componentDidMount() {
  

    try {
      this.getUserDataFromStorage()
     // 
    } catch (error) {

    }
  }
  render(){
  //  alert("haha"+JSON.stringify(this.state.menu));
    return(
      <AppContext.Provider value={{menu:this.state.menue}}>
      <Tab.Navigator
      unmountOnBlur={true}>
        {
        this.state.menu.map((item)=>{
          let showHeader = true;
          if(item.showHeader!=undefined )
          showHeader = item.showHeader;
          return <Tab.Screen name={item.name} component={item.component}
          options={{
            headerShown: showHeader,
            unmountOnBlur: true,
            //title: 'My home',
            headerStyle: {
              backgroundColor: "#0E86D4",
            },
            tabBarShowLabel:false,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize:viewportWidth*0.06,
              fontWeight: 'bold',flexWrap: 'wrap'
            },
                  cardStyle: { },
          //   tabBarOptions: { 
          //     showIcon: true 
          //  },
          tabBarLabelStyle:{
            fontSize: 15,color:"#0E86D4"
          },
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome style={{fontSize: 32,color:"#0E86D4"}} icon={item.icon} />
            )
          }}
          />
        })
        }
      {/* <Tab.Screen name="Purchases" component={Purchases} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
    </AppContext.Provider>
    )
  }
}
function Menu() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Purchases" component={Purchases} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}



class App extends Component {
constructor(props) {
    super(props);


  }
  render() {
    return (
<Provider store={ store }>
       {/* <Login></Login> */}
       <Loader/>
    <NavigationContainer ref={navigationRef}>
     
      <Stack.Navigator tialRouteName="Login"
      
      screenOptions={{
        contentStyle:{
       //   backgroundColor:'red'
        },
       // headerStyle: { elevation: 0 },
        cardStyle: { }
    }}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }}  name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }}  name="VerifyUser" component={VerifyUser} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={TabMenu} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    );
  }

}
// function App() {
//   return (
//     <Provider store={ store }>
//        {/* <Login></Login> */}
//        <Loader/>
//     <NavigationContainer>
     
//       <Stack.Navigator tialRouteName="Login"
      
//       screenOptions={{
//         contentStyle:{
//        //   backgroundColor:'red'
//         },
//        // headerStyle: { elevation: 0 },
//         cardStyle: { }
//     }}>
//         <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
//         <Stack.Screen options={{ headerShown: false }}  name="SignUp" component={SignUp} />
//         <Stack.Screen options={{ headerShown: false }}  name="VerifyUser" component={VerifyUser} />
//         <Stack.Screen options={{ headerShown: false }} name="Home" component={TabMenu} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// }

export default App;
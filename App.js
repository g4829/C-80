import React,{Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-native'
import SignupLoginScreen from './screens/SignupLoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import CreateDrawerNavigator from 'react-navigation-drawer';
import SideDrawer from 'react-navigation-drawer';
import SettingsScreen from './screens/SettingsScreen'; 

export default function App(){
    return(
      <SignupLoginScreen/>
    );
}

const switchNavigator=createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  ExchangeScreen: {screen: ExchangeScreen}
})

const AppDrawNavigator=createDrawerNavigator({
  Home: {
    screen: TabNavigator
  },
  Settings: {
    screen: SettingsScreen
  }
},
{
  contentComponent: CustomSideBarMenu
},
{
  initialRouteName: 'Home'
})

const AppContainer=createAppContainer(switchNavigator);

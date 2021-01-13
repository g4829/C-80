import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal, FlatList,ListItem,Button } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import DrawerItems from 'react-navigation-drawer';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <DrawerItems {...this.props}/>
                <View style={{flex: 1,justifyContent: 'flex-end',paddingBottom: 30}}>
                    <TouchableOpacity style={{justifyContent: "center",padding: 10,height: 30,width: '100%'}}
                    onPress={()=>{
                        this.props.navigation.navigate('SignupLoginScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )

    }

}

var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerItemsContainer: {
      flex: 0.8,
    },
    logOutContainer: {
      flex: 0.2,
      justifyContent: "flex-end",
      paddingBottom: 30,
      flexDirection: "row",
    },
    logOutButton: {
      height: 30,
      width: "85%",
      justifyContent: "center",
      padding: 10,
    },
    imageContainer: {
      flex: 0.75,
      width: "40%",
      height: "20%",
      marginLeft: 20,
      marginTop: 30,
      borderRadius: 40,
    },
    logOutText: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });

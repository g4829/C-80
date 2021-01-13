import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal, Button } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends Component{
    constructor(){
        super()
        this.state={
          itemName : '',
          item: '',
          description: '',
          username: ''
        }
      }

      render(){
          return(
              <TouchableOpacity
              style={[styles.button,{marginTop: 10}]}
              onPress={()=>{this.addItem(this.state.itemName,this.state.description)}}
              >
                  <Text style={{color: '#ffff',fontSize: 18,fontWeight: 'bold'}}>Add Item</Text>
              </TouchableOpacity>
          )
      }

      addItem=(itemName,description)=>{
          var username=this.state.username
          db.collection("exchange_requests").add({
              "username": username,
              "item_name": itemName,
              "description": description
          })
          this.setState({
              itemName: '',
              description: ''
          })
          return Alert.alert(
              'Item ready to exchange',
              '',
              [
                  {text: 'OK',onPress: ()=>{
                      this.props.navigation.navigate('HomeScreen')
                  }}
              ]
          );
      }

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffe0b2'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:60,
      fontWeight:'300',
      fontFamily:'AvenirNext-Heavy',
      color : '#ff9800'
    },
    loginBox:{
      width: 300,
      height: 35,
      borderBottomWidth: 1.5,
      borderColor:'#ffab91',
      fontSize: 20,
      marginBottom:20,
      marginTop:5
  
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ffff",
      elevation:10
    },
    buttonContainer:{
      flex:1,
    }
  })
  
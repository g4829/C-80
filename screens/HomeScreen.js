import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput, Alert, Modal, FlatList,ListItem,Button } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            item: '',
            description: ''
        }
    }

    render(){
        return(
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.allRequests}
            renderItem={this.renderItem}
            />
        )
    }

    renderItem=({item,i})=>{
        console.log(item.item_name);
        return(
            <ListItem
            key={i}
            title={item.item_name}
            subtitle={item.description}
            titleStyle={{color: 'black',fontWeight: 'bold'}}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#ffff'}}>Exchange</Text>

                </TouchableOpacity>
            }
            bottomDivider
            />
        )
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
  
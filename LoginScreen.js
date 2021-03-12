import React from 'react';
import { Text, View, StyleSheet, Alert, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends React.component{
  constructor(){
    super();
    this.state = {
      emailId: '',
      password: ''
    }
  }
  login = async (email,password)=> {
    if(email && password){
        try{
          const response = await firebase.auth().signInWithEmailAndPassword(email,password)
          if(response){
              this.props.navigation.navigate('Transaction')
          }
        }
        catch(error){
            switch(error.code){
              case 'auth/user-not-found':
              Alert.alert("User dosen't exist")
              console.log("dosen't exist")
              break
              
              case 'auth/invalid-email':
              Alert.alert("Incorrect email or password")
              console.log('invalid')
              break
            }
        }
    }
     
     else {
       Alert.alert("Enter email and password");
     }
  }

  render(){
    return(

    )
  }
}
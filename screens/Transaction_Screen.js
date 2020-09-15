import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import *as Permissions from 'expo-permisions'
import {BarcodeScanner} from 'expo-barcode-scanner'
export default class TransactionScreen extends React.component{
   constructor(){
       super();
       this.state={
           hasCameraPermisssion=null,
           scanned: false,
           scannedData:'',
		   buttonState: 'normal'
		   ,
		   scannedBookId:'',
		   scanneddStudentId:''
       }
   }
   getCameraPermission = async(id) =>{
       const {status} = await Permissions.AskAsync(Permissions.CAMERA);

       this.setState({
           hasCameraPermission: status === "granted",
           buttonState:id,
           scannned:false
       });

   }
   handleBarCodeScanned = async({type,data})=>{
	   const {ButtonState} = this.state

	   if (ButtonState==="BookId"){
       this.setState({
scanned:true,
scannedData: data,
buttonState: 'normal'

	   });
	}
	else if(ButtonState==="StudentId"){
		this.setState({
			scanned:true,
			scannedData: data,
			buttonState: 'normal'
			
				   });
	}
   }

    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if (buttonState !== "normal" && hasCameraPermissions){
	        return(
	          <BarCodeScanner
	            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
	            style={StyleSheet.absoluteFillObject}
	          />
	        );
	      }
	

	      else if (buttonState === "normal"){
	        return(
	          <View style={styles.container}>
	

	        <View>
				<Image>
					source={require("../assets/booklogo.jpg")}
				style={{width:200,height:200}}

				</Image>
				<Text style={{textAlign:'centre',fontSize:30}}>
					wireless-library
					</Text>

			</View>

		
			<View style={styles.inputView}>
			<TextInput style={styles.inputBox}
			placeholder="Book Id"
			value={this.state.scannedBookId}/>
			<TouchableOpacity
			style={styles.scanButton}
			onPress={()=>{
				this.getCameraPermission("BookID")
			}}>
				<Text
				style={styles.ButtonText}>
					Scan
				</Text>
				</TouchableOpacity>
            </View>
			<View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Student Id"
              value={this.state.scannedStudentId}/>
            <TouchableOpacity 
              style={styles.scanButton}
              onPress={()=>{
                this.getCameraPermissions("StudentId")
              }}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
			</View>

	        </View>

	        );
	      }
	    }
    }
	

	  const styles = StyleSheet.create({
	    container: {
	      flex: 1,
	      justifyContent: 'center',
	      alignItems: 'center'
	    },
	    displayText:{
	      fontSize: 15,
	      textDecorationLine: 'underline'
	    },
	    scanButton:{
	      backgroundColor: '#2196F3',
	      padding: 10,
	      margin: 10
	    },
	    buttonText:{
	      fontSize: 20,
	    }
	  });


















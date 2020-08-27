import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import 'firebase/auth';
import db from '../config';

export default class SettingScreen extends React.Component {
    componentDidMount() {
        this.getUserDetails();
    }
    constructor() {
        super();
        this.state = {
            email : '',
            contactNumber : '',
            address : '',
            firstName : '',
            lastName : '',
            docID : ''
        }
    }
    getUserDetails=()=>{
        console.log("in function");
        var user = firebase.auth().currentUser;
        var email = user.email;
        db.collection('users').where('email','==',email).get().then((snapshot)=>{
            console.log("in query");
            snapshot.forEach(doc => {
                console.log("in snapshot");
                var data = doc.data();
                console.log(data);
                this.setState({
                    email : data.email,
                    contactNumber : data.mobileNumber,
                    firstName : data.firstName,
                    lastName : data.lastName,
                    address : data.address,
                    docID : doc.id
                });
                console.log(this.state);
            });
        });
    }
    updateDetails=()=>{
        db.collection('users').doc(this.state.docID).update({
            'mobileNumber' : this.state.contactNumber,
            'firstName' : this.state.firstName,
            'lastName' : this.state.lastName,
            'address' : this.state.address
        });
    }
    render() {
        return (
            <View style={{alignContent : 'center', marginTop : 30}}>
                <MyHeader title={"Settings"} navigation={this.props.navigation}/>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder={"First Name"}
                        value={this.state.firstName}
                        onChangeText={(text)=>{
                            this.setState({
                                firstName : text
                            });
                        }}
                        style={styles.formTextInput}
                    />
                    <TextInput
                        placeholder={"Last Name"}
                        value={this.state.lastName}
                        onChangeText={(text)=>{
                            this.setState({
                                lastName : text
                            });
                        }}
                        style={styles.formTextInput}
                    />
                    <TextInput
                        placeholder={"Contact Number"}
                        value={this.state.contactNumber}
                        onChangeText={(text)=>{
                            this.setState({
                                contactNumber : text
                            });
                        }}
                        style={styles.formTextInput}
                    />
                    <TextInput
                        placeholder={"Address"}
                        value={this.state.address}
                        onChangeText={(text)=>{
                            this.setState({
                                address : text
                            });
                        }}
                        style={styles.formTextInputMultiLine}
                        multiline={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.updateDetails}
                    >
                        <Text style={styles.buttonText}>Save details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer:{
        flex:1,
        width:'100%',
        alignItems: 'center'
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    },
    formTextInputMultiLine:{
        width:"75%",
        minHeight:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
    },
    buttonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff"
    }
});
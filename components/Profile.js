import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, KeyboardAvoidingView, Dimensions } from 'react-native';
import Fancytextfield from './Textfield.js'
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import { Title } from 'react-native-paper';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Title style={{fontSize:30}}>User Profile</Title>
                        </View>
                        <View style={{marginTop: -20}}>
                            <View style={styles.bodyContent}>
                                <Fancytextfield label="Name" width="100%"/>
                                <Fancytextfield label="Phone Number" width="100%"/>
                                <Fancytextfield label="Emergency Contact Number" width="100%"/>
                                <View style={{ width: '100%', flexDirection: "row", flex: 1, flexWrap: "wrap", justifyContent: "space-between" }}>
                                    <Fancytextfield style={{float: 'left'}} label="Age" width="45%"/>
                                    <Fancytextfield style={{float: 'right'}} label="Sex" width="45%"/>
                                </View>
                                <Fancytextfield label="District, City" width="100%"/>
                                <Fancytextfield label="Current Health Concerns" width="100%"/>
                                <Fancytextfield label="Allergies" width="100%"/>
                                <Fancytextfield label="Blood Type" width="100%"/>
                            </View>
                        </View>  
                    </ScrollView>   
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    header:{
        backgroundColor: "#00BFFF",
        height:100,
        justifyContent: 'center', 
        alignItems: 'center',
        flex:1
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    bodyContent: {
        alignItems: 'center',
        padding:30,
    },
    name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    description:{
        fontSize:16,
        color: "#696969",
        textAlign: 'center'
    },
});

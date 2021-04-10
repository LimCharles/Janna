import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Tickbox from './Tickbox.js';
import { Title } from 'react-native-paper';
const Survey = ({ navigation }) => {
   return (
     <ScrollView>
      <View style={{height: windowHeight*1.2, width: windowWidth, alignItems: 'center', justifyContent: 'center'}}>
          <Title style={{paddingTop: 30, fontSize: 30}}>House Checkup</Title>
          <Tickbox label="Is your house concrete?"/>
          <Tickbox label="Are there more than 6 people living in your household?"/>
          <Tickbox label="Do you have access to clean water?"/>
          <Tickbox label="Does your house have damages or leaks?"/>
          <Tickbox label="Does your house have a second floor?"/>
          <Tickbox label="Can you access the roof of your house?"/>
          <Tickbox label="Do you live in a high rise building?"/>
          <Tickbox label="Do you have furniture you can hide under?"/>
          <Tickbox label="Does your house have exposed wiring?"/>
          <Tickbox label="Does your have have gas lines?"/>
      </View>
     </ScrollView>
   );
 }
 
 export default Survey;
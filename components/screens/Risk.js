import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(field) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const [bloodtype, setType] = useState('');
  const [address, setAddress] = useState('');
  const [health, setHealth] = useState('');
  const profile = {
    Name: name,
    PhoneNumber: phone,
    Address: address,
    HealthConcern: health,
    BloodType: bloodtype,
    DangerLevel: field.dangerlevel,
    Situation: field.situation,
    Coords: location
  }
  useEffect(() => {
    (async () => {
      AsyncStorage.getItem('Name').then((value) => {
        if (value !== null) {
          setName(value); 
        }
      })
      AsyncStorage.getItem('Phone Number').then((value) => {
        if (value !== null) {
          setNumber(value); 
        }
      })
      AsyncStorage.getItem('Current Health Concerns').then((value) => {
        if (value !== null) {
          setHealth(value); 
        }
      })
      AsyncStorage.getItem('District, City').then((value) => {
        if (value !== null) {
          setAddress(value); 
        }
      })
      AsyncStorage.getItem('Blood Type').then((value) => {
        if (value !== null) {
          setType(value); 
        }
      })
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();    
  }, []);

  let text = 'Loading..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(profile);
  }

  return (
    <TextInput>{text}</TextInput>
  );
}

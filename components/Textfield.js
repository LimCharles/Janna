import React, {useEffect, useState } from 'react';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Fancytextfield = (field) => {
  const [text, setText] = useState('');
  useEffect(() => {
    AsyncStorage.getItem(field.label).then((value) => {
      if (value !== null) {
        setText(value); 
      }
    })
  });
  return (
    <TextInput
      style={{ width: field.width, marginTop: 30}}
      label={field.label}
      value={(text)}
      onChangeText={text => {
        setText(text)
        AsyncStorage.setItem(field.label,text)
      }}mo
      mode='outlined'
      dense='true'
    />
  );
};

export default Fancytextfield;
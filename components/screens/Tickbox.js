import React, {useEffect, useState } from 'react';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Dimensions } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const Tickbox = (field) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem(field.label).then((value) => {
          if (value !== null) {
            setChecked(JSON.parse(value)); 
          }
        })
    });

    return (
        <View style={{flexDirection: 'row', paddingTop: 30, justifyContent:"space-evenly", alignItems: "center"}}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                    AsyncStorage.setItem(field.label,JSON.stringify(!checked));
                }}
            />  
            <Text style={{fontSize: 20, color: "#000000", width: windowWidth*0.85}}>{field.label} </Text>
        </View>
    );

};

export default Tickbox;
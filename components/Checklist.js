import * as React from 'react';
import { View } from 'react-native';
import Tickbox from './screens/Tickbox.js';

const Checklist = () => {
    return ( 
        <View>
            <Tickbox label="Do you know where the nearest shelter is?"/>
            <Tickbox label="Do you stay up to date with local news?"/>
            <Tickbox label="Are your emergency supplies ready?"/>
            <Tickbox label="Do you have an emergency plan for emergencies?"/>
            <Tickbox label="Do you know the local emergency numbers?"/>
            <Tickbox label="Is your contact information updated?"/>
        </View>
    );
}

export default Checklist;
  
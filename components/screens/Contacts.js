import React from 'react';
import { Text, View, Dimensions } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import { IconButton, Colors, Avatar } from 'react-native-paper';
import call from 'react-native-phone-call'

const Contacts = ({ navigation }) => {
   return (
     <View style={{height: windowHeight, width: windowWidth}}>
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:20, paddingLeft: 20, paddingRight: 20}}>
            <Avatar.Image size={60} source={require('./assets/hotline.png')}/>
            <Text style={{paddingLeft: 17, fontSize: 20}}> Emergency Hotline </Text>
            <IconButton
            icon="phone"
            color={Colors.red500}
            size={30}
            onPress={() => call({number: '911', prompt: false}).catch(console.error)}
            />
         </View>
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:20, paddingLeft: 20, paddingRight: 20}}>
            <Avatar.Image size={60} source={require('./assets/pnp.png')}/>
            <Text style={{paddingLeft: 17, fontSize: 20}}> PNP </Text>
            <IconButton
            icon="phone"
            color={Colors.red500}
            size={30}
            onPress={() => call({number: '117', prompt: false}).catch(console.error)}
            />
         </View>
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:20, paddingLeft: 20, paddingRight: 20}}>
            <Avatar.Image size={60} source={require('./assets/mmda.png')}/>
            <Text style={{paddingLeft: 17, fontSize: 20}}> MMDA </Text>
            <IconButton
            icon="phone"
            color={Colors.red500}
            size={30}
            onPress={() => call({number: '136', prompt: false}).catch(console.error)}
            />
         </View>
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:20, paddingLeft: 20, paddingRight: 20}}>
            <Avatar.Image size={60} source={require('./assets/ndrrmc.png')}/>
            <Text style={{paddingLeft: 17, fontSize: 20}}> NDRRMC </Text>
            <IconButton
            icon="phone"
            color={Colors.red500}
            size={30}
            onPress={() => call({number: '9115061', prompt: false}).catch(console.error)}
            />
         </View>
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:20, paddingLeft: 20, paddingRight: 20}}>
            <Avatar.Image size={60} source={require('./assets/redcross.png')}/>
            <Text style={{paddingLeft: 17, fontSize: 20}}> Red Cross </Text>
            <IconButton
            icon="phone"
            color={Colors.red500}
            size={30}
            onPress={() => call({number: '143', prompt: false}).catch(console.error)}
            />
         </View>
         <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop:20, paddingLeft: 20, paddingRight: 20}}>
            <Avatar.Image size={60} source={require('./assets/dpwh.png')}/>
            <Text style={{paddingLeft: 17, fontSize: 20}}> DPWH </Text>
            <IconButton
            icon="phone"
            color={Colors.red500}
            size={30}
            onPress={() => call({number: '83043000', prompt: false}).catch(console.error)}
            />
         </View>
     </View>
   );
 }
 
 export default Contacts;
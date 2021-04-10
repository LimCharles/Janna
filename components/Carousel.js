import React, { Component } from 'react';
import { Dimensions, View, FlatList } from 'react-native';
import { Title, Button  } from 'react-native-paper';
import Checklist from './Checklist.js';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Profile from './Profile.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './screens/Contacts.js';
import Maps from './screens/Maps.js';
import Survey from './screens/Survey.js';
import Risklevel from './Risklevel.js';
import Alert from './Alert.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const slideList = Array.from({ length: 3 }).map((_, i) => {
  return {
    id: i.toString(),
  };
});

const Homescreen = ({ navigation }) => {
  return (
    <View style={{height: windowHeight, width: windowWidth}}>
      <View style={{ alignItems: "center" }} >
        <Title style={{paddingTop: 40, fontSize: 30}}>Janna's Checklist</Title>
        <Checklist/>
      </View>
      <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', padding: 10}}>
        <Button style={{ bottom: 0}} icon="account-box" mode="contained" onPress={() => navigation.navigate('Contacts')}> 
          Contacts
        </Button>
        <Button  style={{ bottom: 0}}  icon="map-marker" mode="contained" onPress={() => navigation.navigate('Map')}>
          Map
        </Button>
        <Button  style={{ bottom: 0}} icon="clipboard-text" mode="contained" onPress={() => navigation.navigate('Survey')}>
          Survey
        </Button>
      </View>
    </View>
  );
}

function Slide({ data }) {
  const [risklevel, setRisk] = React.useState(0);
  React.useEffect(() => {
    var risk = 0;
    AsyncStorage.getItem('Do you know where the nearest shelter is?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Do you stay up to date with local news?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Are your emergency supplies ready?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Do you have an emergency plan for emergencies?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Do you know the local emergency numbers?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Is your house concrete?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Do you have access to clean water?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Does your house have damages or leaks?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Does your house have a second floor?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Can you access the roof of your house?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Do you live in a high rise building?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Do you have furniture you can hide under?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Does your house have exposed wiring?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Does your have have gas lines?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Are there more than 6 people living in your household?').then((value) => {
      if (value == 'false') {
        risk++;
      }
    })
    AsyncStorage.getItem('Is your contact information updated?').then((value) => {
      if (value == 'false') {
        risk++;
        setRisk(risk);
      }
    })
  });
  if (data.id == 0) {
    return (
      <View
        style={{
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
        }}
      >
        <Profile/>
      </View>
    );
  } else if (data.id == 1) {
    return (
      <View
      style={{
      height: windowHeight,
      width: windowWidth,
      paddingTop: 30,
      justifyContent: "flex-start",
      alignItems: "center",
      }}
      >
        <Title>You are currenly at a</Title>
        <Risklevel risknumber={risklevel}/>
        <Alert/>
      </View>
    )
  } else if (data.id == 2) {
    return (
      <View style={{height: windowHeight, width: windowWidth}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Homescreen}/>
            <Stack.Screen name="Contacts" component={Contacts}/>
            <Stack.Screen name="Map" component={Maps}/>
            <Stack.Screen name="Survey" component={Survey}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}
  
export class Carousel extends Component {
  render() {
    return (
      <FlatList
      ref={"Flatref"}
      data={slideList}
      initialNumToRender={5}
      initialScrollIndex={1}
      style={{ flex: 1 }}
      getItemLayout={(data, index) => (
      {length: windowHeight, offset: windowWidth * index, index}
      )}  
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={true}
      />
    );
  }
}

import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import * as Location from 'expo-location';

const Maps = ({ navigation }) => {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [latitude, setLat] = React.useState(0);
  const [longitude, setLon] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
    })();    
  }, []);


  var source = "https://maps.geoapify.com/v1/staticmap?style=osm-carto&width="+
  windowWidth+
  "&height="+
  windowHeight+
  "&center=lonlat:"+
  longitude+
  ","+
  latitude+
  "&marker=lonlat:"+
  longitude+
  ","+
  latitude+
  ";type:material;color:%23ff3421;icontype:awesome"+
  "&marker=lonlat:"+
  "121.0308"+
  ","+
  "14.6047"+
  ";type:awesome;color:%2319b8fc;size:large"+
  "&marker=lonlat:"+
  "121.0225"+
  ","+
  "14.6065"+
  ";type:awesome;color:%2319b8fc;size:large"+
  "&zoom=14&apiKey=5c8a13c92fec42ff9ee2dc5876ff6c94"

   return (
     <View style={{height: windowHeight, width: windowWidth}}>
       <Image style={{width: windowWidth, height: windowHeight}} source={{uri: source}}/>
     </View>
   );
 }
 
 export default Maps;


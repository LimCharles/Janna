import { Text, Dimensions, View } from 'react-native';
import React from 'react';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import { Card} from 'react-native-paper';


const Risklevel = (field) => {

    if (field.risknumber >= 11) {
        return (
            <View>
                <Text style={{padding: 5, fontSize: 30, color: "#FF0000", textAlign: 'center', paddingBottom: 15}}>HIGH RISK</Text>
                <Card style={{width: windowWidth*0.8, height: windowHeight*0.6}}>
                    <Card.Cover style={{height: windowHeight*0.6}}source={ require('./screens/assets/high.png') } />
                </Card>
                <Text style={{paddingTop: 15, fontSize: 18, color: "#000000", textAlign: 'center', width: windowWidth*0.8}}>WHAT! You're at a high risk! You need to plan better and fix your house!</Text>
            </View>
            
            
        );
    } else if (field.risknumber >= 5) {
        return (
            
            <View>
                <Text style={{padding: 5, fontSize: 30, color: "#FFA500", textAlign: 'center', paddingBottom: 15}}>MEDIUM RISK</Text>
                <Card style={{width: windowWidth*0.8, height: windowHeight*0.6}}>
                    <Card.Cover style={{height: windowHeight*0.6}}source={ require('./screens/assets/medium.png') } />
                </Card>
                <Text style={{paddingTop: 15, fontSize: 18, color: "#000000", textAlign: 'center', width: windowWidth*0.8}}>You're at a medium risk! Let's get some work done on that checklist!</Text>
            </View>
        );
    } else {
        return (
            <View>
                <Text style={{padding: 5, fontSize: 30, color: "#149414", textAlign: 'center', paddingBottom: 15}}>LOW RISK</Text>
                <Card style={{width: windowWidth*0.8, height: windowHeight*0.6}}>
                    <Card.Cover style={{height: windowHeight*0.6}}source={ require('./screens/assets/low.png') } />
                </Card>
                <Text style={{paddingTop: 15, fontSize: 18, color: "#000000", textAlign: 'center', width: windowWidth*0.8}}>Congrats! You're at a low risk level! Let's keep it that way!</Text>
            </View>
        );
    }
};

export default Risklevel;
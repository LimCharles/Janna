import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Dialog, Portal, IconButton, Colors, RadioButton, TextInput, Button } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Risk from './screens/Risk.js'

const Alert = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [value, setValue] = React.useState('low');
  const [text, setText] = React.useState('');

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const showDialog2 = () => setVisible2(true);

  const hideDialog2 = () => setVisible2(false);

  return (
    <PaperProvider>
        <View>
            <IconButton
            icon="alarm-light"
            color={Colors.red500}
            size={40}
            onPress={showDialog}
            />
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <View style={{alignItems: 'baseline', padding:10}}>
                        <Dialog.Actions>

                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                <View style={{flexDirection: 'row', alignItems:'center'}}>
                                    <RadioButton value="low" />
                                    <Text>Low Danger Level</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems:'center', paddingTop:15}}>
                                    <RadioButton value="medium" />
                                    <Text>Medium Danger Level</Text>                                   
                                </View>
                                <View style={{flexDirection: 'row', alignItems:'center', paddingTop:15}}>
                                    <RadioButton value="high" />
                                    <Text>High Danger Level</Text>
                                </View>
                            </RadioButton.Group>
                        </Dialog.Actions>
                        <Dialog.Actions>
                            <View style={{width: windowWidth*0.77}}>
                                <TextInput
                                    label="Situation"
                                    value={text}
                                    onChangeText={text => setText(text)}
                                />
                            </View>
                        </Dialog.Actions>
                        <Dialog.Actions>
                            <Button onPress={showDialog2}>Ok</Button>
                            <Button onPress={hideDialog}>Cancel</Button>
                        </Dialog.Actions>
                    </View>
                </Dialog>
                <Dialog visible={visible2} onDismiss={hideDialog2}>
                    <Dialog.Content>
                        <Text>
                            Send this text message to 21583026
                        </Text>
                    </Dialog.Content>
                    <Risk dangerlevel={value} situation={text}/>
                </Dialog>
            </Portal>
        </View>
    </PaperProvider>
  );
};

export default Alert;
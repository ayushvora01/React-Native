/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { PropsWithChildren, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const[showModal,setShowModal]=useState(false);

  return (
    <View style={Styles.main}>
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Hello, I am Ayush</Text>
            <Button title='Close' onPress={()=>setShowModal(false)}/>
          </View>
        </View>
      </Modal>
      <View style={Styles.buttonView}>
        <Button title='Open' onPress={()=>setShowModal(true)}/></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'black',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
    marginBottom: 20,
  }
})

export default App;
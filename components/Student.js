/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
// }

class Student extends React.Component {
  render(){
    return (
      <View>
        <Text style={{fontSize:30, fontWeight:'bold',color:'green'}}>Student Component</Text>
        <TextInput placeholder='Enter your Name' />
        <Button title='Press Me'></Button>
      </View>
    );
  }
}

export default Student;
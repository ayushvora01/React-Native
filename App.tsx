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
  Pressable,
  Platform,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WebView, { } from 'react-native-webview';

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

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'yellow',
          },
          headerTitleStyle:{
            fontSize:30,
            color:'black'
          }
          }}>
        <Stack.Screen name='Login' component={Login} 
          options={{
            title:'Login Screen',
            headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'black',
          },
          headerTitleStyle:{
            fontSize:30,
            color:'white'
          }
          }}/>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type HomeProps={
  navigation: any;
}
const Home =(props: HomeProps)=>{
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30, color:'black'}}>Home Screen</Text>
    </View>
  )
}

type LoginProps = {
  navigation: any; // Replace 'any' with the appropriate type for the 'Navigation' prop
};

const Login = (props: LoginProps) => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30, color:'black'}}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate("Home")} color={'red'}/>
    </View>
  )
}
export default App;

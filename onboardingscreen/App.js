import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './screens/Home';
import loginScreen from './screens/loginScreen';
import onboardingScreen from './screens/onboardingScreen';

const Stack = createStackNavigator();

const App = () => {

  const [isFirstLunch,setIsFirstLunch] = useState(true)

  useEffect(()=>{
    AsyncStorage.getItem('AlredyLunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('AlredyLunched','true')
        setIsFirstLunch(true)
      }else{
        setIsFirstLunch(false)
      }
    })
  })

  if(isFirstLunch == null){
    return null
  }else if(isFirstLunch == true){
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Onboarding" component={onboardingScreen} />
          <Stack.Screen name="Login" component={loginScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={loginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;

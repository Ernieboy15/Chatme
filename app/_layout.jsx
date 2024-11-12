import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Stack,SplashScreen} from 'expo-router';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const[fontsLoaded, error] = useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
         
    });
    useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
      
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false}} />
            <Stack.Screen name='(tabs)' options={{headerShown:false}} />
            <Stack.Screen name='signin' options={{headerShown:false}} />
            <Stack.Screen name='(auth)' options={{headerShown:false}} />
        </Stack>
    )

}

export default MainLayout
import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Link, Redirect } from 'expo-router';
import { Image } from 'react-native';
import icons from '../constants/icons';
import CustomButtons from '../components/CustomButtons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButtons';
import signin from './signin';
import images from '../constants/images';
// Ensure the component name starts with an uppercase letter
const Index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView contentContainerStyle = {{height:'100%'}}>
      <View className = "w-full justify-center items-center min-h-[85vh] px-4">
      
      <Image 
            source={images.chat}
            className = "w-[120px] h-[75px] mt-10 ml-7"
            resizeMode="contain"
          />
      
      <Text className="text-4xl  text-black text font-rblack mt-2">CHAT ME</Text>

      <Image source = {icons.bubbles}
      className = "w-full h-[120] mb-20"
      resizeMode = "contain"
      />

     <View className="relative mt-5">
        <Text className="text-2xl text-blackv text-center font-rregular">A simple, fast, and secure messaging app for effortless communication</Text>
      </View>

      <CustomButton 
      title="Click Here"
      handlePress={()=>router.push('/sign-in')}
      containerStyles="w-full mt-7"
      >
        
      </CustomButton>
      
      
      <Text className="text-sm">
        click here and meet new friends around the world.
      </Text>

      </View>

      </ScrollView>
      </SafeAreaView>
  )
}

export default Index;
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { icons } from '../../constants'
import { Image } from 'react-native'
import Email from '../../components/email'


const Home = () => {
  return (
    <SafeAreaView className = "justify-center items-center">
      <Image source ={icons.email}
      className = "w-full h-[100] mt-[50]"
      resizeMode = "contain"

    />
    <Text clasName = "text-black text-3xl ">Message</Text>
    <ScrollView className = "h-full bg-gray-400 w-full">
      <Email />
      <Email />
      <Email />
      <Email />
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home
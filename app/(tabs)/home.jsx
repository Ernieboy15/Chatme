import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { icons } from '../../constants'
import { Image } from 'react-native'
import Friends from '../../components/Friends'


const Home = () => {
  return (
    <SafeAreaView className = "justify-center items-center">
      <Image source ={icons.pp}
      className = "w-full h-[100] mt-[50]"
      resizeMode = "contain"

    />
    <Text clasName = "text-black text-3xl ">Ernie Mark largo</Text>
    <ScrollView className = "h-full bg-gray-400 w-full">
      <Friends />
      <Friends />
      <Friends />
      <Friends />
      <Friends />
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home
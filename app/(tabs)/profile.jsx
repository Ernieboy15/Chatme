import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../../constants'
import { Link } from 'expo-router'


const Profile = () => {
  return (
    <View className = "w-full h-full">
      <Image source ={icons.pp}
      className = "w-full h-[100] mt-[50]"
      resizeMode = "contain"
    />

    <Link href = "/index">Logout</Link>
    </View>
  )
}

export default Profile
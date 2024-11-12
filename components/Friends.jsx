import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const Friends = () => {
  return (
    <TouchableOpacity className = "bg-blue-500 w-full h-[100]  justify-start mt-10">
        <Image source = {icons.friend1} 
        className = "w-[100] h-[100] rounded-full"
        resizeMode = "contain"
        />
    </TouchableOpacity>
  )
}

export default Friends
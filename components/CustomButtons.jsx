import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      className={`bg-blue-500 rounded-xl min-h-[50px] min-w-[150px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
    >
      <Text
        className={`font-rregular text-lg ${textStyles}`}>
        {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signin = () => {
  return (
    <View>
      <Link href = "home" className = "mt-20 text-2xl">Login</Link>
    </View>
  )
}

export default signin
import { View, Text, Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router';

import { icons } from '../../constants';
const TabIcon = ({ icon, color, name, focused }) => {
return (
    <View className ="items-center justify-center gap-1">
        <Image
        source={icon}
        resizeMode="contain"
        tintColor = {color}
        className="w-6 h-6"
        />
        <Text className={`${focused ? 'font-rregular' : 
            'font-rregular'} text-xs`} style={{color: color}}>
            {name}
        </Text>
    </View>
)

}

const TabsLayout = () => {
  return (
   <>
   <Tabs
   screenOptions={{
    tabBarShowLabel: false,
    tabBarActiveTintColor: 'lightblue',
    tabBarInactiveTintColor: '#CDCDE0',
    tabBarStyle: {
        backgroundColor: '#161622',
        borderTopWidth: 1,
        borderTopColor: '#232533',
        height: 72,
    }
   }}
   >
    <Tabs.Screen 
    name="home"
    options={{
        title: 'Home',
         headerShown: false,
         tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
            />
            
         )
    }}
    />

<Tabs.Screen 
    name="bookmark"
    options={{
        title: 'Message',
         headerShown: false,
         tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.bookmark}
            color={color}
            name="Message"
            focused={focused}
            />
            
         )
    }}
    />

<Tabs.Screen 
    name="create"
    options={{
        title: 'Add friend',
         headerShown: false,
         tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.plus}
            color={color}
            name="Add friend"
            focused={focused}
            />
            
         )
    }}
    />

<Tabs.Screen 
    name="profile"
    options={{
        title: 'User',
         headerShown: false,
         tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.user}
            color={color}
            name="User"
            focused={focused}
            />
            
         )
    }}
    />

   </Tabs>
   </>
  )
}

export default TabsLayout

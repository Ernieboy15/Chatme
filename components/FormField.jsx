import { View, Text, TextInput } from 'react-native'
import React, {useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '../constants'
import { Image } from 'react-native';


const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setshowpPassword] = useState(false)

  return (
    <View className={'space-y-2 ${otherStyles}'}>
      <Text className="text-base text-black-100 font-rblack">{title}</Text>

       <View className="border-2 border-black  w-full h-16 px-10 bg-white rounded-2xl focus:border-blue-500 items-center flex-row">
         <TextInput
          className="flex-1 text-black font-rregular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
/>
        {title === 'Password' && (
        <TouchableOpacity onPress={() => setshowpPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eye} className="w-7 h-6"
            resizeMode='conatain'/>
        </TouchableOpacity>
       )}

       </View>



    </View>
  )
}

export default FormField
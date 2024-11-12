import { View, Text, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'
import CustomButton from '../../components/CustomButtons'

const SignIn = () => {
  const [form, setform] = useState({
    email:'',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit =() => {

  }

  return (
    <SafeAreaView className="bg-blue-100 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          <Image source={images.chat}
            resizeMode="contain"
            className="w-[300px] h-[50px] mt-7"
          />
          <Text className="text-2xl text-black mb-7 mt-3 font-rregular">Log in to Chat Me</Text>

          <FormField
           title="Email"
           value={form.email}
           handleChangeText={(e) => setform({...form,
            email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField
           title="Password"
           value={form.password}
           handleChangeText={(e) => setform({...form,
            password: e })}
            otherStyles="mt-7"
            keyboardType="password-address"
            />

            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-black font-rregular">
                Don't have an account?
              </Text>
              <Link href="/sign-up" className="text-lg font-rblack text-blue-600">Sign Up</Link>

            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

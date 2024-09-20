import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import { router } from 'expo-router'

type Props = {}

const Search = (props: Props) => {
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <View className="flex-row px-5 pt-10 items-center gap-2">
          <TextInput className="bg-white flex-1 py-3 px-4 rounded-full" />
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="font-medium text-md text-gray-800">Đóng</Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default Search

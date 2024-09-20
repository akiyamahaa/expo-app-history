import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ISampleData } from '@/data/data'
import { router } from 'expo-router'

type Props = {
  item: ISampleData
}

const Card = ({ item }: Props) => {
  return (
    <TouchableOpacity onPress={() => router.push('/detail')}>
      <View className="flex-row items-center space-x-3">
        <View>
          <Image source={item.image} resizeMode="cover" className="w-32 h-32 rounded-xl" />
        </View>
        <View className="flex-1 space-y-2">
          <Text className="text-primary-500 text-xs">{item.title}</Text>
          <Text className="text-base text-gray-800 font-medium leading-5">{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card

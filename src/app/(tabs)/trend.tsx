import { ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import HeaderTool from '@/components/HeaderTool'
import ScreenWrapper from '@/components/ScreenWrapper'
import ListCard from '@/components/ListCard'
import { sampleData } from '@/data/data'

const Trend = () => {
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <HeaderTool />
        <View className="p-5 gap-4">
          <Text className="font-semibold text-3xl text-gray-800">Xu hướng</Text>
          <View>
            <ListCard items={sampleData} />
          </View>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default Trend

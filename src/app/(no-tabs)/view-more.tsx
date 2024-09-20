import { ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import HeaderTool from '@/components/HeaderTool'
import ListCard from '@/components/ListCard'
import { sampleData } from '@/data/data'

type Props = {}

const ViewMore = (props: Props) => {
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <HeaderTool hasBack={true} />
        <View className="p-5 gap-4">
          <Text className="font-semibold text-3xl text-gray-800">Triều đại Ngô</Text>
          <View>
            <ListCard items={sampleData} />
          </View>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default ViewMore

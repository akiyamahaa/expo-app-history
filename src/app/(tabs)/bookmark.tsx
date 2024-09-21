import { ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import HeaderTool from '@/components/HeaderTool'
import ScreenWrapper from '@/components/ScreenWrapper'
import ListCard from '@/components/ListCard'
import { getRandomArray } from '@/utils/common'
import { allPosts } from '@/data/data'

const Bookmark = () => {
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <HeaderTool />
        <View className="p-5 gap-4">
          <Text className="font-semibold text-3xl text-gray-800">Bài viết đã lưu</Text>
          <View>
            <ListCard items={getRandomArray(allPosts, 2)} />
          </View>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default Bookmark

import { ImageBackground, ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { slideData } from '@/data/slide'
import SlideImage from '@/components/slider'
import { images } from '@/constants'
import ListTimeLine from '@/components/ListTimeLine'
import ListCard from '@/components/ListCard'
import { sampleData } from '@/data/data'
import HeaderTool from '@/components/HeaderTool'

const Home = () => {
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScrollView className="flex-1">
        <ScreenWrapper>
          <View className="space-y-4">
            {/* Toolbar */}
            <HeaderTool />
            {/* Trending */}
            <View className="px-5 ">
              <Text className="font-semibold text-3xl text-gray-800">Xu hướng</Text>
            </View>
            {/* Slideshow */}
            <View className="">
              <SlideImage itemList={slideData} />
            </View>
            {/* News */}
            <View className="px-5">
              {/* New Suggestion */}
              <View className="gap-4">
                <View className="flex-row justify-between items-center">
                  <Text className="font-semibold text-[20px] text-gray-800">Gợi ý cho bạn</Text>
                </View>
                <View>
                  <ListCard items={sampleData} />
                </View>
              </View>
              {/* Timeline */}
              <View className="mt-8">
                <ListTimeLine title="Triều đại ngô" start={939} end={965} items={sampleData} />
                <ListTimeLine title="Triều đình" start={968} end={980} items={sampleData} />
              </View>
            </View>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </ImageBackground>
  )
}

export default Home

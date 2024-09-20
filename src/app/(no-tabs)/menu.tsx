import { ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import IconButton from '@/components/IconButton'
import { ArrowLeft } from 'iconsax-react-native'
import { router } from 'expo-router'
import MenuCard from '@/components/MenuCard'

type Props = {}

const Menu = ({}: Props) => {
  const backPress = () => {
    router.back()
  }
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <View className="px-5 space-y-4">
          <IconButton IconName={ArrowLeft} onPress={backPress} />
          <View>
            <Text className="font-semibold text-3xl text-gray-800">Chuyên mục</Text>
            <View className="flex-row flex-wrap">
              <View className="w-1/2 p-2">
                <MenuCard imageSource={images.menu1} title="Triều đại Ngô" />
              </View>
              <View className="w-1/2 p-2">
                <MenuCard imageSource={images.slide1} title="Triều đình" />
              </View>
              <View className="w-1/2 p-2">
                <MenuCard imageSource={images.slide2} title="Hải Triều" />
              </View>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default Menu

import { ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import IconButton from '@/components/IconButton'
import { ArrowLeft, Bookmark } from 'iconsax-react-native'
import { router } from 'expo-router'

type Props = {}

const detail = ({}: Props) => {
  const handleBookMark = () => {}
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <StatusBar barStyle={'light-content'} />
      <ImageBackground source={images.detail} className="w-full h-96">
        <ScreenWrapper>
          <View className="flex-col justify-between h-full py-4">
            <View className="flex-row items-center justify-between px-5">
              <IconButton
                IconName={ArrowLeft}
                bg="bg-white-lighter"
                onPress={() => router.back()}
              />
              <IconButton IconName={Bookmark} bg="bg-white-lighter" onPress={handleBookMark} />
            </View>
            <View className="flex-col items-start p-5">
              <View className="bg-primary-500 py-1 px-2 rounded-3xl">
                <Text className="text-gray-200 text-xs capitalize">{'Triều Đình'}</Text>
              </View>
              <Text
                className="text-white font-medium text-lg"
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, itaque expedita?
                Commodi est soluta laborum nisi ducimus, sequi dolores culpa amet tempore, beatae
                quam pariatur eveniet quae corporis sapiente temporibus!
              </Text>
            </View>
          </View>
        </ScreenWrapper>
      </ImageBackground>
      <ScrollView className="flex-1 px-5 py-6 bg-background-300 -mt-4 rounded-t-3xl">
        <Text className="font-semibold text-base text-gray-800">Lorem ipsum</Text>
        <Text className="font-normal text-md text-gray-800">
          Lorem ipsum dolor sit amet consectetur. Condimentum mattis netus amet a in a dictum
          rhoncus. Fames amet malesuada dui pellentesque nec leo aliquam. Dolor ac ultrices viverra
          ultricies gravida eu facilisis pellentesque vitae. Sagittis eu pellentesque vel faucibus
          est viverra at. Egestas dolor venenatis interdum etiam tempus cursus malesuada malesuada
          ut. Nibh aliquet turpis eget dictum. Sed imperdiet donec sed diam. Eu egestas eu bibendum
          neque eu urna morbi. Sed elementum posuere vel vel. Rhoncus laoreet amet amet tortor. Quis
          facilisis semper nunc ullamcorper rutrum vitae. At duis nunc at quam aenean lacus fames
          consectetur eros. Lacus ut pretium turpis massa. Amet vitae quis tellus dictum elementum
          dui sed in rhoncus. Ligula tortor morbi nullam quis. Eu duis tristique aliquam a. Mauris
          phasellus feugiat mauris cras vitae in. Sit ullamcorper aliquam vitae dictum erat.
          Ullamcorper mattis sit imperdiet dignissim nisl malesuada. Phasellus adipiscing est
          integer nec dictum magna tincidunt purus. Velit vitae faucibus nec ut. Aliquam at diam
          dignissim sodales nulla cras aliquam tortor. Blandit blandit eget urna aliquet augue et
          fusce tortor. Ut sagittis gravida nunc tincidunt gravida. Vestibulum integer habitant
          imperdiet ut aliquam donec lobortis. Dictumst consequat senectus nisl sapien. phasellus
          feugiat mauris cras vitae in. Sit ullamcorper aliquam vitae dictum erat. Ullamcorper
          mattis sit imperdiet dignissim nisl malesuada. Phasellus adipiscing est integer nec dictum
          magna tincidunt purus. Velit vitae faucibus nec ut. Aliquam at diam dignissim sodales
          nulla cras aliquam tortor. Blandit blandit eget urna aliquet augue et fusce tortor. Ut
          sagittis gravida nunc tincidunt gravida. Vestibulum integer habitant imperdiet ut aliquam
          donec lobortis. Dictumst consequat senectus nisl sapien.
        </Text>
        <View className="h-12" />
      </ScrollView>
    </ImageBackground>
  )
}

export default detail

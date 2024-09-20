import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ListCard from './ListCard'
import { ISampleData } from '@/data/data'
import { router } from 'expo-router'

type Props = {
  title: string
  start: number
  end: number
  items: ISampleData[]
}

const ListTimeLine = ({ title, start, end, items }: Props) => {
  return (
    <View className="flex-row gap-2 -mt-4">
      <View className="flex-col items-center pt-2">
        <View className="h-2.5 w-2.5 bg-primary-500 rounded-full" />
        <View className={`w-0.5 h-[350px] bg-primary-100`} />
      </View>
      <View className="flex-1 space-y-2">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold text-[20px] text-gray-800">{title}</Text>
          <TouchableOpacity onPress={() => router.push('/view-more')}>
            <Text className="font-medium text-sm text-primary-500">Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-normal text-md leading-5 text-gray-400">
            ({start} - {end})
          </Text>
        </View>
        <View>
          <ListCard items={items} />
        </View>
      </View>
    </View>
  )
}

export default ListTimeLine

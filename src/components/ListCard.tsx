import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { ISampleData, sampleData } from '@/data/data'
import Card from './Card'

type Props = {
  items: ISampleData[]
}

const ListCard = ({ items }: Props) => {
  return (
    <View className="space-y-4">
      {items.map((data) => (
        <View className="my-1" key={data.id}>
          <Card item={data} />
        </View>
      ))}
    </View>
  )
}

export default ListCard

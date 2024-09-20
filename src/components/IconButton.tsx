import { TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
  IconName: any
  onPress: () => void
  bg?: string
}

const IconButton = ({ IconName, onPress, bg = 'bg-white' }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`rounded-full ${bg} w-10 p-2.5 justify-center items-center`}>
        <IconName size="20" color={'#1f2937'} />
      </View>
    </TouchableOpacity>
  )
}

export default IconButton

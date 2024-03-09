import React, { FC } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import iconList, { IconTypes } from './icon-list'

interface Props {
  name: IconTypes
  size?: number
  color?: string
  style?: any
}

export const PIcon: FC<Props> = (props) => {
  //@ts-ignore
  const SVGComponent = iconList[props.name]

  if (!SVGComponent) {
    return <View style={props.style} />
  }

  return (
    <View style={props.style}>
      <SVGComponent
        fill={props.color || EStyleSheet.value('$colors.g900')}
        width={props.size || 18}
        height={props.size || 18}
      />
    </View>
  )
}

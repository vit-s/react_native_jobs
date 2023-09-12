import React                       from 'react'
import { View, Text }              from 'react-native'
import { TouchableOpacity, Image } from "react-native"

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          src={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ScreenHeaderBtn
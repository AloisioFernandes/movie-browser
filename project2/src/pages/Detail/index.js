import React from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

const Detail = () => {
  
  const navigation = useNavigation()
  const route = useRoute()

  const routeParams = route.params

}

export default Detail
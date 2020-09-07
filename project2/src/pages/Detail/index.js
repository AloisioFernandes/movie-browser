import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const Detail = () => {
  
  const navigation = useNavigation()
  const route = useRoute()

  const routeParams = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{routeParams.title}</Text>
      <ScrollView>
      <View style={styles.info}>
        <Image style={styles.poster} source={{ uri: routeParams.poster }} />
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  titulo: {
    color: '#fff',
    marginTop: 40,
    fontSize: 30
  },

  info: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  poster: {
    width: 288,
    height: 432,
    marginTop: 23,
    borderWidth: 15,
    borderColor: '#ddd',
    borderRadius: 8
  },
})

export default Detail
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { movie } from '../../mockData'

const Detail = () => {
  const [info, setInfo] = useState({})
  
  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params

  useEffect(() => { //normalmente essas informações seriam parâmetros de rota
    setInfo(movie)
  })

  function goBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={goBack}>
        <Feather name="arrow-left" size={35} color='#888' />
      </TouchableOpacity>

      <Text style={styles.titulo}>{routeParams.title}</Text>
      <ScrollView>
      <View style={styles.info}>
        <Image style={styles.poster} source={{ uri: routeParams.poster }} />
      </View>
      <Text style={styles.detail}>
        Ano: {routeParams.year}{'\n'}
        Duração: {movie.Runtime}{'\n'}
        Diretor: {movie.Director}{'\n'}
        Atores: {movie.Actors}{'\n'}
        Sinopse: {movie.Plot}
      </Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Feather name="play" size={26} color='crimson' />
          <Text style={styles.watch}>Assistir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name="list" size={26} color='#777' />
          <Text style={styles.list}>Adicionar à lista</Text>
        </TouchableOpacity>
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

  goBack: {
    marginTop: 30
  },

  titulo: {
    color: '#fff',
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
    marginBottom: 10,
    borderWidth: 15,
    borderColor: '#ddd',
    borderRadius: 8
  },

  detail: {
    color: '#ddd',
    fontSize: 18,
    padding: 10
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  watch: {
    color: 'crimson',
    fontSize: 18,
    padding: 10
  },

  list: {
    color: '#777',
    fontSize: 18,
    padding: 10
  }
})

export default Detail
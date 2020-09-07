import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

import { search } from '../../mockData'

const Home = () => {
  const [movie, setMovie] = useState('')
  const [resMovies, setResMovies] = useState([])
  const [results, setResults] = useState([])

  const navigation = useNavigation()

  useEffect(() => {
    setResMovies(search.Search)
  }, [])

  function handleSearch() {
    const res = resMovies.filter(film => {
      return film.Title.toLowerCase().includes(movie.trim().toLowerCase()) //verifica se existe algum filme com título que contenha palavra digitada na busca
    })
    setResults(res)
  }

  return (
    <View style={styles.pagina}>
      <Text style={styles.titulo}>HomePage</Text>
      <TextInput style={styles.busca} onChangeText={setMovie} />
      <TouchableOpacity style={styles.botao} onPress={handleSearch}>
        <Text style={styles.titulo}>Buscar</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.display}>
        {results.map(filme => {
          return (
            <View key={filme.Title} style={styles.cartaz}>
              <Image style={styles.logo} source={{ uri: filme.Poster }}/>
              <Text style={styles.titulo}>{filme.Title}</Text>
            </View>
          )
        })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#000'
  },

  busca: {
    backgroundColor: '#cecece',
    width: 240,
    borderRadius: 4,
    padding: 5
  },

  botao: {
    width: 80,
  },

  display: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  cartaz: {
    width: 104,
  },

  logo: {
    width: 84,
    height: 111
  },

  titulo: {
    color: '#fff'
  }
})

export default Home
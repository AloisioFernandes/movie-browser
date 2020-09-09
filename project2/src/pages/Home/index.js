import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
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

  function handleDetails(titulo, cartaz, ano) {
    navigation.navigate('Detail', { title: titulo, poster: cartaz, year: ano })
  }

  return (
    <View style={styles.pagina}>
      <Text style={styles.texto}>Movie Browser</Text>

      <View style={styles.pesquisa}>
        <TextInput style={styles.busca} onChangeText={setMovie} />
        <TouchableOpacity style={styles.botao} onPress={handleSearch}>
          <Feather name='search' size={36} color='#fff' />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.display}>
        {results.map(filme => {
          return (
            <TouchableOpacity 
              key={filme.Title} 
              style={styles.cartaz} 
              onPress={() => handleDetails(filme.Title, filme.Poster, filme.Year)}
            >
              <Image style={styles.logo} source={{ uri: filme.Poster }}/>
              <Text style={styles.titulo} numberOfLines={3} >{filme.Title}{'\n'}{'\n'}</Text>
            </TouchableOpacity>
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

  texto: {
    color: '#fff',
    fontSize: 28,
    marginTop: 25
  },

  pesquisa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12
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
    width: 94,
    alignItems: 'center',
    backgroundColor: '#aaa',
    margin: 12,
    borderRadius: 4
  },

  logo: {
    width: 84,
    height: 126,
    marginTop: 5
  },

  titulo: {
    color: '#fff',
    marginLeft: 5,
    padding: 2
  }
})

export default Home
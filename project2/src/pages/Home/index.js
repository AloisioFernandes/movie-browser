import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

import { search } from '../../mockData'

const Home = () => {
  const [movie, setMovie] = useState('')
  const [resMovies, setResMovies] = useState({})

  const navigation = useNavigation()

  useEffect(() => {
    setResMovies(JSON.parse(search.Search))
    console.log(resMovies)
  }, [])

  return (
    <View>
      <Text>HomePage</Text>
      <TextInput onChangeText={setMovie} />
      <Button title="Procurar" onPress={() => {}} />
    </View>
  )
}

export default Home
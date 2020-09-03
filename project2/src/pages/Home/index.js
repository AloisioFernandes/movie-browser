import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const [movie, setMovie] = useState('')
  const [resMovies, setResMovies] = useState({})

  const navigation = useNavigation()

  function handleSearch() {
    // data é o resultado da "chamada api mockdata"
    setResMovies(data)
  }

  return (
    <View>
      <Text>HomePage</Text>
      <TextInput onChangeText={setMovie} />
      <Button title="Procurar" onPress={handleSearch} />
    </View>
  )
}

export default Home
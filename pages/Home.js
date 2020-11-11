import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';

export default function Home() {
  const navigation = useNavigation();

  const [contador, setContador] = useState(0);
  function incrementar(){
    setContador(contador + 1);
  };

  return (
    <>
      <Header title="Header 123" />
      <Header title="Header 897" />
      <Header title="Header 000" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Form') }>
          <Text>
            Navegar
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Hello World!
        </Text>

        <Text>
          {contador} toques!
        </Text>

        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text>
              Press Here          
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474A51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Header from './Header';
import logo from './assets/people.png';

export default function Home() {
  return (
    <>
      <Header title="Cadastro" />
      <View style={styles.container}>
        <Image source={logo} style={styles.topImage} />
        <Text style={styles.title}>
          Preencha o formulário abaixo:
        </Text>
      </View>
    </>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474A51',
    alignItems: 'center',
  },
  topImage: {
    margin: 20,
  },
  title : {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
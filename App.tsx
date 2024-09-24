import { StatusBar, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import LottieView  from 'lottie-react-native'
import { useState } from 'react';

const mensagem = [
  'mensagem 1',
  'mensagem 2',
  'mensagem 3',
  'mensagem 4',
  'mensagem 5'
]



export default function App() {

  const [mensagemSelecionada, setMensagemSelecionada] = useState(' ')
  

  function exibitMensagem() {
    const numeroAleatorio = Math.floor(Math.random() * 5)
    setMensagemSelecionada(mensagem[numeroAleatorio])
    //mensagemSelecionado = mensagens[numeroAleatorio]
    // Alert.alert(mensagemSelecionado)
}


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Text>{mensagemSelecionada}</Text>

      <LottieView 
        autoPlay
        source={require('./assets/cookie.json')}
        style={{
          width: 200,
          height: 200
        }}
      />

      <Button onPress={exibitMensagem} title='Quebrar biscoito'/>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
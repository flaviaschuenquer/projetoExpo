import React from 'react';

import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const mostrarAlerta = mensagem => {
    const mensagemPercebida = mensagem;
    Alert.alert(mensagemRecebida);
  };

  return (
    <View>
      <SafeAreaView>
        <Text>Hello world!</Text>
        <TouchableOpacity onPress={() => mostrarAlerta('Teste')}>
          <Text>Pressione aqui</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default App;

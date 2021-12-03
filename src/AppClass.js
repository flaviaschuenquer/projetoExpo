import React from 'react';

import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

/*

import React from 'react';

import {Alert, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const mostrarAlerta = mensagem => {
    const mensagemRercebida = mensagem;
    Alert.alert(mensagemRecebida);
  };
  return (
    <View>
      <Text>Olá Mundo!</Text>
      <TouchableOpacity onPress={() => mostrarAlerta('Teste')}>
        <Text>Pressionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

*/

const frases = ['Bom dia!', 'Boa tarde!', 'Boa noite!'];

class FrasesAleatorias extends Component {
  constructor() {
    super();
    this.state = {
      frase: 'Bom dia',
    };
  }

  trocarFrase = () =>
    this.setState({frase: frases[Math.floor(Math.random() * frases.length)]});
  render() {
    return (
      <View>
        <Text style={{fontSize: 50}}>{this.state.frase}</Text>
        <TouchableOpacity onPress={() => history.trocarFrase()}>
          <Text style={{fontSize: 30}}>Pressionar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return <FrasesAleatorias />;
  }
}

/*
useEffect(() => {
  const id = setInterval(() => {
    console.log('test');
  }, 1000);

  return () => clearInterval(id); //limpar o setInterval quando o componente desmontar
}, [count]);

*/

export default App;

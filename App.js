import React from 'react';

import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

/*const App = () => {
  const mostrarAlerta = mensagem => {
    const mensagemPercebida = mensagem;
    Alert.alert(mensagemRecebida);
  };
  return (
    <View>
      <SafeAreaView>
        <Text>Meu app</Text>
        <TouchableOpacity
          onPress={() => mostrarAlerta('Teste')}></TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
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

export default App;

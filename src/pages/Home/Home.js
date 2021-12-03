import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.titulo}>Oi</Text>
          <Text style={styles.titulo}>Ufa!</Text>
        </View>
        <View>
          <Text style={styles.titulo}>Estou indo bem!</Text>
        </View>
        <Text style={styles.titulo}>Ah moleque!</Text>
      </View>
      <View style={{flex: 0.8}}>
        <Text style={styles.titulo}>Hehehe!</Text>
      </View>
      <View style={{flex: 0.3, backgroundColor: 'green'}}>
        <Text style={styles.titulo}>Muito top!</Text>
      </View>
    </>
  );
};

/* Estilização direto no código, mas não é legal. É melhor fazer o stylesheet
const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50, fontWeight: '600', color: 'violet'}}>
        Home
      </Text>
    </View>
  );
};

*/

export default Home;

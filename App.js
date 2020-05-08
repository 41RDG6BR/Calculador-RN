/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View
} from 'react-native';
import Topo from './src/components/Topo'
import Resultado from './src/components/Resultado'
import Painel from './src/components/Painel'

class App extends React.Component {
  render(){
    return (
       <View>
        <Topo />
        <Resultado />
        <Painel />
      </View>
    );
  }
};

export default App;

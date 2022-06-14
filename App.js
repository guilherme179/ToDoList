import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import cores from './Cores';
import dadosTemp from './dadosTemp';
import TodoList from './componentes/TodoList';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
          <View style={styles.divisor} />
          <Text style={styles.titulo}>
            ToDo <Text style={{fontWeight: "300", color: cores.azul}}>Lists</Text>
          </Text>
          <View style={styles.divisor} />
        </View>

        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addLista}>
            <AntDesign name='plus' size={16} color={cores.azul}/>
          </TouchableOpacity>

          <Text style={styles.add}>Add Lista</Text>
        </View>

        <View style={{height: 275,  paddingLeft: 32, alignSelf: 'center'}}>
          <FlatList 
            data={dadosTemp} 
            keyExtractor={item => item.name} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            renderItem={({item}) => (<TodoList list={item}/>)}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  divisor: {
    backgroundColor: cores.azulClaro,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  titulo: {
    fontSize: 38,
    fontWeight: "800",
    color: cores.preto,
    paddingHorizontal: 64
  },
  addLista: {
    borderWidth: 2,
    borderColor: cores.azulClaro,
    alignSelf: 'center',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    color: cores.preto,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
    alignSelf: 'center',
  }
});
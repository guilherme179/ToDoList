import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, Button, FlatList } from "react-native";

import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const Lista = (props) => {  
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(props.itens)}</Text>
      <FlatList
        data={props.itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemLista) => {
          return (
             <Card>
              <Card.Content>
                <Title>Nome: {itemLista.item.text}</Title>
                <Paragraph>Valor: {itemLista.item.number}</Paragraph>
              </Card.Content>
            </Card>
          )
        }}     
      />
    </SafeAreaView>
  );
};

function renderItem(name, value) {
  return (
    <Card>
      <Card.Content>
        <Title>Nome: {name}</Title>
        <Paragraph>Valor: {value}</Paragraph>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Lista;
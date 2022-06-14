import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import cores from "../Cores";
import {AntDesign} from '@expo/vector-icons';
import dadosTemp from "../dadosTemp";

export default class AddListModal extends React.Component {

    backgroundColors = ["#24A6D9", "#5CD859", "#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"]

    state = {
        name: '',
        color: this.backgroundColors[0]
    }

    createTodo = () => {
        const {name, color} = this.state

        dadosTemp.push({
            name,
            color,
            todos: []
        });

        this.setState({nme : ''});
        this.props.closeModal();
    }

    renderColors(){
        return this.backgroundColors.map(color => {
            return(
                <TouchableOpacity 
                    key={color}
                    style={[styles.seletorCor, {backgroundColor: color}]}
                    onPress={() => this.setState({color})}
                />
            )
        })
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding"> 
                <TouchableOpacity style={{position: 'absolute', top: 64, right: 32}} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} color={cores.preto} />
                </TouchableOpacity>

                <View style={{alignSelf: "stretch", marginHorizontal: 32}}> 
                    <Text style={styles.title}>Criar Todo List</Text>

                    <TextInput style={styles.input} placeholder="Nome da lista" onChangeText={text => this.setState({name : text})}/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
                        {this.renderColors()}
                    </View>

                    <TouchableOpacity style={[styles.criar, {backgroundColor: this.state.color}]} onPress={this.createTodo}>
                        <Text style={{ color: cores.branco, fontWeight: '600'}}>Criar!</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: cores.preto,
        alignSelf: 'center',
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: cores.azul,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    criar: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    seletorCor:{
        width: 30,
        height: 30,
        borderRadius: 4
    }
});
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import cores from "../Cores";

const TodoList = ({list}) => {
    const qtdCompletos = list.todos.filter(todo => todo.completed).length;
    const qtdRestantes = list.todos.length - qtdCompletos;

    return (
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.count}>{qtdRestantes}</Text>
                    <Text style={styles.subtitle}>Restantes</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.count}>{qtdCompletos}</Text>
                    <Text style={styles.subtitle}>Completos</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: cores.branco,
        marginBottom: 18
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: cores.branco
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: cores.branco
    }
})

export default TodoList;
import { Link } from 'expo-router';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

const categorias = [
    { id: '1', nome: 'Sobremesas' },
    { id: '2', nome: 'Massas' },
    { id: '3', nome: 'Carnes' },
    { id: '4', nome: 'Vegetarianas' },
    { id: '5', nome: 'Bebidas' },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias de Receitas</Text>
            <FlatList
                data={categorias}
                renderItem={({ item }) => (
                    <Link href={`/receitas/${item.nome}`} asChild>
                        <Pressable style={styles.categoryItem}>
                            <Text style={styles.categoryText}>{item.nome}</Text>
                        </Pressable>
                    </Link>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    categoryItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    categoryText: {
        fontSize: 18,
    },
});
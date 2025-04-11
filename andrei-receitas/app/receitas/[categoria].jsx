import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

const receitasData = {
    Sobremesas: [
        { id: '1', nome: 'Pudim de Leite', tempo: '1h' },
        { id: '2', nome: 'Bolo de Chocolate', tempo: '45min' },
    ],
    Massas: [
        { id: '3', nome: 'Espaguete Carbonara', tempo: '30min' },
        { id: '4', nome: 'Lasanha', tempo: '1h30min' },
    ],
};

export default function ReceitasPorCategoria() {
    const { categoria } = useLocalSearchParams();
    const receitas = receitasData[categoria] || [];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Receitas de {categoria}</Text>
            <FlatList
                data={receitas}
                renderItem={({ item }) => (
                    <Link href={`/receita/${item.id}`} asChild>
                        <Pressable style={styles.receitaItem}>
                            <Text style={styles.receitaNome}>{item.nome}</Text>
                            <Text style={styles.receitaTempo}>{item.tempo}</Text>
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
    receitaItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    receitaNome: {
        fontSize: 18,
    },
    receitaTempo: {
        fontSize: 16,
        color: '#666',
    },
});
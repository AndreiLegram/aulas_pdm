import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';

const receitasFavoritas = [
    { id: '1', nome: 'Pudim de Leite', categoria: 'Sobremesas' },
    { id: '2', nome: 'Bolo de Chocolate', categoria: 'Sobremesas' },
];

export default function FavoritesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>
            {receitasFavoritas.length === 0 ? (
                <Text style={styles.emptyText}>Nenhuma receita favoritada ainda.</Text>
            ) : (
                <FlatList
                    data={receitasFavoritas}
                    renderItem={({ item }) => (
                        <Link href={`/receita/${item.id}`} asChild>
                            <View style={styles.favoriteItem}>
                                <Text style={styles.favoriteName}>{item.nome}</Text>
                                <Text style={styles.favoriteCategory}>{item.categoria}</Text>
                            </View>
                        </Link>
                    )}
                    keyExtractor={(item) => item.id}
                />
            )}
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
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
    },
    favoriteItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    favoriteName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    favoriteCategory: {
        fontSize: 14,
        color: '#666',
    },
});
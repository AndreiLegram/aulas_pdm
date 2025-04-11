import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

const receitasDetalhes = {
    '1': {
        nome: 'Pudim de Leite',
        ingredientes: ['1 lata de leite condensado', '1 lata de leite', '3 ovos', '1 xícara de açúcar'],
        preparo: 'Misture todos os ingredientes e leve ao forno em banho-maria.',
        favorito: true,
    },
    '2': {
        nome: 'Bolo de Chocolate',
        ingredientes: ['2 xícaras de farinha', '1 xícara de açúcar', '1/2 xícara de cacau', '3 ovos'],
        preparo: 'Misture tudo e asse por 40 minutos.',
        favorito: true,
    },
    '3': {
        nome: 'Espaguete Carbonara',
        ingredientes: ['Muita fé'],
        preparo: 'Reze ajoelhado e peça encarecidamente.',
        favorito: false,
    },
    '4': {
        nome: 'Lasanha',
        ingredientes: ['Muito amor'],
        preparo: 'Aguarde com paciência.',
        favorito: false,
    },
};

export default function DetalhesReceita() {
    const { id } = useLocalSearchParams();
    const [receita, setReceita] = useState(receitasDetalhes[id]);

    const toggleFavorito = () => {
        setReceita({
            ...receita,
            favorito: !receita.favorito,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{receita.nome}</Text>

            <Text style={styles.sectionTitle}>Ingredientes:</Text>
            {receita.ingredientes.map((ingrediente, index) => (
                <Text key={index} style={styles.ingrediente}>• {ingrediente}</Text>
            ))}

            <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
            <Text style={styles.preparo}>{receita.preparo}</Text>

            <Button
                title={receita.favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                onPress={toggleFavorito}
                color={receita.favorito ? 'red' : 'blue'}
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
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
    ingrediente: {
        fontSize: 16,
        marginLeft: 8,
        marginBottom: 4,
    },
    preparo: {
        fontSize: 16,
        marginBottom: 20,
    },
});
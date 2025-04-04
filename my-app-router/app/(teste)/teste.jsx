import { Text, View, Button } from "react-native"
import { useRouter } from "expo-router";

const App = () => {
    const router = useRouter()

    return (
        <View>
            <Text>Teste</Text>
            <Button title='Voltar' onPress={() => router.navigate('/')} />
        </View>
    )
}

export default App

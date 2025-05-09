import {View, Text, Button} from 'react-native'
import { useRouter } from 'expo-router'

import { useAsyncStorage } from '../hooks/useAsyncStorage'

const App = () => {
    const router = useRouter()

    const [nome, setNome, remove, loading] = useAsyncStorage('nome')

    return (
        <View>
            <Text>{loading ? 'Aguarde':''}</Text>
            <Text>Nome: {nome}</Text>
            <Button title="Troca nome"
            onPress={() => setNome('Ouaaaaatro')}
            />
            <Button title="Remover"
            onPress={() => remove()}
            />
            <Button title='Teste' 
            onPress={() => router.navigate('/teste')}
            />
             <Button title='Categorias' 
            onPress={() => router.navigate('/categories')}
            />
        </View>
    )
}

export default App
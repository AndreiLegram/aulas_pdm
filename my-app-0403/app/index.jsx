import {View, Text, Button} from 'react-native'
import { useRouter } from 'expo-router'

const App = () => {
    const router = useRouter()

    return (
        <View>
            <Text>Hello World!</Text>
            <Button title='Teste' 
            onPress={() => router.navigate('/teste')}
            />
        </View>
    )
}

export default App
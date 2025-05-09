import {useState} from 'react'
import {View, Text, Button} from 'react-native'
import { useRouter } from 'expo-router'

import { useAsyncStorage } from '../../hooks/useAsyncStorage'

const App = () => {
    const router = useRouter()
    const [nome] = useAsyncStorage('nome')

    return (
        <View>
            <Text>Nome: {nome}</Text>
            <Button title='VOltar'
            onPress={()=>router.navigate('/')}/>
        </View>
    )
}

export default App
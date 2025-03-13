import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, FlatList, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [nome, setNome] = useState('') 
  const [itens, setItens] = useState([])

  //const comprados = itens.filter(item => item.comprado).length
  const comprados = itens.reduce((prev, atual)=>prev + (atual.comprado ? 1:0), 0)

console.log(itens)

  const add = () => setItens(prev => [...prev, {nome, comprado: false}])

  const toggle = (i) => setItens(prev => prev.map((item, index) => (
    index !== i ? item : {...item, comprado: !item.comprado}
  )))
   

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <Button onPress={add} title='Adicionar'/>
      </View>

      <FlatList
        data={itens}
        renderItem={({item, index}) => {
          return (
          <View style={styles.group}>
            <Text style={[{color:'blue'}, {fontSize: 20}]}>
              {item.nome}
            </Text>
            <Button onPress={() => toggle(index)} title={item.comprado?'Comprado': 'Não comprado'}/>
          </View>
          )
        }
          
        }
      />
      <Text>Situação {comprados} / {itens.length} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {flexDirection: 'row'},
  group: {borderWidth:1, flexDirection: 'row', gap: 10},
  input: {borderWidth: 1, height: 50, padding: 15},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
  const [n, setN] = useState(0)

  const podeZerar = n != 0
  const podeDecrementar = n > 0
  const podeIncrementar = n < 10

  const zerar = () => podeZerar && setN(0)
  const decrementar = () => n > 0 && setN(n - 1)
  const incrementar = () => n < 10 && setN((prev) => prev + 1)

  
  return (
    <View style={styles.container}>
      <Text>Contador de cliques: {n}</Text>
      <View style={styles.group}>
        <Button disabled={!podeDecrementar} title='Decrementar' onPress={decrementar}/>
        <Button disabled={!podeZerar} title='Zerar' onPress={zerar}/>
        <Button disabled={!podeIncrementar} title='Incrementar' onPress={incrementar}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row'
  },
  texto: {
    color: 'red',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

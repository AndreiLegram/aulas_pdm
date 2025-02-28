import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [n, setN] = useState(0)

  const podeZerar = n != 0
  const podeDecrementar = n > 0
  const podeIncrementar = n < 10

  const zerar = () => podeZerar && setN(0)
  const decrementar = () => podeDecrementar && setN(n-1)
  const incrementar = () => podeIncrementar && setN(n+1)

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador de cliques: {n}</Text>
      <View style={styles.buttonGroup}>
        <Button disabled={!podeZerar} title='Zerar' onPress={zerar} />
        <Button disabled={!podeDecrementar} title='Decrementar' onPress={decrementar} />
        <Button disabled={!podeIncrementar} title='Incrementar' onPress={incrementar} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: 'red',
    fontWeight: 900,
    fontFamily: 'arial',
    fontSize: 20
  },
  buttonGroup: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

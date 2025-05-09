import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App1() {
  const [userName, setUserName] = useState('Usuário');
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleChangeName = () => {
    if (newName.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira um nome válido.');
      return;
    }
    setUserName(newName);
    setIsEditing(false);
    setNewName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo, {userName}!</Text>

      {isEditing ? (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={newName}
            onChangeText={setNewName}
          />
          <Button title="Salvar" onPress={handleChangeName} />
        </View>
      ) : (
        <Button title="Alterar Nome" onPress={() => setIsEditing(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  editContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

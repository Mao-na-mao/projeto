import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'


function TelaForget({ navigation }) {

  const [email, setEmail] = useState('');

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Email inválido');
    } else {
      alert('Iremos enviar um link para recuperação de senha no seu e-mail.');
      (navigation.navigate("TelaInicio"));
    }
  };

  return (
    <View style={styles.area}>
      <Image style={styles.imagem} source={{ uri: 'https://i.imgur.com/atd8y6u.png' }} />

      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="E-mail"
        style={styles.caixaInput}
        placeholderTextColor="gray"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}> Recuperar Senha </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('TelaInicio')}>
        <Text style={styles.textoBotao}> Voltar </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaForget;
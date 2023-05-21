import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { useState, useRef } from 'react'
import styles from '../styles/styles'



function TelaLogin2({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  const handleSubmit = () => {

    const senha = (password);
    if (username === 'solidarize' && senha === '123') {
      (navigation.navigate("TelaLista1"));
    } else {
      alert('Usuário ou senha inválidos.');
    }


    usernameRef.current.clear();
    passwordRef.current.clear();
    setUsername('');
    setPassword('');
  };

  return (

    <View style={styles.area}>


      <Image style={styles.imagem}
        source={{ uri: 'https://i.imgur.com/atd8y6u.png' }}
      />

      <TextInput
        ref={usernameRef}
        onChangeText={handleUsernameChange}
        value={username}
        placeholder="Usuário"
        style={styles.caixaInput}
        placeholderTextColor="gray"
      />

      <TextInput
        ref={passwordRef}
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry={true}
        placeholder="Senha"
        style={styles.caixaInput}
        placeholderTextColor="gray"
      />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}> Entrar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoForget} onPress={() => (navigation.navigate("TelaForget"))}>
        <Text style={styles.textoBotaoForget}> Esqueci minha senha </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => (navigation.navigate("TelaInicio"))}>
        <Text style={styles.textoBotao}> Voltar </Text>
      </TouchableOpacity>

    </View>

  );
}

export default TelaLogin2;
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { useState, useRef } from 'react'
import styles from '../styles/styles'



function TelaSignin2({ navigation }) {

      const [password2, setPassword2] = useState('');
      const [password, setPassword] = useState('');
      const password2Ref = useRef(null);
      const passwordRef = useRef(null);

      const handlePassword2Change = (newPassword2) => {
            setPassword2(newPassword2);
      };
      const handlePasswordChange = (newPassword) => {
            setPassword(newPassword);
      };
      const handleSubmit = () => {

            const senha = (password);
            if (password === '') {
                  alert('A senha não pode ser vazia, tente novamente!');
            }
            else if (password2 === password) {
                  (navigation.navigate("TelaInicio"));
                  alert('Orientações serão enviadas ao seu e-mail para prosseguir.');
            }
            else {
                  alert('As senhas não são iguais, tente novamente!');
            }


            password2Ref.current.clear();
            passwordRef.current.clear();
            setPassword2('');
            setPassword('');
      };

      return (

            <View style={styles.area}>

                  <Image style={styles.imagem3}
                        source={{ uri: 'https://i.imgur.com/atd8y6u.png' }}
                  />

                  <TextInput
                        placeholder="Nome Completo"
                        style={styles.caixaInput2}
                        placeholderTextColor="gray"
                  />

                  <TextInput
                        placeholder="CPF"
                        inputType="date"
                        style={styles.caixaInput2}
                        placeholderTextColor="gray"
                  />

                  <TextInput
                        placeholder="Número de Telefone"
                        inputType="number"
                        style={styles.caixaInput2}
                        placeholderTextColor="gray"
                  />

                  <TextInput
                        placeholder="E-mail"
                        style={styles.caixaInput2}
                        placeholderTextColor="gray"
                  />

                  <TextInput
                        ref={passwordRef}
                        onChangeText={handlePasswordChange}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Senha"
                        style={styles.caixaInput2}
                        placeholderTextColor="gray"
                  />

                  <TextInput
                        ref={password2Ref}
                        onChangeText={handlePassword2Change}
                        value={password2}
                        secureTextEntry={true}
                        placeholder="Confirmar Senha"
                        style={styles.caixaInput2}
                        placeholderTextColor="gray"
                  />

                  <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
                        <Text style={styles.textoBotao}> Entrar </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botaoVoltar} onPress={() => (navigation.navigate("TelaSignin"))}>
                        <Text style={styles.textoBotao}> Voltar </Text>
                  </TouchableOpacity>

            </View>

      );

}

export default TelaSignin2;
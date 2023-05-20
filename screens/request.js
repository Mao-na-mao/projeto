import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native'
import {useState, useRef} from 'react'
import styles from '../styles/styles'



function TelaRequest({ navigation }) {

  const [quemSomos, setQuemSomos] = useState('');
  const [oQuePrecisamos, setOQuePrecisamos] = useState('');
  const [ondeEstamos, setOndeEstamos] = useState('');
  const [sobreProjeto, setSobreProjeto] = useState('');

  const handleSubmit = () => {
    if (!quemSomos || !oQuePrecisamos || !ondeEstamos || !sobreProjeto) {
      alert('Preencha todos os campos.');
    } else {
      alert('Requisição recebida, mandaremos mais informações por e-mail.');
      navigation.navigate('TelaLista1');
    }
  };

  return (

    <View style={styles.area}>

      <Image
        style={styles.imagem3}
        source={{ uri: 'https://i.imgur.com/atd8y6u.png' }}
      />

      <TextInput
        multiline={true}
        placeholder="QUEM SOMOS?"
        style={styles.caixaInput3}
        placeholderTextColor="gray"
        value={quemSomos}
        onChangeText={setQuemSomos}
      />

      <TextInput
        multiline={true}
        placeholder="O QUE PRECISAMOS?"
        style={styles.caixaInput3}
        placeholderTextColor="gray"
        value={oQuePrecisamos}
        onChangeText={setOQuePrecisamos}
      />

      <TextInput
        multiline={true}
        placeholder="ONDE ESTAMOS?"
        style={styles.caixaInput3}
        placeholderTextColor="gray"
        value={ondeEstamos}
        onChangeText={setOndeEstamos}
      />

      <TextInput
        multiline={true}
        placeholder="SOBRE O PROJETO"
        style={styles.caixaInput3}
        placeholderTextColor="gray"
        value={sobreProjeto}
        onChangeText={setSobreProjeto}
      />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}>Pedir Projeto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate('TelaLista1')}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>

    </View>
    
  );
}

export default TelaRequest;
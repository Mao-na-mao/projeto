import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from '../styles/styles';

function TelaLista2({ navigation }) {
  const [mostrarONGs, setMostrarONGs] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  const ongData = [
    { nome: 'ONG 1', descricao: 'Descrição da ONG 1' },
    { nome: 'ONG 2', descricao: 'Descrição da ONG 2' },
    { nome: 'ONG 3', descricao: 'Descrição da ONG 3' },
  ];

  const projetoData = [
    { nome: 'Projeto Solidarize', descricao: 'Precisamos de ajuda!' },
  ];

  const handleInputChange = (event) => {
    setPesquisa(event.target.value);
  };

  const lista = mostrarONGs ? projetoData : ongData;

  const filtrado = lista.filter((item) => {
    return item.nome.toLowerCase().includes(pesquisa.toLowerCase());
  });

  return (
    <View style={styles.container}>

      <View style={styles.buttonsContainer}>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Projetos</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.searchContainer}>

        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          value={pesquisa}
          onChangeText={setPesquisa}
        />

      </View>

      <View style={styles.listContainer}>

        {filtrado.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.itemTitle}>{item.nome}</Text>
          <Text style={styles.itemDescription}>{item.descricao}</Text>


          <TouchableOpacity
          style={styles.buttonAbout}
          onPress={()=> (navigation.navigate ("TelaProjeto"))}>
          <Text style={styles.buttonText}> Ver mais </Text>
        </TouchableOpacity>

      </View>

        ))}

    </View>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate('TelaInicio')}>
        <Text style={styles.textoBotao}> Sair </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaLista2;

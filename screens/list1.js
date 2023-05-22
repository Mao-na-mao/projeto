import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from '../styles/styles';

function TelaLista1({ navigation }) {
  const [mostrarONGs, setMostrarONGs] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  const ongData = [
    { nome: 'Projeto Solidarize', descricao: 'Em andamento' },
    { nome: 'Projeto Psicólogos para Todos', descricao: 'Concluído' },
    { nome: 'Projeto C.R.I.A.', descricao: 'Concluído' },
  ];

  const projetoData = [
    { nome: 'Projeto Solidarize', descricao: 'Precisamos de ajuda!' },
    { nome: 'Projeto 2', descricao: 'Descrição do Projeto 2' },
    { nome: 'Projeto 3', descricao: 'Descrição do Projeto 3' },
  ];

  const handleInputChange = (event) => {
    setPesquisa(event.target.value);
  };

  const lista = mostrarONGs ? ongData : projetoData;

  const filtrado = lista.filter((item) => {
    return item.nome.toLowerCase().includes(pesquisa.toLowerCase());
  });

  return (

    <View style={styles.container}>

      <View style={styles.buttonsContainer}>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}> Meus Projetos </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.listContainer}>

        {filtrado.map((item, index) => (
          <View style={styles.item} key={index}>

            <Text style={styles.itemTitle}>{item.nome}</Text>
            <Text style={styles.itemDescription}>{item.descricao}</Text>

          </View>

        ))}
        
      </View>


      <TouchableOpacity
        style={styles.botao4}
        onPress={() => navigation.navigate('TelaRequest')}>
        <Text style={styles.textoBotao2}> Peça seu Projeto aqui! </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate('TelaInicio')}>
        <Text style={styles.textoBotao}> Sair </Text>
      </TouchableOpacity>

    </View>

  );
  
}

export default TelaLista1;
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/styles'


function TelaProjeto({ navigation }) {

  return (

    <View style={styles.area2}>

          <TouchableOpacity style={styles.botaoVoltar2} onPress={() => navigation.navigate('TelaLista2')}>
              <Text style={styles.textoBotao}> 
                  Voltar 
              </Text>
          </TouchableOpacity>

          <Image style={styles.imagem4} 
                source={{ uri: 'https://imgur.com/g2snL0Q.png' }} 
          />

          <Text style={styles.titulo}> 
              QUEM SOMOS? 
          </Text>

          <Text style={styles.texto}>
              Nossa ONG foi fundada em 2006 e leva o mesmo nome do nosso projeto. Nos dedicamos principalmente em ajudar e acolher pessoas em qualquer estado vulnerável, seja em situação de rua, ou até mesmo pessoas com doenças psicológicas.</Text>

         <Text style={styles.titulo}> 
              O QUE PRECISAMOS? 
         </Text>
         <Text style={styles.texto}> 
              Para ajudar o nosso pessoal, vamos precisar de:
                  {'\n'}
                  {'\n'} 
              - 2 Cozinheiros(as); 
                  {'\n'} 
              - 10Kg de Arroz; 
                  {'\n'}
              - 10Kg de Feijão; 
                  {'\n'} 
              - 20 Pacotes de Macarrão; 
                  {'\n'} 
              - 4500g de Extrato de Tomate.  
         </Text>

        <Text style={styles.texto}> 
              Os valores acima são apenas representativos, aceitamos qualquer tipo de doação. 
        </Text>

        <Text style={styles.titulo}> 
              ONDE ESTAMOS? 
        </Text>

        <Text style={styles.texto}> 
              Nossa sede fica localizada na Zona Sul de São Paulo, na Av. João Dias, 2046. 
        </Text>


        <TouchableOpacity style={styles.botao3} onPress={()=> (alert('SUCESSO'))}>
              <Text style={styles.textoBotao}> Quero me Voluntariar! </Text>
        </TouchableOpacity>

    </View>
  
  );
  
}

export default TelaProjeto;
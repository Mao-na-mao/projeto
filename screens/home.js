import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'


function TelaInicio({ navigation }) {

  return (

    <View style={styles.area}>

      <Image style={styles.imagem}
        source={{ uri: 'https://i.imgur.com/atd8y6u.png' }}
      />


      <TouchableOpacity style={styles.botao} onPress={() => (navigation.navigate("TelaLogin1"))}>
        <Text style={styles.textoBotao}> Login - ONGs </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => (navigation.navigate("TelaLogin2"))}>
        <Text style={styles.textoBotao}> Login - Voluntários </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => (navigation.navigate("TelaSignin"))}>
        <Text style={styles.textoBotao}> É novo? Cadastre-se!  </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoAbout} onPress={() => (navigation.navigate("TelaAbout"))}>
        <Text style={styles.textoBotaoAbout}> Saiba Mais </Text>
      </TouchableOpacity>

    </View>

  );

}

export default TelaInicio;
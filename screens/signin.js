import {Text, View, Image, TouchableOpacity} from 'react-native'
import styles from '../styles/styles'


function TelaSignin({navigation}){

  return (  

    <View style={styles.area}> 
 
      <Image style={styles.imagem}
        source={{uri: 'https://i.imgur.com/atd8y6u.png'}}
      />
 

      <TouchableOpacity style={styles.botao} onPress={()=> (navigation.navigate("TelaSignin1"))}>
        <Text style={styles.textoBotao}> ONGs </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={()=> (navigation.navigate("TelaSignin2"))}>
        <Text style={styles.textoBotao}> Voluntários </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={()=> (navigation.navigate("TelaInicio"))}>
        <Text style={styles.textoBotao}> Voltar </Text>
      </TouchableOpacity>

    </View>

  );
  
}

export default TelaSignin;
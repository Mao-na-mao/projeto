import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'


function TelaAbout({ navigation }) {

  return (

    <View style={styles.area2}>

      <TouchableOpacity style={styles.botaoVoltar2} onPress={() => (navigation.navigate("TelaInicio"))}>
        <Text style={styles.textoBotao2}> Voltar </Text>
      </TouchableOpacity>


      <Image style={styles.imagem2}
        source={{ uri: 'https://i.imgur.com/atd8y6u.png' }}
      />

      <Text style={styles.titulo}>
        - Quem Somos?
      </Text>

      <Text style={styles.texto}>
        Somos uma StartUp com um foco em causas sociais, que leva o nome de "Mão na Mão".  Nosso princial objetivo é auxiliar ONGs a desenvolverem projetos sociais de acordo com suas demandas (como por exemplo, necessidades alimentícias), e reunir voluntários para participarem desses projetos. Para que os projetos possam se concretizar, temos apoio também de grandes empresas parceiras, as quais possuem seus respectivos nomes estampados em cada projeto em que ajudaram. Nos apoiamos em três dos 17 Objetivos de desenvolvimento Sustentável definidos pela ONU (Organização das Nações Unidas), sendo eles:
        {'\n'}
        ODS 3 - Saúde e Bem-estar;
        {'\n'}
        ODS 10 - Redução de Desigualdade;
        {'\n'}
        ODS 16 - Paz, Justiça e Instituições Eficazes.
        {'\n'}
      </Text>

    </View>

  );

}

export default TelaAbout;
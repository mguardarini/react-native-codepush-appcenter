import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default StyleSheet.create({
    containerPrincipal: {
      backgroundColor:'#0572f5' 
    },
    imagemCiruclar: {
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: Dimensions.get('window').width * 0.45,
      height: Dimensions.get('window').width * 0.45,
      backgroundColor:'#f00',
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerTexto: {
      marginTop:'30%'
    },
    nomePalestrante: {
      fontSize:28,
      fontWeight:'bold',
      textAlign:'center'  
    },
    texto: {
      marginTop:'2%',
      marginLeft:'23.5%',
      fontSize:16
    },
    containerImagem: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '50%'
    },
    image: {
      width:200,
      height:200,
      marginTop:30,
      marginLeft:'25%'
    }
  });
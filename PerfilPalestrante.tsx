import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';
import image from './assets/qrcode.png'
import imagemPerfil from './assets/profile2.jpeg'
import codePush from 'react-native-code-push';

const PerfilPalestrante = () => {
  useEffect(() => {
    codePush.sync({
      updateDialog: {
        appendReleaseDescription:true
      },
      installMode: codePush.InstallMode.IMMEDIATE
    });
  });
  return (
    <>
      <View style={styles.containerPrincipal}>
          <View style={{
            marginTop:'40%'
          }}/> 
      </View>
      <View style={styles.containerImagem}>
            <Image
                source={imagemPerfil}
                style = {styles.imagemCiruclar}>
            </Image>   
       </View>
       <View style={styles.containerTexto}>
            <Text style={styles.nomePalestrante}>
                Mauro Guardarini
            </Text>  
            <Text style={styles.texto}>
                Twitter: @mguardarini
            </Text>  
            <Text style={styles.texto}>
                Empresa: Lambda3
            </Text>
            <Text style={styles.texto}>
                Evento: TDC Recife
            </Text>
            <Image
                source={image}
                style={styles.image}
            />
       </View>
    </>
  );
};

export default PerfilPalestrante;


import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';
import image from './assets/qrcode.png'
import profileImage from './assets/profile2.jpeg'

const App = () => {
  return (
    <>
      <View style={{
            backgroundColor:'#0572f5' 
      }}>
          <View style={{
            backgroundColor:'#554544',
            marginTop:'40%'
            }}/> 
      </View>
      <View style={styles.behind}>
            <Image
                source={profileImage}
                style = {{
                  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                  width: Dimensions.get('window').width * 0.45,
                  height: Dimensions.get('window').width * 0.45,
                  backgroundColor:'#f00',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
            </Image>   
       </View>
       <View style={{
            marginTop:'30%'
       }}>
            <Text style={{
              fontSize:28,
              fontWeight:'bold',
              textAlign:'center'  
            }}>
                Mauro Guardarini
            </Text>  
            <Text style={{
                marginTop:'2%',
                marginLeft:'23.5%',
                fontSize:16
           }}>
                Twitter: @mguardarini
            </Text>  
            <Text style={{
                marginTop:'2%',
                marginLeft:'23.5%',
                fontSize:16
           }}>
                Empresa: Lambda3
            </Text>
            <Text style={{
                marginTop:'2%',
                marginLeft:'23.5%',
                fontSize:16
           }}>
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

const styles = StyleSheet.create({
  behind: {
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
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;

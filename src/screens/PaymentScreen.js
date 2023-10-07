import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
import GoBack from '../components/goBack'
import HeaderComponent from '../components/common/HeaderComponent'
import ButtonHomeComponent from '../components/ButtonHomeComponent'

export default function PaymentScreen() {
  return (
    <View>
        <HeaderComponent/>
        <View style={styles.mainContainer}>
        <Text style={styles.title}>Ingresa el monto a pagar</Text>
        <View style={styles.money}>
        <Text style={styles.input}>$</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
        />
        </View>
        
        <View style={styles.paymentContainer}>
<View style={styles.radioContainer}>
<RadioButton.Group >
        <View style={styles.radioText}>
        <RadioButton />
        <Text style={styles.text}> </Text>
          <Text style={styles.text}>Pago con</Text>
          
          <Image source={require('../../assets/OxxoPay.png')} style={styles.image} />
        </View>
        <View style={styles.radioText}>
        <RadioButton />
        <Text style={styles.text}> </Text>
          <Text  style={styles.text}>Tarjeta débito/crédito</Text>
        </View>
      </RadioButton.Group>
</View>
        </View>
        
        <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Pagar</Text>
    </TouchableOpacity>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:25,
    fontWeight:'bold',
    color:'#000',
    textAlign:'center',
    marginTop:20,
  },
  mainContainer:{
    marginTop:20,
    marginHorizontal:20,
  },
  input: {
    fontSize:40,
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    marginTop:20,
  },
  paymentContainer: {
    height: 180,
    backgroundColor: '#e2e2e2',
    marginTop: 50,
    borderRadius: 10,
    width: 320,
    alignSelf: 'center',
  },
  
  radioText:{
   flexDirection: 'row', alignItems: 'center',
   marginVertical: 15,
  },
  money:{
    flexDirection: 'row', alignItems: 'center',
    justifyContent:'center',
  },
  text:{
    fontSize:17,
    color:'#000',
  },
  image:{
    width:110,
    height:65,
    marginLeft:10,
  },
  radioContainer:{
   //alinear objetos al centro del view
    justifyContent:'center',
    alignItems:'center',
    marginTop:1,
  },
  button:{
    borderRadius:3,
    justifyContent:'center',
    alignItems:'center',
    width:175,
    height:50,
    backgroundColor:'rgba(65, 169, 143, 1)',
    alignSelf:'center',
    marginTop:50,
  },
  textButton:{
    fontSize:21,
    color:'#fff',
  }
})
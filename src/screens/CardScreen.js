import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/common/HeaderComponent'

export default function CardScreen() {
  return (<View>
    <HeaderComponent/>
   <View style={styles.container}>
    <View style={styles.section}>
    <Text style={styles.text}>Monto a pagar</Text>
      <Text style={styles.amount}>$ 1,000.00</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.text}>Nombre del titular</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
    <View style={styles.section}>
      <Text style={styles.text}>Número de tarjeta</Text>
      <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.section2}>
      <Text style={styles.text}>Fecha de expiración</Text>
      <Text>      </Text>
      <Text style={styles.text}>CVV</Text>
     
      </View>
      <View style={styles.section2}>
      <TextInput style={styles.input2} placeholder="MM/YY"></TextInput>
      <TextInput style={styles.input2}></TextInput>
      </View>

    <TouchableOpacity style={styles.button}>
  <Text style={styles.textButton}>Pagar</Text>
</TouchableOpacity>
   </View>
</View>
  )
}


const styles = StyleSheet.create({
    container:{
      marginTop: 30,
      marginLeft: 30,
    },
    text:{
      fontWeight: 'bold',
      fontSize: 18,
    },
    amount:{
      fontSize: 23,
    },
    section:{
      marginBottom: 20,
    },
    section2:{
      flexDirection: 'row',
    },
    input:{
      borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width:'93.5%',
    },
    input2:{
      borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width:'45%',
    marginRight: 10,
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

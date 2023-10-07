import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonField() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Press Me</Text>
    </TouchableOpacity>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button:{
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        with:windowWidth*0.8,
        height:windowHeight*0.06,
        backgroundColor:'#FFD700',

    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
    }
})
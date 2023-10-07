import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CreditComponenent() {
  return (
    <View style={styles.credito}>
      <View style={styles.overlap2}>
        <Text style={styles.textWrapper4}>Credito</Text>
        <Text style={styles.textWrapper3}>$2,548.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  credito: {
    height: 96,
    position: 'absolute',
    top: 130,
    width: 271,
    alignItems: 'center', 
  },
  overlap2: {
    backgroundColor: 'white',
    // Sombras específicas de la plataforma
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4, // Elevación para sombra en dispositivos Android
      },
    }),
    borderRadius: 7,
    height: 96,
    position: 'relative',
    width: 267,
    marginTop: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  textWrapper3: {
    color: '#202020',
    fontSize: 32,
    fontWeight: '600',
  },
  textWrapper4: {
    color: '#121212',
    fontSize: 18,
    fontWeight: '600',
  },
});

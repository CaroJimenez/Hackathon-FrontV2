import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>Boanza</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 100,
        width: '100%',
        backgroundColor: '#41A98f',
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    Text: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between",
        alignItems: "center",
    }

})
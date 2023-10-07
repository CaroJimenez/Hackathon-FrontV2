import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Image } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize"; // Importa react-native-responsive-fontsize

export default function HeaderTicketComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Icon
          name="check-circle"
          type="material-community"
          size={RFValue(40)} // Usa RFValue para hacer que el tamaño sea receptivo
          style={styles.icon}
          color={"white"}
        />
        <Text style={styles.textWrapper}>Todo esta listo</Text>
        <Text style={styles.textWrapper2}>
          ¡Con esta referencia puedes pagar en cualquier Oxxo!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: RFValue(225), // Usa RFValue para hacer que la altura sea receptiva
    width: "100%",
    backgroundColor: "#41A98f",
    paddingHorizontal: RFValue(16), // Usa RFValue para hacer que el relleno sea receptivo
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: RFValue(10), // Usa RFValue para hacer que el radio de sombra sea receptivo
    elevation: 5,
  },
  textContainer: {
    alignItems: "center",
  },
  textWrapper: {
    top: RFValue(10), // Usa RFValue para hacer que la posición sea receptiva
    fontSize: RFValue(35), // Usa RFValue para hacer que el tamaño de fuente sea receptivo
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textWrapper2: {
    top: RFValue(10), // Usa RFValue para hacer que la posición sea receptiva
    fontSize: RFValue(20), // Usa RFValue para hacer que el tamaño de fuente sea receptivo
    color: "white",
    textAlign: "center",
  },
  icon: {
    marginTop: RFValue(30), // Usa RFValue para hacer que el margen superior sea receptivo
  },
});

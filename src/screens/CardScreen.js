import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/common/HeaderComponent";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

export default function CardScreen({ route }) {
  const navigate = useNavigation();
  const { amount } = route.params;
  const [expiryInput, setExpiryInput] = useState("");
  const handleClose = () => {
    navigate.navigate("Home");
  };
  const [expiry, setExpiry] = useState(""); 

  const handleExpiryChange = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "").slice(0, 4);
    let formattedExpiry = "";
    if (cleanedText.length >= 2) {
      formattedExpiry += cleanedText.slice(0, 2);
    }
    if (cleanedText.length >= 4) {
      formattedExpiry += "/" + cleanedText.slice(2, 4);
    }
    setExpiry(text);
  };

  return (
    <View>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.tittle}>
            Ingresa tu tarjeta &nbsp;
            <Icon
              name="credit-card-multiple-outline"
              type="material-community"
              size={25}
              style={styles.icon}
              color={"black"}
            />
          </Text>
          <Text style={styles.text}>Monto a pagar</Text>
          <Text style={styles.amount}>${amount}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Nombre del titular</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.section}>
          <Text style={styles.text} placeholder="">
            Número de tarjeta
          </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.section2}>
          <Text style={styles.text}>Fecha de expiración</Text>
          <Text> </Text>
          <Text style={styles.text}>CVV</Text>
        </View>
        <View style={styles.section2}>
          <TextInput
            style={styles.input2}
            placeholder="MM/YY"
            value={expiry} // Asignar el valor del estado al input
            onChangeText={handleExpiryChange} // Manejar cambios en el input
            keyboardType="numeric"
            maxLength={5}
          />
          <TextInput
            style={styles.input2}
            keyboardType="pass"
            placeholder="****"
          ></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCancelled} onPress={handleClose}>
            <Text style={styles.textButton2}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  amount: {
    fontWeight: "700",
    fontSize: 23,
  },
  section: {
    marginBottom: 20,
  },
  section2: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width: "93.5%",
  },
  input2: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width: "45%",
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20, 
  },
  buttonCancelled: {
    backgroundColor: "red", // Color de fondo del botón Cancelar
    borderRadius: 8, // Ajusta según tus preferencias
    padding: 10, // Ajusta según tus preferencias
    flex: 1, // Esto permite que el botón Cancelar ocupe el espacio disponible
    marginRight: 5,
  },
  button: {
    backgroundColor: "green", // Color de fondo del botón Pagar
    borderRadius: 8,
    padding: 10, 
    flex: 1, 
    marginRight:15,
  },
  textButton: {
    textAlign: "center",
    color: "white", 
  },
  textButton2: {
    textAlign: "center",
    color: "white",
  },
});

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

export default function CardScreen({ route }) {
  const { amount } = route.params;
  const [expiryInput, setExpiryInput] = useState(""); // Estado local para el campo de entrada de MM/YY
  
  const [expiry, setExpiry] = useState(""); // Estado para el valor formateado de MM/YY

  const handleExpiryChange = (text) => {
    // Asegurarse de que el valor solo contenga números y tenga una longitud máxima de 5 caracteres (MM/YY)
    const cleanedText = text.replace(/[^0-9]/g, "").slice(0, 4);
  
    // Formatear el valor como MM/YY (dos dígitos para mes y año) con "/" en el medio
    let formattedExpiry = "";
    if (cleanedText.length >= 2) {
      formattedExpiry += cleanedText.slice(0, 2);
    }
    if (cleanedText.length >= 4) {
      formattedExpiry += "/" + cleanedText.slice(2, 4);
    }
  
    // Actualizar el estado expiry con el valor formateado
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Pagar</Text>
        </TouchableOpacity>
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
  button: {
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    width: 175,
    height: 50,
    backgroundColor: "rgba(65, 169, 143, 1)",
    alignSelf: "center",
    marginTop: 50,
  },
  textButton: {
    fontSize: 21,
    color: "#fff",
  },
});

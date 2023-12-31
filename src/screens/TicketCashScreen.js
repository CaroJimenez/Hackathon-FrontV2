import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderComponent from "../components/common/HeaderComponent";
import HeaderTicketComponent from "../components/common/HeaderTicketComponent";
import { Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const TicketCashScreen = ({ route }) => {
  const { dataTicket, amount } = route.params;
  const navigate = useNavigation();

  const timestamp = dataTicket?.created_at;
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString();

  const formattedDate = `Creado el ${day} de ${month} de ${year} a las ${time}`;

  const handleClose = () => {
    navigate.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <HeaderTicketComponent />
      <View style={styles.contentContainer}>
        <Image
          source={{
            uri: dataTicket.barcode_url,
          }}
          style={styles.imageStyle}
        />
        <Text>{dataTicket.reference}</Text>
        <Text style={styles.textPagar}>Debes de pagar</Text>
        <Text style={styles.textAmount}>${amount}</Text>
        <Text style={styles.textExpire}>{formattedDate}</Text>
        <Text style={styles.textInstruction}>
          Muestra este código de barras al cajero y completa el pago
        </Text>
        <Text style={styles.textInstruction2}>
          Se te envió un correo con esta referencia de pago
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Cerrar"
            buttonStyle={styles.buttonClose}
            onPress={handleClose}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  imageStyle: {
    width: 300,
    height: 130,
  },
  textPagar: {
    fontSize: 20,
    top: 20,
    fontWeight: "700",
  },
  textAmount: {
    top: 25,
    fontSize: 45,
  },
  textExpire: {
    top: 25,
    opacity: 0.8,
    fontSize: 15,
    color: "grey",
  },
  textInstruction: {
    top: 80,
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 30,
    color: "#155e8f",
  },
  textInstruction2: {
    top: 100,
    fontSize: 15,
    textAlign: "center",
    color: "#155e8f",
  },
  buttonContainer: {
    marginTop: 130,
  },
  buttonClose: {
    width: 150,
    backgroundColor: "#155e8f",
  },
});

export default TicketCashScreen;

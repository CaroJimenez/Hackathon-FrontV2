import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import GoBack from "../components/goBack";
import HeaderComponent from "../components/common/HeaderComponent";
import { Icon } from "react-native-elements";
import AxiosClient, { generateTicketOxxoPay } from "../utils/axios";
import { useNavigation } from "@react-navigation/native";

export default function PaymentScreen() {
  const [amount, setAmount] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [dataTicket,setDataTicket] = useState()
  const navigate = useNavigation();


  const customer_info = {
    customer_email: "20213tn032@utez.edu.mx",
    customer_name: "Betja",
    customer_phone: "7771231212",
  };

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
  };

  const handlePayment = async () => {
    if (paymentOption === "oxxo") {
      try {
        const response = await AxiosClient({
          url: "/conekta/",
          method: "POST",
          data: {
            amount: amount*100,
            customer_name: "Betja",
            customer_email: "20213tn032@utez.edu.mx",
            customer_phone: "7771234560",
          },
        });
        setDataTicket(response.data)
        if(response.status == 200){
          navigate.navigate('ticket', { dataTicket: response.data, amount: amount });
        }
      } catch (error) {
        console.log(error)
      }
    }else if(paymentOption === "card"){
      navigate.navigate('card', { amount: amount });
    }
  };
  return (
    <View>
      <HeaderComponent />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Ingresa el monto a pagar</Text>
        <View style={styles.money}>
          <Text style={styles.input}>$</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>

        <View style={styles.paymentContainer}>
          <View style={styles.radioContainer}>
            <RadioButton.Group
              onValueChange={(value) => handlePaymentOptionChange(value)}
              value={paymentOption}
            >
              <View style={styles.radioText}>
                <RadioButton value="oxxo" />
                <Text style={styles.text}>Pago con</Text>
                <Image
                  source={require("../../assets/OxxoPay.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.radioText}>
                <RadioButton value="card" />
                <Text style={styles.text}>
                  Tarjeta débito/crédito
                  <Icon
                    name="credit-card-multiple-outline"
                    type="material-community"
                    size={20}
                    style={styles.icon}
                    color={"black"}
                  />
                </Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.textButton}>
            Pagar &nbsp;
            <Icon
              name="lock-outline"
              type="material-community"
              size={20}
              color={"white"}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewLogo}>
        <Image
          source={require("../../assets/conekta.png")}
          style={styles.logoConekta}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 20,
  },
  mainContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  input: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
  paymentContainer: {
    height: 180,
    backgroundColor: "#e2e2e2",
    marginTop: 50,
    borderRadius: 10,
    width: 320,
    alignSelf: "center",
  },

  radioText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  money: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 17,
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 65,
    marginLeft: 10,
  },
  radioContainer: {
    //alinear objetos al centro del view
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
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
  icon: {
    marginLeft: 5,
  },
  logoConekta: {
    width: 150,
    height: 40,
    top: 15,
  },
  viewLogo: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

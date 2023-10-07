import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import { RadioButton } from "react-native-paper";
import HeaderComponent from "../components/common/HeaderComponent";
import { Icon } from "react-native-elements";
import AxiosClient, { generateTicketOxxoPay } from "../utils/axios";
import { useNavigation } from "@react-navigation/native";
import LoaderButton from "../components/LoaderButton";

export default function PaymentScreen({ route }) {
  const { credit } = route.params;
  const [amount, setAmount] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [dataTicket, setDataTicket] = useState();
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);

  const customer_info = {
    customer_email: "20213tn032@utez.edu.mx",
    customer_name: "Betja",
    customer_phone: "7771231212",
  };

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
  };

  const handlePayment = async () => {
    if (amount !== "" && paymentOption !== "") {
      if (amount <= credit) {
        if(amount > 10){
          if (paymentOption === "oxxo") {
            try {
              setLoading(true);
              const response = await AxiosClient({
                url: "/conekta/",
                method: "POST",
                data: {
                  amount: amount * 100,
                  customer_name: "Betja",
                  customer_email: "20213tn032@utez.edu.mx",
                  customer_phone: "7771234560",
                },
              });
              setDataTicket(response.data);
              if (response.status == 200) {
                navigate.navigate("ticket", {
                  dataTicket: response.data,
                  amount: amount,
                });
              }
            } catch (error) {
              console.log(error);
            }finally{
              setLoading(false);
            }
          } else if (paymentOption === "card") {
            navigate.navigate("card", { amount: amount });
          }
        }else{
          Alert.alert("Error", "Debe de ser mayor de 10 pesos")
        }
      } else {
        Alert.alert(
          "Error",
          "El monto ingresado supera la cantidad a pagar de tu credito"
        );
      }
    } else {
      Alert.alert(
        "Error",
        "No puede ir vacio, debes de ingresar cantidad y seleccionar un metodo de pago"
      );
    }
  };
  return (
    <TouchableOpacity onPress={() => Keyboard.dismiss()}>
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
              <Text >Selecciona una opcion</Text>
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
                  <RadioButton value="card" status="checked"></RadioButton>
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
            {loading ? (
              <LoaderButton loadingButton={loading} />
            ) : (
              <Text style={styles.textButton}>
                Pagar &nbsp;
                <Icon
                  name="lock-outline"
                  type="material-community"
                  size={20}
                  color={"white"}
                />
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.viewLogo}>
          <Image
            source={require("../../assets/conekta.png")}
            style={styles.logoConekta}
          />
        </View>
      </View>
    </TouchableOpacity>
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
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4, // Elevación para sombra en dispositivos Android
      },
    }),
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

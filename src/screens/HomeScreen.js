import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Button, Icon } from "react-native-elements";
import HeaderComponent from "../components/common/HeaderComponent";
import ButtonHomeComponent from "../components/ButtonHomeComponent";
import CreditComponenent from "../components/CreditComponenent";
import Navbar from "../components/common/Navbar";
import AxiosClient from "../utils/axios";

export default function HomeScreen() {
  const isFocused = useIsFocused();

  const navigate = useNavigation();
  const [user, setUser] = useState({});

  const onNavigate = () => {
    navigate.navigate("ticket");
  };
  const email = "20213tn032@utez.edu.mx";
  const getUser = async () => {
    try {
      const response = await AxiosClient({
        url: `/user/${email}`,
        method: "GET",
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isFocused) {
      getUser(); 
    }
  }, [isFocused]); 
  return (
    <View style={styles.iphone}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <HeaderComponent />
          <CreditComponenent user={user}/>
          <ButtonHomeComponent user={user} />
        </View>
      </View>
      <Navbar />
    </View>
  );
}
const styles = StyleSheet.create({
  iphone: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  div: {
    backgroundColor: "white",
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
  overlap: {
    height: 193,
    top: 0,
    width: "100%",
    alignItems: "center",
  },
});

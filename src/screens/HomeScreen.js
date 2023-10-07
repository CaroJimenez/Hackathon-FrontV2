import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import HeaderComponent from "../components/common/HeaderComponent";
import ButtonHomeComponent from "../components/ButtonHomeComponent";
import CreditComponenent from "../components/CreditComponenent";

export default function HomeScreen() {
  return (
    <View style={styles.iphone}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <HeaderComponent />
          <CreditComponenent />
          <ButtonHomeComponent />
        </View>
      </View>
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

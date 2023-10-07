import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Image } from "react-native-elements";

export default function HeaderTicketComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
      <Icon
        name="check-circle"
        type="material-community"
        size={40}
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
    height: 225,
    width: "100%",
    backgroundColor: "#41A98f",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  textContainer: {
    alignItems: "center",
  },
  textWrapper: {
    top:10,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textWrapper2: {
    top:15,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  icon:{
    marginTop:30
  }
  
});

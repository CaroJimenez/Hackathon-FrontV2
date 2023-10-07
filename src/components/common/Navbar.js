import React from "react";
import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";

const Navbar = () => {
	return (
		<View style={Styles.bottom}>
			<View style={Styles.container}>
        <Image style={Styles.logos} source={require("../../../assets/rocket.png")} />
				<Text style={Styles.text}>Trayecto</Text>
			</View>
			<View style={Styles.container}>
      <Image style={Styles.logos} source={require("../../../assets/vector.png")} />
				<Text style={Styles.text}>Acciones</Text>
			</View>
			<View style={Styles.container}>
      <Image style={Styles.logos} source={require("../../../assets/school.png")} />
				<Text style={Styles.text}>Formacion</Text>
			</View>
			<View style={Styles.container}>
      <Image style={Styles.logos} source={require("../../../assets/card.png")} />
				<Text style={Styles.text}>Pagos</Text>
			</View>
		</View>
	);
};

export default Navbar;

const Styles = StyleSheet.create({
	bottom: {
		backgroundColor: "#ffffff",
		borderRadius: 20,
		height: 90,
		width: "100%",
		position: "absolute",
		bottom: -52,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		flexDirection: "column",
		height: 48,
		// top: 60,
		width: "100%",
	},
	text: {
		color: "#888888",
		fontSize: 14,
		fontWeight: "bold",
		// lineHeight: 17,
		textAlign: "center",
	},
  logos: {
    height: 24,
    width: 24,
    marginBottom: 0,
		color: "#888888",

  }
});

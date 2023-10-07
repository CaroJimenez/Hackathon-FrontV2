import { StyleSheet, Text, View } from "react-native";
import React from "react";

import GoBack from "../components/goBack";
import HeaderComponent from "../components/common/HeaderComponent";

export default function PaymentScreen() {
  return (
    <View>
      <View style={styles.screenSelect}>
        <View style={styles.div}>
          <HeaderComponent />
          <View style={styles.bottom}>
            <View style={styles.container}>
              <View style={styles.trayecto}>
                <View style={styles.overlapGroup2}>
                  {/* <Image source={require('./rocket-1.svg')} style={styles.rocket} /> */}
                  <Text style={styles.textWrapper3}>Trayecto</Text>
                </View>
              </View>
              <View style={styles.acciones}>
                {/* <Image source={require('./vector.svg')} style={styles.vector} /> */}
                <View style={styles.overlap}>
                  {/* <Image source={require('./image.svg')} style={styles.img} />
                <Image source={require('./vector-2.svg')} style={styles.vector2} />
                <Image source={require('./vector-3.svg')} style={styles.vector3} /> */}
                </View>
                <Text style={styles.textWrapper4}>Acciones</Text>
              </View>
              <View style={styles.formacion}>
                {/* <Image source={require('./vector-4.svg')} style={styles.vector4} /> */}
                <View style={styles.overlap2}>
                  {/* <Image source={require('./vector-5.svg')} style={styles.vector5} /> */}
                  <Text style={styles.textWrapper5}>Formacion</Text>
                </View>
              </View>
              <View style={styles.productos}>
                {/* <Image source={require('./vector-6.svg')} style={styles.vector6} /> */}
                <View style={styles.overlap3}>
                  {/* <Image source={require('./vector-7.svg')} style={styles.vector7} /> */}
                  <Text style={styles.textWrapper6}>Pagos</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.metodosDePago}>
            <View style={styles.overlap4}>
              <View style={styles.group} />
              <Text style={styles.textWrapper7}>Tarjeta debito/credito</Text>
              <Text style={styles.textWrapper8}>Pago con</Text>
              <View style={styles.ellipse} />
              <View style={styles.ellipse2} />
              {/* <Image source={require('./oxxopay.png')} style={styles.oxxopay} /> */}
            </View>
          </View>
          <Text style={styles.p}>Ingresa el monto a pagar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenSelect: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  div: {
    backgroundColor: "#ffffff",
    height: 844,
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  header: {
    backgroundColor: "#41A98F",
    height: 132,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  overlapGroup: {
    backgroundSize: "100% 100%",
    height: 132,
    left: 1,
    position: "relative",
    width: "100%",
  },
  textWrapper: {
    color: "#ffffff",
    // fontFamily: 'Inter-SemiBold',
    fontSize: 32,
    fontWeight: "600",
    left: 130,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 15,
    whiteSpace: "nowrap",
    width: 134,
  },
  textWrapper2: {
    color: "#ffffff",
    // fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    fontWeight: "600",
    left: 174,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 60,
    width: 43,
  },
  bottom: {
    backgroundColor: "#efefef",
    borderRadius: 40,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    // boxShadow: '0px -4px 4px #00000040',
    height: 65,
    left: 0,
    position: "absolute",
    top: 779,
    width: 395,
  },
  container: {
    alignItems: "flex-start",
    display: "flex",
    height: 48,
    justifyContent: "space-between",
    left: 42,
    position: "relative",
    top: 9,
    width: 311,
  },
  trayecto: {
    height: 51,
    marginBottom: -3,
    position: "relative",
    width: 45,
  },
  overlapGroup2: {
    height: 51,
    position: "relative",
    width: 43,
  },
  rocket: {
    height: 40,
    left: 2,
    position: "absolute",
    top: 0,
    width: 40,
  },
  textWrapper3: {
    color: "#888888",
    // fontFamily: 'Cabin-Regular',
    fontSize: 12,
    fontWeight: "400",
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 36,
  },
  acciones: {
    height: 48,
    position: "relative",
    width: 48,
  },
  vector: {
    height: 40,
    left: -41,
    position: "absolute",
    top: -1098,
    width: 40,
  },
  overlap: {
    height: 26,
    left: 7,
    position: "absolute",
    top: 6,
    width: 32,
  },
  img: {
    height: 10,
    left: 16,
    position: "absolute",
    top: 0,
    width: 10,
  },
  vector2: {
    height: 8,
    left: 0,
    position: "absolute",
    top: 6,
    width: 8,
  },
  vector3: {
    height: 20,
    left: 0,
    position: "absolute",
    top: 6,
    width: 32,
  },
  textWrapper4: {
    color: "#888888",
    // fontFamily: 'Cabin-Regular',
    fontSize: 12,
    fontWeight: "400",
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    top: 33,
  },
  formacion: {
    height: 49,
    marginBottom: -1,
    position: "relative",
    width: 56,
  },
  vector4: {
    height: 40,
    left: -37,
    position: "absolute",
    top: -1098,
    width: 40,
  },
  overlap2: {
    height: 44,
    left: 0,
    position: "absolute",
    top: 5,
    width: 54,
  },
  vector5: {
    height: 30,
    left: 9,
    position: "absolute",
    top: 0,
    width: 37,
  },
  textWrapper5: {
    color: "#888888",
    // fontFamily: 'Cabin-Regular',
    fontSize: 12,
    fontWeight: "400",
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    top: 29,
  },
  productos: {
    height: 48,
    marginRight: -2,
    position: "relative",
    width: 42,
  },
  vector6: {
    height: 40,
    left: -44,
    position: "absolute",
    top: -1098,
    width: 40,
  },
  overlap3: {
    height: 41,
    left: 3,
    position: "absolute",
    top: 7,
    width: 33,
  },
  vector7: {
    height: 27,
    left: 0,
    position: "absolute",
    top: 0,
    width: 33,
  },
  textWrapper6: {
    color: "#3c3c3c",
    // fontFamily: 'Cabin-Regular',
    fontSize: 12,
    fontWeight: "400",
    left: 2,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    top: 26,
  },
  metodosDePago: {
    height: 168,
    left: 53,
    position: "absolute",
    top: 312,
    width: 293,
  },
  overlap4: {
    height: 168,
    position: "relative",
    width: 289,
  },
  group: {
    backgroundColor: "#ededed",
    // borderRadius: 6,
    boxShadow: "0px 1px 6px -2px #00000040",
    height: 168,
    left: 0,
    position: "absolute",
    top: 0,
    width: 286,
  },
  textWrapper7: {
    color: "#5e5e5e",
    // fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    fontWeight: "600",
    left: 35,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    top: 109,
    width: 227,
  },
  textWrapper8: {
    color: "#5e5e5e",
    // fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    fontWeight: "600",
    left: 62,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 32,
    width: 227,
  },
  ellipse: {
    backgroundColor: "#cfcfcf",
    borderRadius: 9.69,
    // boxShadow: '0px 4px 4px #00000040',
    height: 19,
    left: 27,
    position: "absolute",
    top: 32,
    width: 19,
  },
  ellipse2: {
    backgroundColor: "#cfcfcf",
    borderRadius: 9.69,
    boxShadow: "0px 4px 4px #00000040",
    height: 19,
    left: 27,
    position: "absolute",
    top: 103,
    width: 19,
  },
  oxxopay: {
    height: 23,
    left: 143,
    position: "absolute",
    top: 32,
    width: 103,
  },
  p: {
    color: "#000000",
    // fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    fontWeight: "600",
    left: 75,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    top: 160,
    whiteSpace: "nowrap",
  },
});

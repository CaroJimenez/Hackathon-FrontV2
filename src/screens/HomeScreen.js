import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonField from '../components/common/ButtonField'

export default function HomeScreen() {
  return (
    // <View>
    //   <Text>Perross</Text>
    //   <ButtonField />
    // </View>
        <View style={styles.iphone}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <View style={styles.header}>
            <View style={styles.overlapGroup}>
              <Text style={styles.textWrapper}>bonanza</Text>
              <Text style={styles.textWrapper2}>Pagos</Text>
            </View>
          </View>
          <View style={styles.credito}>
            <View style={styles.overlap2}>
              <Text style={styles.textWrapper3}>$ 2,548.00</Text>
              <Text style={styles.textWrapper4}>Credito</Text>
            </View>
          </View>
        </View>
        <View style={styles.deudaButton}>
          <View style={styles.overlap3}>
            <View style={styles.rectangle} />
            <Text style={styles.pagarDeuda}>
              Pagar {'\n'}
              Deuda
            </Text>
            <View style={styles.rectangle2} />
            {/* <Image
              style={styles.iconNavigateNext}
              source={require('./icon-navigate-next.png')}
            /> */}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iphone: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    height: 844,
    overflow: 'hidden',
    position: 'relative',
    width: 390,
  },
  overlap: {
    height: 193,
    left: -1,
    position: 'absolute',
    top: 0,
    width: 395,
  },
  header: {
    backgroundColor: '#41A98F',
    height: 132,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 395,
  },
  overlapGroup: {
    // backgroundImage: 'url(./rectangle-2.png)',
    backgroundSize: '100% 100%',
    height: 132,
    left: 1,
    position: 'relative',
    width: 390,
  },
  textWrapper: {
    color: 'black',
    // fontFamily: 'Inter-SemiBold',
    fontSize: 25,
    fontWeight: '600',
    left: 141,
    letterSpacing: 0,
    // lineHeight: 'normal',
    position: 'absolute',
    top: 18,
    width: 109,
  },
  textWrapper2: {
    color: 'black',
    // fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    left: 174,
    letterSpacing: 0,
    // lineHeight: 'normal',
    position: 'absolute',
    top: 60,
    width: 43,
  },
  credito: {
    height: 96,
    left: 59,
    position: 'absolute',
    top: 97,
    width: 271,
  },
  overlap2: {
    backgroundColor: '#e2e2e2',
    borderRadius: 7,
    boxShadow: '0px 4px 4px #00000040',
    height: 96,
    position: 'relative',
    width: 267,
  },
  textWrapper3: {
    color: '#202020',
    // fontFamily: 'Inter-SemiBold',
    fontSize: 32,
    fontWeight: '600',
    left: 46,
    letterSpacing: 0,
    // lineHeight: 'normal',
    position: 'absolute',
    textShadow: '0px 4px 4px #00000040',
    top: 35,
    width: 181,
  },
  textWrapper4: {
    color: '#121212',
    // fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    fontWeight: '600',
    left: 99,
    letterSpacing: 0,
    // lineHeight: 'normal',
    position: 'absolute',
    top: 12,
    width: 69,
  },
  deudaButton: {
    height: 54,
    left: 66,
    position: 'absolute',
    top: 221,
    width: 259,
  },
  overlap3: {
    height: 54,
    position: 'relative',
    width: 257,
  },
  rectangle: {
    backgroundColor: '#d9d9d9',
    borderRadius: 6,
    height: 48,
    left: 0,
    position: 'absolute',
    top: 3,
    width: 257,
  },
  pagarDeuda: {
    color: '#000000',
    // fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    left: 16,
    letterSpacing: 0,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 8,
    width: 108,
  },
  rectangle2: {
    backgroundColor: '#41a98f',
    borderRadius: '0px 6px 6px 0px',
    height: 48,
    left: 146,
    position: 'absolute',
    top: 3,
    width: 111,
  },
  iconNavigateNext: {
    height: 54,
    left: 172,
    position: 'absolute',
    top: 0,
    width: 57,
  },
  
})
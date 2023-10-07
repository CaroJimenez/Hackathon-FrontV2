import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

export default function HeaderComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="menu"
        type="material-community"
        size={30}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textWrapper}>Bonanza</Text>
        <Text style={styles.textWrapper2}>Pagos</Text>
      </View>
      <Icon
        name="bell-outline"
        type="material-community"
        size={30}
        style={styles.icon}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
    backgroundColor: '#41A98f',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  textContainer: {
    alignItems: 'center',
  },
  textWrapper: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  textWrapper2: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    color: 'white',
  },
});

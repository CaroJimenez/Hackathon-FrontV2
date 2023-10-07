import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function ButtonHomeComponent() {
  const navigate = useNavigation();

  const onNavigate = () => {
    navigate.navigate('Payment');
  };

  return (
    <View style={styles.deudaButton}>
      <TouchableOpacity style={styles.overlap3}>
        <View style={styles.rectangle}>
          <Text style={styles.pagarDeuda}>
            Pagar Deuda
          </Text>
        </View>
        <TouchableOpacity
          onPress={onNavigate}
          style={styles.rectangle2}
        >
          <Icon
            name="chevron-right"
            type="material-community"
            size={30}
            style={styles.chevronIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 16, 
  },
  pagarDeuda: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    flex: 1, 
  },
  rectangle2: {
    backgroundColor: '#41a98f',
    height: 48,
    left: 146,
    position: 'absolute',
    top: 3,
    width: 111,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  chevronIcon: {
    color: 'white',
  },
});

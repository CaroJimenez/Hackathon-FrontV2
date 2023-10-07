import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function ButtonHomeComponent({user}) {
  const navigate = useNavigation();

  const onNavigate = () => {
    navigate.navigate('Payment', { credit: user?.credit });

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
            color={"white"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deudaButton: {
    height: 54,
    position: 'absolute',
    top: 280,
    width: 259,
  },
  overlap3: {
    height: 54,
    position: 'relative',
    width: 257,
  },
  rectangle: {
    backgroundColor: 'white',
    borderColor: '#41a98f',
    borderRadius:6,
    borderWidth: 1,
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
    borderEndEndRadius:6,
    borderTopEndRadius:6,
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

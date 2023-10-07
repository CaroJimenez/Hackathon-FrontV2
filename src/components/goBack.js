import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from "react-native-elements";


export default function GoBack(props) {
    const { title } = props;
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.container}
            >
                <Icon
                    name="chevron-left"
                    type="material-community"
                    size={30}
                />
                <Text style={styles.title} numberOfLines={3}>{title}</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
    },
})
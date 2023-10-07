import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const LoaderButton = ({loadingButton}) => {
    if(!loadingButton) return null;

    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color='white'/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    loaderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LoaderButton;

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../images/login.jpg')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeigh: 'bold',
        fontSize: 18,
    },
    image: {
        marginBottom: 40,
    },
});

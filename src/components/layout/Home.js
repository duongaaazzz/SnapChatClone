import React, { Component } from 'react';
import {
        View, Text, StyleSheet
} from 'react-native';

import { Header } from '../presentation';
import { Message } from '../containers';

class Home extends Component {
        render() {
                const {
                        container
                } = styles;
                return (
                        <View style={container}>
                                <Header text="All message" />
                                <Message />
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
        }
});

export default Home;            

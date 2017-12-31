import React, { Component } from 'react';
import {
        View, Text, StatusBar, StyleSheet
} from 'react-native';

class Header extends Component {
        state = {}
        render() {
                const {
                        topNav, text
                } = styles;

                return (
                        <View style={topNav}>
                                <StatusBar barStyle='light-content' />
                                <Text style={text}>{this.props.text}</Text>
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        topNav: {
                backgroundColor: '#001a66',
                position: 'absolute',
                paddingTop: 30,
                paddingBottom: 15,
                top: 0,
                width: 100 + '%'
        },
        text: {
                color: 'white',
                fontSize: 14,
                alignSelf: 'center',
                fontFamily: 'helvetica'
        }
});

export default Header;            

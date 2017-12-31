import React, { Component } from 'react';
import {
        View, Text, StyleSheet, FlatList
} from 'react-native';

class Message extends Component {

        constructor() {
                super();
                this.state = {
                        message: [
                                { id: 1, from: 'Mom', content: 'hi I mom' },
                                { id: 2, from: 'A', content: 'hi A' },
                                { id: 3, from: 'B', content: 'hi B' },
                                { id: 4, from: 'C', content: 'hi C' },
                                { id: 5, from: 'D', content: 'hi D' },
                        ]
                };
        }

        _renderMessage(item) {
                return (
                        <View style={styles.message}>
                                <Text style={[{ paddingTop: 5 }, styles.messageText]}>
                                        From: {item.from}
                                </Text>
                                <Text style={[{ paddingBottom: 5 }, styles.messageText]}>
                                        {item.content}
                                </Text>
                        </View>
                );
        }

        render() {
                const {
                        main
                } = styles;
                return (
                        <FlatList
                                keyExtractor={(item) => item.id}
                                style={main}
                                data={this.state.message}
                                renderItem={({ item }) => this._renderMessage(item)}
                        />
                );
        }
}

const styles = StyleSheet.create({
        main: {
                marginTop: 65,
                width: 100 + '%'
        },
        message: {
                width: 100 + '%',
                borderBottomWidth: 1,
                borderColor: 'black'
        },
        messageText: {
                fontFamily: 'helvetica',
                fontSize: 14
        }
});

export default Message;

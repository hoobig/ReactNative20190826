import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class SettingsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,

    })
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button
            title="Go to Settings... again"
            onPress={() => this.props.navigation.push('Settings')}
            />
            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            />
            </View>
            );
        }
    }

    export default SettingsScreen;
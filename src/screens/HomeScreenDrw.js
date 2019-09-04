import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class HomeScreenDrw extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        console.log(this.props.navigation);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen Drw</Text>
            <Button
            title="Go to Main Tabs"
            onPress={() => this.props.navigation.navigate('MainTabs')}
            />
            <Button
            title="Go to Main"
            onPress={() => this.props.navigation.navigate('Main')}
            />
            <Button
            title="Go to Settings Drawer"
            onPress={() => this.props.navigation.navigate('SettingsDrw')}
            />
            </View>
            );
        }
    }

    export default HomeScreenDrw;
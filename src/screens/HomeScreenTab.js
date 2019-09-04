import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';

class HomeScreenTab extends Component {

    constructor(props) {
      super(props);
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen Tab</Text>
            <Button
            title="Go to Home Drw"
            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            />
            </View>
            );
        }
    }

    export default HomeScreenTab;
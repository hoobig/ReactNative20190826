import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { 
    DrawerActions,
    NavigationActions
} from "react-navigation";
class BookingInfoScreen extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>BookingInfo Screen</Text>
            <Button
            title="Go to Main Tabs"
            onPress={() => this.props.navigation.dispatch(
                NavigationActions.navigate({
                    routeName: 'MainTabs',
                    action: NavigationActions.navigate({ routeName: 'SettingsTab' }),
                }),
                )}
            />
            <Button
            title="Go to Main"
            onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
            title="Go to Booking Update"
            onPress={() => this.props.navigation.navigate('BookingUpdate')}
            />
            </View>
            );
        }
    }

    export default BookingInfoScreen;
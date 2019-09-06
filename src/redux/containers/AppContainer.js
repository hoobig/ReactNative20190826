import React from "react";
import { View, Text } from "react-native";
import { Button, Icon } from 'react-native-elements';
import { 
    createStackNavigator, 
    createDrawerNavigator, 
    createBottomTabNavigator, 
    createAppContainer,
    DrawerActions,
    NavigationActions
} from "react-navigation";

/* Component */
import BookingInfoScreen from '../../screens/BookingInfoScreen';
import BookingUpdateScreen from '../../screens/BookingUpdateScreen';
import LogoutScreen from '../../screens/LogoutScreen';
import HiddenScreen from '../../screens/HiddenScreen';

import { DrawerButton } from '../../components/DrawerButton';

const styles = {
    btnMenu: {
        marginLeft: 5,
    },
    btnHome: {
        marginRight: 5,
    }
};

const StackNavigator = createStackNavigator({
    BookingInfo: {
        screen: BookingInfoScreen,
        navigationOptions: {
            header: null
        }
    },
    BookingUpdate: {
        screen: BookingUpdateScreen,
        navigationOptions: {
            title: 'Booking Update'
        },
    },
},
{
    initialRouteName: "BookingInfo"
});

const DrawerNavigator = createDrawerNavigator({
    MainStacks: {
        screen: StackNavigator,
        navigationOptions: {
            drawerLabel: <HiddenScreen />,
        },
    },
},
{
    initialRouteName: "MainStacks",
    contentComponent: DrawerButton,
});

const AppNavigator = createStackNavigator({
    MainDrawer: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => {
            const params = navigation.state.params || {};

            return {
                headerLeft: (
                    <Button
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) }
                    buttonStyle={styles.btnMenu}
                    icon={
                        <Icon
                        name="menu"
                        size={20}
                        color="white"
                        />
                    }
                    title=""
                    />
                    ),
                headerTitle: 'Home',
                headerRight: (
                    <Button
                    onPress={() => navigation.navigate('Home')}
                    buttonStyle={styles.btnHome}
                    icon={
                        <Icon
                        name="bell"
                        type='font-awesome'
                        size={20}
                        color="white"
                        />
                    }
                    title=""
                    />
                    ),
            };
        }
    },
},
{
    initialRouteName: "MainDrawer"
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
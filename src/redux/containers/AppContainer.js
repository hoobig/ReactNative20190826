import React from "react";
import { View, Text } from "react-native";
import { Button, Icon } from 'react-native-elements';
import { 
    createStackNavigator, 
    createDrawerNavigator, 
    createBottomTabNavigator, 
    createAppContainer,
    DrawerActions
} from "react-navigation";

/* Component */
import HomeScreenDrw from '../../screens/HomeScreenDrw';
import HomeScreenTab from '../../screens/HomeScreenTab';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import SettingsScreenDrw from '../../screens/SettingsScreenDrw';
import SettingsScreenTab from '../../screens/SettingsScreenTab';

const styles = {
    btnMenu: {
        marginLeft: 5,
    },
    btnHome: {
        marginRight: 5,
    }
};

const DrawerNavigator = createDrawerNavigator({
    HomenDrw: HomeScreenDrw,
    SettingsDrw: SettingsScreenDrw,
},
{
    initialRouteName: "HomenDrw"
});

const TabNavigator = createBottomTabNavigator({
    HomeTab: HomeScreenTab,
    SettingsTab: SettingsScreenTab,
},
{
    initialRouteName: "HomeTab"
});

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
},
{
    initialRouteName: "Home"
});

const AppNavigator = createStackNavigator({
    Main: {
        screen: MainNavigator,
        navigationOptions: () => {
            header: null
        }
    },
    MainTabs: {
        screen: TabNavigator,
        navigationOptions: () => {
            header: null
        }
    },
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
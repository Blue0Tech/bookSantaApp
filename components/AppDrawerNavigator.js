import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSidebarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationsScreen from '../screens/MyDonationsScreen';
import NotificationScreen from '../screens/NotificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator
    },
	MyDonations : {
		screen : MyDonationsScreen
    },
    Notifications : {
        screen : NotificationScreen
    },
    Setting : {
        screen : SettingScreen
    }
},
{
    contentComponent : CustomSidebarMenu
},
{
    initialRouteName : 'Home'
}
);
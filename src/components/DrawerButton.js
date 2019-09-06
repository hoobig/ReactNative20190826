import React from "react";
import { StyleSheet, Button, View, Text, ScrollView, SafeAreaView } from "react-native";
import { DrawerItems } from 'react-navigation';

/*Booking Info Button*/
export const DrawerButton = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
    <Button
      style={styles.logoutButton}
      title="Booking Info"
      onPress={() => props.navigation.navigate('BookingInfo') }/>
    <Button
      style={styles.logoutButton}
      title="Booking Update"
      onPress={() => props.navigation.navigate('BookingUpdate') }/>
    <Button
      style={styles.logoutButton}
      title="Logout"
      onPress={() => props.navigation.navigate('BookingInfo') }/>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logoutButton: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0
  }
});
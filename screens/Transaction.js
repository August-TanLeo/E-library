import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class TransactionScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>TransactionScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

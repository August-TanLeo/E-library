import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class SearchScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>SearchScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5653D4"
  },
});

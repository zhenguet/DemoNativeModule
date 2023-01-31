import React from 'react';
import {NativeModules, StyleSheet, Text, View} from 'react-native';

const {CalendarModule} = NativeModules;
console.log('check');
console.log(CalendarModule);

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

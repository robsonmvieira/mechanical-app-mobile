import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Text>Tela inicial</Text>
        <Text>Será que vai dar certo</Text>
      </View>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
});

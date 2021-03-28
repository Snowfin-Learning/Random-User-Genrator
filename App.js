import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import Axios from 'axios';
import {Button, Text} from 'native-base';
import User from './components/User';

// const key = 'some random key with 123';
// const URL = `https://randomuser.me/api/${key}/params`

const App = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      const details = data.results[0];
      console.log(details);
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Loading.....</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
        <User details={details} />
          <Button rounded style={styles.button} onPress={() => fetchDetails()}>
            <Text>New User</Text>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
});

export default App;

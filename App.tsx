import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const listTab = [{status: 'All'}, {status: 'Purple'}, {status: 'Green'}];

const App = () => {
  const [status, setStatus] = useState('All');
  const setStatusFilter = status => {
    setStatus(status);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map(e => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text style={styles.textTab}>{e.status}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '´#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: '#E6838D',
  },
});

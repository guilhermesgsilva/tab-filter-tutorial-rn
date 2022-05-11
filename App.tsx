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

const data = [
  {
    name: 'Ronaldo',
    status: 'Green',
  },
  {
    name: 'Messi',
    status: 'Purple',
  },
  {
    name: 'Kaka',
    status: 'Green',
  },
  {
    name: 'Mabbpe',
    status: 'Green',
  },
  {
    name: 'Lukaku',
    status: 'Purple',
  },
];

const App = () => {
  const [status, setStatus] = useState('All');

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map(e => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatus(e.status)}>
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={data}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
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
  textTabActive: {
    color: '#FFF',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
});

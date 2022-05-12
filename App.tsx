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
  const [dataList, setDataList] = useState(data);

  const setStatusFilter = status => {
    if (status !== 'All') {
      setDataList([...data.filter(e => e.status === status)])
    } else {
      setDataList(data)
    }
    setStatus(status)
  }

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image
            style={styles.itemImage}
            source={{uri: 'http://placekitten.com/200/300'}}
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={[styles.itemStatus, {backgroundColor: item.status === 'Purple' ? '#E5848E' : '#69C080'}]}>
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };

  const separator = () => {
    return (
      <View style={{height: 1, backgroundColor: '#F1F1F1'}}></View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map(e => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
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
        data={dataList}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        itemSeparatorComponent={separator}
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
  itemLogo: {
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemStatus: {
    paddingHorizontal: 6,
    justifyContent: 'center',
    right: 12,
  }
});

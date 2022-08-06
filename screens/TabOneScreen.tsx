import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Item from './Item';
import { useData } from './useData';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [data, loadingData] = useData();

  if (loadingData) {
    return <View style={styles.container}>
      <ActivityIndicator />
    </View>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <>
          <Item photo={item.photo} name={item.title} comment={item.body} />
          <View style={styles.separator} />
        </>}
        keyExtractor={item => item.id.toString()}
        style={{ width: '100%', maxHeight: 600 }}            
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#d2d2d2'
  },
});

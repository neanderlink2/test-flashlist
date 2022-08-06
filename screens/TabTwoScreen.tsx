import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Item from './Item';
import { useData } from './useData';

export default function TabTwoScreen() {
  const [data, loadingData] = useData();

  if (loadingData) {
    return <View style={styles.container}>
      <ActivityIndicator />
    </View>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={{ width: '100%', height: '100%' }}>
        <FlashList
          data={data}
          estimatedItemSize={200}
          renderItem={({ item }) => <>
            <Item photo={item.photo} name={item.title} comment={item.body} />
            <View style={styles.separator} />
          </>}
          keyExtractor={item => item.id.toString()}

        />
      </View>
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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

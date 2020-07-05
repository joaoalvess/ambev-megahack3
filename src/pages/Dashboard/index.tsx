import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },
})

export default Dashboard;
import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./src/images/ikanbandeng.png')}
          style={styles.image}
        />
        <Image
          source={require('./src/images/nasiayambakar.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./src/images/sate.jpg')}
          style={styles.image}
        />
        <Image
          source={require('./src/images/steak.jpg')}
          style={styles.image}
        />
         <Image
          source={require('./src/images/corndog.jpg')}
          style={styles.image}
        />
        {/* Tambahkan lebih banyak gambar sesuai kebutuhan */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default App;
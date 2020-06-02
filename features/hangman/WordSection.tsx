import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

const WordSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Word</Text>
      <Input placeholder="Word to guess" />
    </View>
  );
};

export default WordSection;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
});

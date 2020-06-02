import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const TipSection = () => {
  return (
    <View>
      <Input label="Tip" inputStyle={{ fontSize: 40 }} placeholder="A" />
      <Button
        raised
        title="Guess"
        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 60 }}
        titleStyle={{ fontSize: 28 }}
        containerStyle={{ marginVertical: 10 }}
        onPress={() => {}}
      />
    </View>
  );
};

export default TipSection;

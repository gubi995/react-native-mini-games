import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface Props {
  iconName: string;
  text: string;
}

const MenuItem: React.FC<Props> = ({ iconName, text }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon reverse name={iconName} type="ionicon" size={25} containerStyle={{ margin: 0 }} />
        <Text style={{ color: 'white' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

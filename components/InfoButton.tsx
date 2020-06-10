import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

interface Props {
  onPress: () => void;
}

const InfoButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Button
      containerStyle={{ marginRight: 10 }}
      type="clear"
      onPress={onPress}
      TouchableComponent={TouchableOpacity}
      icon={<Icon color="white" name="md-information-circle-outline" type="ionicon" size={20} />}
    />
  );
};

export default InfoButton;

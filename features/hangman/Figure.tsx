import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

const TopPicket = () => {
  const { width } = useWindowDimensions();

  return <View style={[styles.topPicket, { left: width / 2 - 5 }]} />;
};

const RightPicket = () => {
  const { width, height } = useWindowDimensions();

  return <View style={[styles.rightPicket, { height: height * 0.25, left: width / 2 + 85 }]} />;
};

const BottomPicket = () => {
  const { width, height } = useWindowDimensions();

  return <View style={[styles.bottomPicket, { top: height * 0.25 + 40, left: width / 2 - 30 }]} />;
};

const Rope = () => {
  const { width } = useWindowDimensions();

  return <View style={[styles.rope, { left: width / 2 - 5 }]} />;
};

const Head = () => {
  const { width } = useWindowDimensions();

  return <View style={[styles.head, { left: width / 2 - 20 }]} />;
};

const Torso = () => {
  const { width, height } = useWindowDimensions();

  return <View style={[styles.torso, { left: width / 2 - 3, height: height * 0.25 - 100 }]} />;
};

const LeftHand = () => {
  const { width } = useWindowDimensions();

  return <View style={[styles.leftHand, { left: width / 2 - 24 }]} />;
};

const RightHand = () => {
  const { width } = useWindowDimensions();

  return <View style={[styles.rightHand, { left: width / 2 - 7 }]} />;
};

const LeftLeg = () => {
  const { width, height } = useWindowDimensions();

  return <View style={[styles.leftLeg, { top: height * 0.25 + 10, left: width / 2 - 24 }]} />;
};

const RightLeg = () => {
  const { width, height } = useWindowDimensions();

  return <View style={[styles.rightLeg, { top: height * 0.25 + 10, left: width / 2 - 7 }]} />;
};

const Figure = () => {
  return (
    <View style={styles.container}>
      <TopPicket />
      <Rope />
      <RightPicket />
      <BottomPicket />
      <Head />
      <Torso />
      <LeftHand />
      <RightHand />
      <LeftLeg />
      <RightLeg />
    </View>
  );
};

export default Figure;

const styles = StyleSheet.create({
  container: {
    flexBasis: '40%',
    position: 'relative',
  },
  topPicket: {
    height: 10,
    width: 100,
    backgroundColor: 'black',
    position: 'absolute',
    top: 40,
  },
  rightPicket: {
    width: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: 50,
  },
  bottomPicket: {
    height: 10,
    width: 150,
    backgroundColor: 'black',
    position: 'absolute',
  },
  rope: {
    height: 10,
    width: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: 50,
  },
  head: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderRadius: 60,
    position: 'absolute',
    top: 60,
  },
  torso: {
    width: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 100,
  },
  leftHand: {
    height: 5,
    width: 30,
    backgroundColor: 'black',
    position: 'absolute',
    top: 120,
    transform: [{ rotate: '60deg' }],
  },
  rightHand: {
    height: 5,
    width: 30,
    backgroundColor: 'black',
    position: 'absolute',
    top: 120,
    transform: [{ rotate: '-60deg' }],
  },
  leftLeg: {
    height: 5,
    width: 30,
    backgroundColor: 'black',
    position: 'absolute',
    transform: [{ rotate: '120deg' }],
  },
  rightLeg: {
    height: 5,
    width: 30,
    backgroundColor: 'black',
    position: 'absolute',
    transform: [{ rotate: '-120deg' }],
  },
});

import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { Input, Button } from 'react-native-elements';

const Hangman = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexBasis: '40%', position: 'relative' }}>
        {/*Picket top most */}
        <View
          style={{
            height: 10,
            width: 100,
            backgroundColor: 'black',
            position: 'absolute',
            top: 40,
            left: width / 2 - 5,
          }}
        ></View>
        {/*Picket above head */}
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor: 'black',
            position: 'absolute',
            top: 50,
            left: width / 2 - 5,
          }}
        ></View>
        {/*Right picket */}
        <View
          style={{
            height: height * 0.25,
            width: 10,
            backgroundColor: 'black',
            position: 'absolute',
            top: 50,
            left: width / 2 + 85,
          }}
        ></View>
        {/*Picket bottom most*/}
        <View
          style={{
            height: 10,
            width: 150,
            backgroundColor: 'black',
            position: 'absolute',
            top: height * 0.25 + 40,
            left: width / 2 - 30,
          }}
        ></View>
        {/*Head*/}
        <View
          style={{
            width: 40,
            height: 40,
            borderWidth: 3,
            borderRadius: 60,
            position: 'absolute',
            top: 60,
            left: width / 2 - 20,
          }}
        ></View>
        {/*Torso*/}
        <View
          style={{
            width: 5,
            height: height * 0.25 - 100,
            backgroundColor: 'black',
            position: 'absolute',
            top: 100,
            left: width / 2 - 3,
          }}
        ></View>
        {/*Hands left*/}
        <View
          style={{
            height: 5,
            width: 30,
            backgroundColor: 'black',
            position: 'absolute',
            top: 120,
            left: width / 2 - 24,
            transform: [{ rotate: '60deg' }],
          }}
        ></View>
        {/*Hands right*/}
        <View
          style={{
            height: 5,
            width: 30,
            backgroundColor: 'black',
            position: 'absolute',
            top: 120,
            left: width / 2 - 7,
            transform: [{ rotate: '-60deg' }],
          }}
        ></View>
        {/*Leg left*/}
        <View
          style={{
            height: 5,
            width: 30,
            backgroundColor: 'black',
            position: 'absolute',
            top: height * 0.25 + 10,
            left: width / 2 - 24,
            transform: [{ rotate: '120deg' }],
          }}
        ></View>
        {/*Leg right*/}
        <View
          style={{
            height: 5,
            width: 30,
            backgroundColor: 'black',
            position: 'absolute',
            top: height * 0.25 + 10,
            left: width / 2 - 7,
            transform: [{ rotate: '-120deg' }],
          }}
        ></View>

        <View style={{}}></View>
        <View style={{}}></View>
        <View style={{}}></View>
      </View>
      <View style={{ flex: 1, flexBasis: '60%', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Word</Text>
          <Input placeholder="Word to guess" />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Missed</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>A, B, C, D, F</Text>
        </View>
        <View>
          <Input label="Tip" inputStyle={{ fontSize: 40 }} containerStyle={{ marginBottom: 10 }} placeholder="A" />
          <Button raised title="Guess" buttonStyle={{ backgroundColor: 'crimson' }} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Hangman;

const styles = StyleSheet.create({});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {box1,box2} from './allstyle';


const Header= ({title,id}) => {
  
  return (
    <View style={box1.test1}>
      <Text style={{color:'white',}}>{id}</Text>
    </View>
  );
};


Header.defaultProps={
  title:'salam bar shoma',
  id:12,
}


const styles= StyleSheet.create({
  main:{
    backgroundColor:'red',
  },
  sub :{
    padding:50,
  }

});

export default Header;

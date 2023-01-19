/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef,useCallback} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';


import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





export const box1=StyleSheet.create({
 main:{
  backgroundColor:'red'
 },
 box:{
  color:'pink',
 }


});

export const box2=StyleSheet.create({
  main:{
   backgroundColor:'red'
  },
  box:{
   padding:20
  }
 
 
 });
 


export const boxmain=StyleSheet.create({
  main:{
   backgroundColor:'red'
  },
  box:{
   padding:20
  }
 
 
 });

export default boxmain;
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





const styles=StyleSheet.create({
 main:{
  backgroundColor:'red'
 },
 box:{
  padding:20
 }


});


export default styles;

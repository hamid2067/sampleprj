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
import boxmain,{box2,box1} from './all'

const Htitle= ({title,id}) => {
  console.log("\n \n ********load again child");
  return (
  <View style={{backgroundColor:'blue',height:50,width:'100%',}}>
    <Text style={box1.box}>
      {title} : {id}
    </Text>
  </View>
  );
};

Htitle.defaultProps={
  title:'test',
  id:12,
}
// const styles=StyleSheet.create({
//  main:{
//   backgroundColor:'red'
//  },
//  box:{
//   padding:20
//  }


// });


export default Htitle;

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

import styles from './sty';
import Htitle from './htitle';

const App= () => {
  
const [num,setNum]=useState(0);

  const click=()=>{
    let temp=num+1 ;
    setNum(temp);
    console.log("\n ****** click occur"+num);
  }

  useEffect(()=>{
   
    console.log("\n \n **** reload num");
  },[num]);


  return (
  <SafeAreaView style={[styles.main]}>
   <Htitle  />

   <TouchableOpacity onPress={click}>
    <Text>click me</Text>
   </TouchableOpacity>

  </SafeAreaView>
  );
};

// const styles=StyleSheet.create({
//  main:{
//   backgroundColor:'red'
//  },
//  box:{
//   padding:20
//  }


// });


export default App;

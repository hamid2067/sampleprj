/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef,useCallback} from 'react';
import type {Node} from 'react';
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

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import mystyle from './mystyle';
import Header from './header';

const App1= () => {

  const [number,setNumber]=useState(0);

  useEffect(()=>{
    console.log("\n \n call me again");
  },[number]);
  
  const callfunc=(obj)=>{
    let n1=number+1;
    setNumber(n1);
  }
  
  return (
    <SafeAreaView style={[mystyle.main,{padding:5}]}>
     <Header  />
     <TouchableOpacity onPress={()=>callfunc('salam')} style={{height:responsiveHeight(10),backgroundColor:'green'}} >
        <Text>click me {number}</Text>
      </TouchableOpacity>


      <TouchableOpacity
              onPress={()=>{
              
              }}
              style={{marginLeft:10,marginRight:10}}>
           <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>


 <Image 
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require('./bg.jpeg')}
        />

<Image 
          style={{ width: 100, height: 100 }}
          source={{uri: 'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg'}}
        />

    </SafeAreaView>
  );
};



// const styles= StyleSheet.create({
//   main:{
//     backgroundColor:'red',
//   },
//   sub :{
//     padding:50,
//   }

// });

export default App1;

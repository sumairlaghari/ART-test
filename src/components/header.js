import React from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Header() {
    return (
        <View style={styles.header}>
                <TouchableOpacity style={{marginLeft:30}}>
                    <Text style={{color:'white',fontSize:30,}}>←</Text>
                </TouchableOpacity>
                <Text style={styles.galarytext}>GALLERY</Text>
            </View>
      );
  }

  const styles = StyleSheet.create({
    header:{
        width:wp(100),
        height:hp(30),
        backgroundColor:'#1C2A39',
        borderBottomLeftRadius:wp(100),
        borderBottomRightRadius:wp(100),
        alignItems:'center',
        //justifyContent:'center',
        flexDirection:'row',
    },
    galarytext:{
        fontSize:26,
        color:'white',
        fontWeight:'bold',
        marginLeft:70,
    },
  });
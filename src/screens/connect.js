import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../components/header';
import { addImage } from '../store/reducer';
import { connect } from "react-redux";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function Connect(props) {
    const [images, setImages]=useState([]);
    
    const selectImage = async () => {
    const result = await launchImageLibrary({selectionLimit:0});
    //console.log(result.assets.map((item)=>(item.uri)));
    
    if (!result.cancelled) {
        //let newArr = images.concat(result.uri);
        console.log(result.assets);
        setImages(result.assets.map((item)=>({name:Math.floor(Math.random() * 11)+"name",path:item.uri})));
        //console.log(images);
      }
    }

    const connectImage = () => {
        //props.addImage(images.map((item)=>(item)));
        images.map((item)=>(props.addImage(item)));
        //alert('hi');
        props.navigation.navigate('galary');
    }

    return (
        <View style={styles.container}>
            <Header/>
            <Text style={{color:'white',fontSize:18,marginTop:40,marginLeft:20}}>{images.length} Pictures Selected</Text>
            <View style={{width:wp(100),height:hp(10),marginTop:10,flexDirection:'row',alignItems:'center',paddingLeft:30,}}>
            {images.length != 0 && images.map((item)=>{
                return(
                    <View style={{width:wp(10),height:hp(6)}}>
                    <Image
                    //source={require("../assets/profile.jpg")}
                    source={{ uri: item.path }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                    />
                    </View>
                )
            })}
            <TouchableOpacity onPress={selectImage} style={{marginLeft:10}}>
                        <View style={{backgroundColor:'#5D0076',width:wp(6),height:wp(6),borderRadius:wp(100),alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'white'}}>+</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <Text style={{color:'white',marginLeft:20,marginTop:30}}>Turn on Auto Slide Feature</Text>
            <TouchableOpacity onPress={connectImage} style={{marginTop:40,marginLeft:wp(30),width:wp(40),height:hp(6),backgroundColor:'#5D0076',borderRadius:10,alignItems:'center',justifyContent:'center',}}>
                <Text style={{color:'white'}}>Connect</Text>
            </TouchableOpacity>
        </View>
      );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
  });

  const mapStateToProps = (state) => {
    return {
      images: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addImage: (obj) => dispatch(addImage(obj)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Connect);
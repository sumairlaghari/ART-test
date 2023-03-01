import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView,TouchableOpacity,Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../components/header';
import { addImage } from '../store/reducer';
import { connect,useSelector } from "react-redux";
import { TextInput } from 'react-native-gesture-handler';

function Galary(props) {
    const [images, setImages]=useState([]);
    const [imageFilter, setImageFilter]=useState();
    //console.log(useSelector(state=>state));
    //console.log(props);
    //console.log(props.images);
    useEffect(()=>{
        setImages(props.images);
        console.log(props.images);
    },[props.images])

    const filterImages = (val) => {
        let filterimage = images.filter((item) => item.name == val);
        //console.log(filterimage);
       setImageFilter(filterimage);
       console.log(imageFilter);
    }
    return (
        <View style={styles.container}>
            <Header/>
            <Text style={{color:'#15B0F8',fontSize:20,marginTop:20}}>All Photos</Text>
            <Text style={{color:'white',marginTop:10}}>Select photos to Display.</Text>
            <View style={{flexDirection:'row',marginVertical:30,alignItems:'center',}}>
            <View style={{width:wp(80),height:hp(8),borderWidth:1,borderColor:'white',}}>
                <TextInput style={{flex:1,color:'white'}} onChangeText={(val)=>{setImages(images.filter((item) => item.name == val))}} />
            </View>
            </View>
            <ScrollView contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',paddingHorizontal:20, paddingBottom:100}}>
            {images.length != 0 && images.map((item)=>{
                return(
                    <View style={{width:wp(28),height:hp(16),margin:2}}>
                    <Image
                    //source={require("../assets/profile.jpg")}
                    source={{ uri: item.path }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                    />
                    </View>
                )
            })}
            </ScrollView>
            <View style={{width:wp(100),height:hp(10),backgroundColor:'#1C2A39',borderTopLeftRadius:wp(100),borderTopRightRadius:wp(100),position:'absolute',bottom:0,alignItems:'center',justifyContent:'center',}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('connect')}>
                <Text style={{color:'white',}}>Proceed to Connect</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
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

  export default connect(mapStateToProps, mapDispatchToProps)(Galary);
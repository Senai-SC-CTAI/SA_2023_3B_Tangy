import { StyleSheet, Text, TouchableOpacity,View,Image, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "expo-router";
import Logo from "./Logo";

export default function Page() {

  const [logUser, setLogUser] = useState("");

  const navigation = useNavigation();
  
  async function logout(){
    await AsyncStorage.setItem("emailUser", "");
    navigation.navigate("index");
  }
  
  useEffect(()=>{
    const getUser = async () => {
      setLogUser(await AsyncStorage.getItem("emailUser"))
    }
    getUser();
  },[logUser])

  return (
    <View style={styles.container}>
      {/* <Image source={require('../Assets/img.png')} style={styles.logo}/> */}
      <Logo/>
      <Text style={styles.usertitle}>Logado como</Text>
      <Text style={styles.usertitle2}>{logUser}</Text>
      <View style={styles.botoeees}>
        <View style={styles.ostres}>
          
          <TouchableOpacity style={styles.qr}>
            <Link href="Escanear">
              <Text style={styles.qrtxt}>Escanear</Text>
              <MaterialIcons name="qr-code-2" size={67} color="white" style={styles.qrimg} />
            </Link>
          </TouchableOpacity>
          
          <View style={styles.osdois}>
            
              <TouchableOpacity style={styles.rqs}>
                <Link href="requisitar">
                  <Text style={styles.rqstxt}> Requisitar saída</Text>
                </Link>
              </TouchableOpacity>
            
            
              <TouchableOpacity style={styles.rqs}>
                <Link href="Cronograma_Estudante">
                  <Text style={styles.cronotxt}> Crônograma</Text>
                </Link>
              </TouchableOpacity>
            
          </View>
        </View>
        <View style={styles.asdasd}>

          
            <TouchableOpacity style={styles.hs}> 
              <Link href="Historico_Estudante">
                <Text style={styles.hstxt}>Historico de entrada e saida</Text>
              </Link>
            </TouchableOpacity>
          
        </View>
      
      </View>
        
        
          <TouchableOpacity onPress={e => logout()}  style={styles.saidabtn}>
            <Text style={styles.saidatxt}>Sair</Text>
          </TouchableOpacity>
        
      <Text style={styles.tangy}>Tangy.app @2023</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  botoeees:{
    width:"80%",
    marginTop:70,
    marginBottom:70,
    display:"flex",
    flexDirection:"column",
    gap:15,
    justifyContent: "center",
    alignItems: "center",
  },
  usertitle:{
    fontSize:18,
    marginTop:20
  },
  usertitle2:{
    color: "gray"
  },
  asdasd: {
    display: "flex",
    // backgroundColor: "red",
    // marginLeft: -35,
  },
  hs:{
    backgroundColor:"black",
    width: 350,
    height:55,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    // marginLeft: -10,

  },
  ostres:{
    display:"flex",
    flexDirection:"row",
    gap:15
  },
  qr:{
    height:130,
    width: 130,
    backgroundColor:"black",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center"
  },

  osdois:{
    height:"100%",
    display:"flex",
    flexDirection:"column",
    gap:15
  },
  rqs:{
    width: 200,
    height:55,
    backgroundColor:"black",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:3
  },
  qrtxt:{
    color:"white",
    fontSize:18,
   marginBottom:10,
  },
  rqstxt:{
    fontSize:18,
    color:"white",
    // height:2424
  },
  cronotxt:{
    fontSize:18,
    color:"white",
  },
  hstxt:{
    fontSize:18,
    color:"white",
  },
  saidatxt:{
    fontSize:18,
    color:"black",
  },
  saidabtn:{
    marginTop:50,
  },
  tangy:{
    fontSize:18,
    color:"#B6B6B6",
    marginTop:50,
  },
  
});
import React from "react";
import { StyleSheet, Text, View, Image, } from "react-native";


function App() {
  return <View style={styles.container}>
    <Image source={require('./assets/profile.jpg')} style={styles.image} />

    <View style={styles.mainContainer}>
      <Text style={styles.label}>Name</Text>
      <Text style={[styles.label,styles.info]}>Doreen Mensah</Text>
    </View>

    <View style={styles.mainContainer}>
      <Text style={styles.label}>Email</Text>
      <Text style={[styles.label,styles.info]}>doreen@gmail.com</Text>
    </View>

    <View style={styles.mainContainer}>
      <Text style={styles.label}>Gender</Text>
      <Text style={[styles.label,styles.info]}>Female</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal:20
  },
  image: {
    marginTop:100,
    width: 120,
    height: 120,
    marginBottom:20,
    alignSelf:'center',
    borderRadius:60
  },

  mainContainer: {
    flexDirection: "row",
    marginVertical:3
  },

  label:{
    borderColor:'black',
    borderWidth:1,
    fontSize:30,
    flex:3,
    paddingHorizontal:5
  },

info:{
  flex:7
}


})

export default App;

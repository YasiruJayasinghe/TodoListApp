import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const navigateToTodoList = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/shape.png")} style={styles.image1} />
      <Image
        source={require("../../assets/mobile.png")}
        style={styles.image2}
      />
      <Text style={styles.t1}>Get things done with Todo</Text>
      <View style={styles.para}>
        <Text style={styles.t2}>Welcome to Todo, </Text>
        <Text style={styles.t2}> your ultimate task companion. Stay</Text>
        <Text style={styles.t2}> organized, boost productivity, and </Text>
        <Text style={styles.t2}>achieve more with our intuitive Todo </Text>
        <Text style={styles.t2}>
          list app. Simplify your life, one task at a time.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToTodoList}>
        <Text style={styles.t3}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image2: {
    marginTop: 20,
    width: 220,
    height: 200,
  },
  t1: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 60,
  },
  t2: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#62D2C3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  t3: {
    fontSize: 20,
    fontWeight: "700",
  },
  para: {
    marginTop: 20,
  },
  image1: {
    marginRight: 170,
    marginTop: 0,
  },
});

export default Welcome;

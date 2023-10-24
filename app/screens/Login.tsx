import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  Auth,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth: Auth = getAuth();

  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigation.navigate("List");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/shape.png")} style={styles.image1} />
      <Text style={styles.t1}>Welcome Back !</Text>
      <Image source={require("../../assets/img.png")} style={styles.image2} />

      <View style={styles.form}>
        <Text style={styles.t3}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        />
        <Text style={styles.t3}>Password</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          placeholder="Password"
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity onPress={signIn} style={styles.button}>
        <Text style={styles.t4}>Login</Text>
      </TouchableOpacity>
      <View style={styles.already}>
        <Text style={styles.t5}>Don't have an account ?</Text>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.t6}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginLeft: 10,
    width: 330,
    borderRadius: 20,
    height: 50,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#62D2C3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 27,
  },

  image1: {
    marginRight: 170,
    marginTop: 0,
  },

  t1: {
    fontSize: 27,
    fontWeight: "700",
    marginTop: 0,
    textAlign: "center",
  },

  image2: {
    marginTop: 20,
    width: 200,
    height: 200,
    marginLeft: 70,
  },

  t3: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "500",
    padding: 10,
  },

  form: {
    marginTop: 10,
  },

  t4: {
    fontSize: 20,
    fontWeight: "700",
  },

  already: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  t5: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },

  t6: {
    fontSize: 15,
    fontWeight: "500",
    color: "#62D2C3",
    textAlign: "left",
  },
});

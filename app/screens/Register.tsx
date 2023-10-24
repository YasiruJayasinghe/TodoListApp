import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
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

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [Conpassword, setConpassword] = useState<string>("");
  
  const auth: Auth = getAuth();

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const signUp = async () => {
    if (password !== Conpassword) {
      alert("Passwords do not match. Please make sure your passwords match.");
      return;
    }

    try {
      const after = await createUserWithEmailAndPassword(auth, email, password);
      alert("Your account is created");
      navigation.navigate("Login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/shape.png")} style={styles.image1} />
      <Text style={styles.t1}>Welcome Onboard!</Text>
      <Text style={styles.t2}>Lets help you in completing your tasks</Text>
      <View style={styles.form}>
        <Text style={styles.t3}>Full name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text: string) => setName(text)}
          value={name}
        />
        <Text style={styles.t3}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        />
        <Text style={styles.t3}>Password</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Text style={styles.t3}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text: string) => setConpassword(text)}
          value={Conpassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.t4}>Register</Text>
      </TouchableOpacity>
      <View style={styles.already}>
        <Text style={styles.t5}>Already have an account ?</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.t6}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  t2: {
    fontSize: 17,
    fontWeight: "500",
    marginTop: 5,
    textAlign: "center",
  },

  t3: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "500",
    padding: 10,
  },

  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginLeft: 10,
    width: 330,
    borderRadius: 20,
    height: 50,
  },

  form: {
    marginTop: 10,
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

export default Register;

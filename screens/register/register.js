import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StackActions } from "@react-navigation/native";
import { ButtonLogReg } from "../../components/primary-button-logreg";
import { ButtonSecond } from "../../components/secondary-button-logreg";
import { FormText } from "../../components/form-text";
import { FormPassword } from "../../components/form-password";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (username === "" && password === "") {
      Alert.alert("Register Successful", "Welcome!");
      navigation.navigate("Home");
    } else {
      Alert.alert("Register Failed");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading2}>Welcome!</Text>
          <Text style={{ ...styles.subheading3, marginTop: 10 }}>
            Fill in with accurate and appropriate data
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <FormText title="Full Name" />
          <FormText title="Email" />
          <FormPassword title="Password" />
          <FormPassword title="Confirm Password" />
        </View>

        <View style={{ flex: 1, marginTop: 32 }}>
          <ButtonLogReg title="Regsiter" onPress={handleRegister} />

          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <View>
              <Text style={styles.separatorText}>OR</Text>
            </View>
            <View style={styles.line} />
          </View>

          <View style={{ marginTop: 32 }}>
            <ButtonSecond title="Google" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 13, paddingRight: 2 }}>
            Dont have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 600, color: "#638CCE" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 56,
  },
  logoContainer: {
    flex: 1,
    width: 90,
    height: 90,
    backgroundColor: "#FE5B6E",
    borderRadius: 10,
    justifyContent: "center",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },
  separatorText: {
    width: 50,
    textAlign: "center",
    color: "grey",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  formContainer: {
    flex: 1,
    marginTop: 16,
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  botContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    height: 60,
    color: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 30,
    borderColor: "grey",
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#3B95FF",
    marginTop: 64,
  },
  logoImg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
  },
  passIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingEnd: 15,
  },
  textContainer: {
    marginTop: 24,
    marginBottom: 12,
  },
  heading2: {
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 28,
  },
  subheading2: {
    fontSize: 16,
    color: "white",
  },
  subheading3: {
    color: "black",
    fontWeight: "light",
    fontSize: 14,
  },
});

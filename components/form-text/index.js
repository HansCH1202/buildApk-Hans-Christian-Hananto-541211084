import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import react, { useState } from "react";

function FormText({ title, value, onChangeText }) {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        autoCapitalize="none"
        value={value}
        placeholder={title}
      />
    </View>
  );
}

export { FormText };

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 16,
  },
  input: {
    height: 60,
    color: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 30,
    borderColor: "grey",
  },
});

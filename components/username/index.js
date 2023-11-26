import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const Username = ({ username, textTop, textBottom }) => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="medium"
        source={require("../../assets/images/hans.png")}
        containerStyle={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textTop}>{textTop}</Text>
        <Text style={styles.textBottom}>{textBottom}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  avatar: {
    marginRight: 12,
  },
  textContainer: {
    flexDirection: "column",
  },
  textTop: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textBottom: {
    fontSize: 16,
  },
});

export default Username;

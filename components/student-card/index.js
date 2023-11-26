import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const StudentCard = ({ name, email, onCardPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress}>
      <View style={styles.content}>
        <View style={styles.leftColumn}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Icon
            name="chevron-right"
            type="material-icons"
            color="#000000"
            size={40}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#3498db", // Warna biru
  },
});

export default StudentCard;

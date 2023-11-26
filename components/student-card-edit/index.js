import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon, Avatar } from "react-native-elements";

const StudentCardEdit = ({ name, email, onCardPress, image }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onCardPress}>
      <View style={styles.cardContent}>
        <Avatar
          rounded
          size="medium"
          source={image}
          containerStyle={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Icon
          name="edit"
          type="material-icons"
          color="#3498db"
          size={24}
          onPress={onCardPress}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#3498db",
  },
});

export default StudentCardEdit;

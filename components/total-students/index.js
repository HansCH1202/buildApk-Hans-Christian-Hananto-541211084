import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TotalStudent = ({
  totalStudents,
  onlineStudents,
  offlineStudents,
  height,
}) => {
  return (
    <View style={[styles.container, { height }]}>
      <View style={styles.content}>
        <View style={styles.column}>
          <Text style={styles.textTop}>{totalStudents}</Text>
          <Text style={styles.textBottom}>Total Siswa</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.column}>
          <Text style={styles.textTop}>{onlineStudents}</Text>
          <Text style={styles.textBottom}>Siswa Online</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.column}>
          <Text style={styles.textTop}>{offlineStudents}</Text>
          <Text style={styles.textBottom}>Siswa Offline</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  separator: {
    height: "100%",
    width: 1,
    backgroundColor: "#cccccc",
  },
  textTop: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  textBottom: {
    fontSize: 16,
  },
});

export default TotalStudent;

import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { Icon } from "react-native-elements";

import Username from "../../components/username";
import TotalStudent from "../../components/total-students";
import SearchBar from "../../components/search";
import StudentCard from "../../components/student-card";
import PrimaryButton from "../../components/primary-button";

const HomeScreen = ({ navigation }) => {
  const handleSearchPress = () => {};

  const handleCardPress = () => {
    console.log("Card Pressed!");
    navigation.navigate("Detail");
  };

  const handleCreatePress = () => {
    console.log("Create Pressed!");
    navigation.navigate("Create");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Username
          username="Admin"
          textTop="Hi, Admin!"
          textBottom="Selamat datang"
        />
        <View style={styles.notificationContainer}>
          <Icon
            name="notifications"
            type="material-icons"
            color="#000000"
            size={22}
          />
        </View>
      </View>

      <SearchBar
        placeholder="Cari siswa..."
        onSearchPress={handleSearchPress}
      />

      <Text style={styles.sectionTitle}>Total Siswa</Text>

      <TotalStudent
        totalStudents="100"
        onlineStudents="75"
        offlineStudents="25"
        height={100}
      />

      <Text style={styles.sectionTitle}>Data Siswa</Text>

      <View style={styles.studentCardsContainer}>
        <StudentCard
          name="Hans Christian Hananto"
          email="hans.ch@gmail.com"
          onCardPress={handleCardPress}
        />
        <View style={styles.cardSeparator} />
        <StudentCard
          name="Jabriel Bamasena"
          email="jabrielbams@gmail.com"
          onCardPress={handleCardPress}
        />
        <View style={styles.cardSeparator} />
        <StudentCard
          name="Devrizal Maryuanid"
          email="devrizal@gmail.com"
          onCardPress={handleCardPress}
        />
        <View style={styles.cardSeparator} />
        <StudentCard
          name="Vincentius Rangga"
          email="vincentius@gmail.com"
          onCardPress={handleCardPress}
        />
      </View>

      <PrimaryButton text="Tambah Data" onPress={handleCreatePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationContainer: {
    borderWidth: 2,
    borderColor: "#e5e5e5",
    borderRadius: 50,
    padding: 10,
  },
  studentCardsContainer: {
    marginTop: 0,
  },
  cardSeparator: {
    height: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;

import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import StudentCard from "../../components/student-card";
import CreateField from "../../components/create-fields";
import PrimaryButton from "../../components/primary-button";

const DetailScreen = () => {
  const handleSavePress = () => {
    console.log("Save Pressed!");
  };
  const [fullName, setFullName] = useState("");
  const [nis, setNIS] = useState("");
  const [absen, setAbsen] = useState("");
  const [kelas, setKelas] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Kartu Siswa</Text>
      <StudentCard
        name="Student Name"
        email="Student Email"
        image={require("../../assets/images/hans.png")}
      />
      <View style={styles.cardSeparator} />
      <View style={styles.cardSeparator} />
      <CreateField
        label="Nama Lengkap"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Masukkan nama lengkap"
      />
      <View style={styles.cardSeparator} />
      <CreateField
        label="NIS"
        value={nis}
        onChangeText={setNIS}
        placeholder="Masukkan NIS"
      />
      <View style={styles.cardSeparator} />
      <CreateField
        label="Nomor Absen"
        value={absen}
        onChangeText={setAbsen}
        placeholder="Masukkan nomor absen"
      />
      <View style={styles.cardSeparator} />
      <CreateField
        label="Kelas"
        value={kelas}
        onChangeText={setKelas}
        placeholder="Masukkan kelas"
      />
      <View style={styles.cardSeparator} />
      <CreateField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Masukkan email"
      />

      <PrimaryButton text="Tambah Data" onPress={handleSavePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16,
  },
  cardSeparator: {
    height: 12,
  },
});

export default DetailScreen;

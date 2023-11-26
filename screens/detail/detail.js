import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import StudentCardEdit from "../../components/student-card-edit";
import InputField from "../../components/input-fields";
import DeleteButton from "../../components/delete-button";

const DetailScreen = () => {
  const handelDeletePress = () => {
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
      <StudentCardEdit
        name="Hans Christian Hananto"
        email="hans.ch@gmail.com"
        image={require("../../assets/images/hans.png")}
      />
      <View style={styles.cardSeparator} />
      <InputField
        label="Nama Lengkap"
        value="Hans Christan Hananto"
        leftIcon="person"
      />
      <View style={styles.cardSeparator} />
      <InputField label="NIS" value="541211084" leftIcon="school" />
      <View style={styles.cardSeparator} />
      <InputField label="Nomor Absen" value="05" leftIcon="fingerprint" />
      <View style={styles.cardSeparator} />
      <InputField label="Kelas" value="XII RPL 3" leftIcon="class" />
      <View style={styles.cardSeparator} />
      <InputField label="Email" value="hans.ch@gmail.com" leftIcon="mail" />

      <DeleteButton text="Hapus Data" onPress={handelDeletePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 56,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cardSeparator: {
    height: 12,
  },
});

export default DetailScreen;

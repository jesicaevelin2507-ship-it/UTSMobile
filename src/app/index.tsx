import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoCard from "../components/InfoCard";

const DAFTAR_MAHASISWA = [
  { id: "1", nama: "Alifia Putri", prodi: "Sistem Informasi" },
  { id: "2", nama: "Budi Santoso", prodi: "Teknologi Informasi" },
  { id: "3", nama: "Citra Dewi", prodi: "Sistem Informasi" },
  { id: "4", nama: "Dimas Anggara", prodi: "Teknik Informatika" },
  { id: "5", nama: "Eka Nur Safitri", prodi: "Sistem Informasi" },
  { id: "6", nama: "Fajar Ramadhan", prodi: "Teknologi Informasi" },
];

export default function HomeScreen() {
  const [keyword, setKeyword] = useState("");

  const mahasiswaFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mahasiswaFilter}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <Text style={styles.heading}>UTS Pemrograman Mobile</Text>
            <Text style={styles.subtitle}>React Native Expo</Text>

            <Text style={styles.sectionTitle}>Soal 1: InfoCard</Text>

            <InfoCard
              title="Tugas Pemrograman Mobile"
              status="selesai"
              onPress={() => Alert.alert("Detail", "Tugas sudah selesai.")}
            />

            <InfoCard
              title="Tugas Pencarian Mahasiswa"
              status="proses"
              onPress={() => Alert.alert("Detail", "Tugas sedang dikerjakan.")}
            />

            <Text style={styles.sectionTitle}>Soal 2: Pencarian Mahasiswa</Text>

            <TextInput
              style={styles.input}
              placeholder="Cari nama mahasiswa..."
              value={keyword}
              onChangeText={setKeyword}
            />
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FB",
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#1D4ED8",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 10,
    marginBottom: 14,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    marginBottom: 14,
  },
  studentCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  studentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },
  prodi: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
  },
  empty: {
    textAlign: "center",
    color: "#DC2626",
    fontWeight: "bold",
    padding: 20,
  },
});

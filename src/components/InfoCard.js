import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InfoCard({ title, status, onPress }) {
  const selesai = status === "selesai";

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, selesai ? styles.selesai : styles.proses]}>
        <Text style={styles.statusText}>{status}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 12,
  },
  badge: {
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  selesai: {
    backgroundColor: "#DCFCE7",
  },
  proses: {
    backgroundColor: "#FFEDD5",
  },
  statusText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
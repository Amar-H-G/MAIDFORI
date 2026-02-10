import { router } from "expo-router";
import { Calendar, Clock, MapPin, User } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// onAccept prop add kora hoyeche
const UpcomingBookingCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.title}>Child Care</Text>
      <View style={styles.timerRow}>
        <Clock size={16} color="#4B5563" style={{ marginRight: 4 }} />
        <Text style={styles.timer}>05:30</Text>
      </View>
    </View>

    <View style={styles.userRow}>
      <View style={styles.iconBackgroundSmall}>
        <User size={14} color="#374151" />
      </View>
      <Text style={styles.userName}>Kari Chanchoda</Text>
    </View>

    <View style={styles.infoRow}>
      <View style={styles.rowLeft}>
        <MapPin size={16} color="#1e1b4b" style={styles.inlineIcon} />
        <Text style={styles.address}>
          4517 Washington Ave. Manchester Kentucky 39495
        </Text>
      </View>
      <Text style={styles.distance}>2km from you</Text>
    </View>

    <View style={styles.infoRow}>
      <View style={styles.rowLeft}>
        <Calendar size={16} color="#1e1b4b" style={styles.inlineIcon} />
        <Text style={styles.time}>4:00PM • Today</Text>
      </View>
      <Text style={styles.price}>₹220/h</Text>
    </View>
    <Text style={styles.duration}>Duration: 2 Hours</Text>

    <View style={styles.btnGroup}>
      <TouchableOpacity style={styles.rejectBtn}>
        <Text style={styles.rejectText}>Reject</Text>
      </TouchableOpacity>

      {/* Accept button click korle onAccept trigger hobe */}
      <TouchableOpacity
        style={styles.acceptBtn}
        onPress={() => router.push("/jobDetailes")}
      >
        <Text style={styles.acceptText}>Accept Job</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default UpcomingBookingCard;

const styles = StyleSheet.create({
  // ... (StyleSheet same thakbe)
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#1e1b4b" },
  timerRow: { flexDirection: "row", alignItems: "center" },
  timer: { color: "#4B5563", fontSize: 14, fontWeight: "500" },
  userRow: { flexDirection: "row", alignItems: "center", marginVertical: 12 },
  iconBackgroundSmall: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  userName: { fontWeight: "600", color: "#374151" },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 12,
  },
  rowLeft: { flexDirection: "row", flex: 0.7, alignItems: "flex-start" },
  inlineIcon: { marginRight: 6, marginTop: 1 },
  address: { flex: 1, fontSize: 12, color: "#6B7280", lineHeight: 18 },
  distance: { fontSize: 12, fontWeight: "bold", color: "#374151" },
  time: { fontSize: 13, color: "#374151" },
  price: { fontSize: 14, fontWeight: "bold", color: "#374151" },
  duration: {
    textAlign: "right",
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 5,
  },
  btnGroup: { flexDirection: "row", gap: 10, marginTop: 15 },
  rejectBtn: {
    flex: 1,
    backgroundColor: "#FFF1F2",
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  rejectText: { color: "#EF4444", fontWeight: "bold" },
  acceptBtn: {
    flex: 1,
    backgroundColor: "#4D7C0F",
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptText: { color: "white", fontWeight: "bold" },
});

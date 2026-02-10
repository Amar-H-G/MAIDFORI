import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { User, MapPin, Calendar } from "lucide-react-native";

const AcceptedJobCard = ({ onStartJob }) => {
  return (
    <View style={styles.card}>
      {/* Header Info */}
      <View style={styles.headerRow}>
        <Text style={styles.jobTitle}>Child Care</Text>
        <View style={styles.iconGroup}>
          {/* Chat Icon - Custom PNG */}
          <TouchableOpacity style={styles.chatIconBtn}>
            <Image
              source={require("../../assets/app/jobs/messages-2.png")}
              style={styles.iconImage}
              resizeMode="contain"
            />
            {/* <View style={styles.onlineDot} /> */}
          </TouchableOpacity>

          {/* Call Icon - Custom PNG */}
          <TouchableOpacity style={styles.phoneIconBtn}>
            <Image
              source={require("../../assets/app/jobs/material-symbols_call.png")}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Body */}
      <View style={styles.contentBody}>
        {/* Left Side */}
        <View style={styles.leftCol}>
          <View style={styles.infoRow}>
            <User size={18} color="#71717a" />
            <Text style={styles.userName}>Kari Chanchoda</Text>
          </View>
          <View style={[styles.infoRow, { alignItems: "flex-start" }]}>
            <MapPin size={18} color="#1e1b4b" />
            <Text style={styles.addressText}>
              4517 Washington Ave. Mans-,{"\n"}chester Kentucky 39495
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Calendar size={18} color="#71717a" />
            <Text style={styles.dateTimeText}>4:00PM • Today</Text>
          </View>
        </View>

        {/* Right Side */}
        <View style={styles.rightCol}>
          <Text style={styles.distanceText}>2km from you</Text>
          <Text style={styles.priceText}>₹220/h</Text>
          <Text style={styles.durationText}>Duration: 2 Hours</Text>
        </View>
      </View>

      {/* Footer Button Section - Fixed as per Image 2 */}
      <View style={styles.footerRow}>
        {/* Location Icon Circular Button */}
        <TouchableOpacity style={styles.locationBtn}>
          <Image
            source={require("../../assets/app/jobs/mage_location-fill.png")}
            style={styles.locationImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Teal Start Job Button */}
        <TouchableOpacity style={styles.startBtn} onPress={onStartJob}>
          <Text style={styles.startBtnText}>Start Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  jobTitle: { fontSize: 15, fontWeight: "bold", color: "#312e81" },
  iconGroup: { flexDirection: "row", gap: 12 },

  // Icon Buttons
  phoneIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f97316", // Orange for Call
    justifyContent: "center",
    alignItems: "center",
  },
  chatIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2E2E74", // Dark Blue for Chat
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 24,
    height: 24,
    // tintColor: "white", // Ensure icons are white if they are flat
  },
  contentBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  leftCol: { flex: 1.2, gap: 10 },
  rightCol: { flex: 0.8, alignItems: "flex-end", justifyContent: "center" },
  infoRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  userName: { fontSize: 13, fontWeight: "600", color: "#3f3f46" },
  addressText: { fontSize: 12, color: "#52525b", lineHeight: 16 },
  dateTimeText: { fontSize: 13, color: "#52525b" },
  distanceText: { fontSize: 13, fontWeight: "600", color: "#3f3f46" },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#18181b",
    marginVertical: 4,
  },
  durationText: { fontSize: 11, color: "#71717a" },

  // Footer Row Alignment
  footerRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginTop: 5,
  },
  locationBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f3f4f6", // Light grey background for location circle
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 24,
    height: 24,
  },
  startBtn: {
    flex: 1,
    backgroundColor: "#008B8B", // Exact Teal color from image
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  startBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AcceptedJobCard;

import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  Modal,
  ScrollView,
  Platform,
} from "react-native";
import { X, MapPin, Phone, MessageSquare, Info } from "lucide-react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const JobDetailsDrawer = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      // Prothom image-er moto full screen-er kachakachi uthbe (top padding 50-60 rakhchi)
      Animated.spring(slideAnim, {
        toValue: Platform.OS === "ios" ? 60 : 40,
        useNativeDriver: true,
        friction: 9,
        tension: 50,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: SCREEN_HEIGHT,
      duration: 250,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        {/* Backdrop color ekhon #1E1E1E hobe kintu opacity thakbe jate pichon-er content halka dekha jay */}
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={handleClose}
        />

        <Animated.View
          style={[styles.drawer, { transform: [{ translateY: slideAnim }] }]}
        >
          {/* Close Button Top - Figma-r moto style */}
          <View style={styles.closeBtnContainer}>
            <TouchableOpacity onPress={handleClose} style={styles.closeCircle}>
              <X size={24} color="#1E1E1E" strokeWidth={3} />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.mainTitle}>Child Care</Text>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
            >
              {/* Job Info Section */}
              <View style={styles.jobInfoSection}>
                <Text style={styles.dateText}>Today, 4:00 PM - 6:00 PM</Text>
                <View style={styles.userRow}>
                  <Text style={styles.userName}>John Doe</Text>
                  <View style={styles.dot} />
                  <Text style={styles.addressLine}>
                    4517 Washington Ave. Manchester, Kentucky
                  </Text>
                </View>

                <View style={styles.contactRow}>
                  <View style={styles.distanceWrapper}>
                    <MapPin
                      size={18}
                      color="#1E1E1E"
                      fill="rgba(30,30,30,0.1)"
                    />
                    <Text style={styles.distanceText}>2km from you</Text>
                  </View>

                  <View style={styles.actionIcons}>
                    <TouchableOpacity style={styles.phoneCircle}>
                      <Phone size={22} color="white" fill="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatCircle}>
                      <MessageSquare size={22} color="#1e1b4b" />
                      <View style={styles.activeStatusDot} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Job Details Table */}
              <View style={styles.detailsBox}>
                <Text style={styles.sectionLabel}>Job Details</Text>

                <View style={styles.detailItem}>
                  <Text style={styles.label}>Child Care</Text>
                  <Text style={styles.value}>₹220/h</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.label}>Duration</Text>
                  <Text style={styles.value}>2 hours</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.label}>Surge price</Text>
                  <Text style={styles.value}>₹20</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.detailItem}>
                  <Text style={styles.estimatedLabel}>Estimated Earnings</Text>
                  <Text style={styles.estimatedValue}>₹330/h</Text>
                </View>
              </View>

              {/* Info Alert */}
              <View style={styles.infoAlert}>
                <Info size={16} color="#4D7C0F" />
                <Text style={styles.infoText}>
                  Amount will be calculated based on actual time.
                </Text>
              </View>

              {/* Map Image */}
              <Image
                source={{
                  uri: "https://pbs.twimg.com/media/Dui4MkLWoAAC2mU.jpg",
                }}
                style={styles.mapImage}
              />

              {/* Start Button */}
              <TouchableOpacity style={styles.startBtn}>
                <Text style={styles.startBtnText}>Start Job</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default JobDetailsDrawer;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#1E1E1E", // #1E1E1E color with opacity (99)
    justifyContent: "flex-end",
  },
  backdrop: { ...StyleSheet.absoluteFillObject },
  drawer: {
    backgroundColor: "white",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    height: SCREEN_HEIGHT - 200, // Screen er pray purotai cover korbe
    width: "100%",
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  closeBtnContainer: {
    alignItems: "center",
    marginTop: -70, // Cross button-ta drawer er upore thakbe Figma design moto
    marginBottom: 20,
  },
  closeCircle: {
    width: 54,
    height: 54,
    backgroundColor: "white",
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  contentContainer: { flex: 1, paddingHorizontal: 20 },
  header: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora-Bold",
  },

  jobInfoSection: { paddingVertical: 20 },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1b4b",
    marginBottom: 10,
    fontFamily: "Sora-Bold",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  userName: { color: "#4b5563", fontSize: 14, fontFamily: "Montserrat-Medium" },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#4b5563",
    marginHorizontal: 8,
  },
  addressLine: {
    color: "#4b5563",
    fontSize: 14,
    flexShrink: 1,
    fontFamily: "Montserrat-Regular",
  },

  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  distanceWrapper: { flexDirection: "row", alignItems: "center" },
  distanceText: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#1E1E1E",
    fontSize: 15,
  },

  actionIcons: { flexDirection: "row", gap: 15 },
  phoneCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#f97316",
    justifyContent: "center",
    alignItems: "center",
  },
  chatCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },
  activeStatusDot: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4d7c0f",
    borderWidth: 2,
    borderColor: "white",
  },

  detailsBox: {
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    padding: 20,
    marginVertical: 15,
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#1E1E1E",
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  label: { color: "#6b7280", fontSize: 14, fontFamily: "Montserrat-Medium" },
  value: { fontWeight: "bold", color: "#1E1E1E", fontSize: 15 },
  divider: { height: 1, backgroundColor: "#e5e7eb", marginVertical: 12 },
  estimatedLabel: { fontWeight: "bold", color: "#1E1E1E", fontSize: 16 },
  estimatedValue: { fontWeight: "bold", color: "#1E1E1E", fontSize: 16 },

  infoAlert: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcfce7",
  },
  infoText: {
    marginLeft: 10,
    fontSize: 12,
    color: "#166534",
    fontFamily: "Montserrat-Medium",
  },

  mapImage: { width: "100%", height: 140, borderRadius: 16, marginTop: 25 },
  startBtn: {
    backgroundColor: "#4d7c0f",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  startBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Sora-Bold",
  },
});

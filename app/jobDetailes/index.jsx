import { useRouter } from "expo-router";
import {
  ChevronLeft,
  Info,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react-native";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPVerificationModal from "../../components/OtpVerification/jobStartWithOtp";
import { StatusBar } from "expo-status-bar";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const JobDetailsScreen = ({ navigation }) => {
  // Navigation handle korar jonno logic
  const router = useRouter(); // Router instance initialize
  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    // Eta automatic pichon-er parent screen-e niye jabe
    if (router.canGoBack()) {
      router.back();
    } else {
      // Jodi pichone kichu na thake, tobe specific path-e pathate paro
      router.replace("/"); // '/' mane holo tomar home ba root index file
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="white" translucent={false} />
      <View style={styles.mainContainer}>
        {/* Updated Header Section with Back Button */}
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <ChevronLeft size={28} color="#1e1b4b" strokeWidth={2.5} />
          </TouchableOpacity>
          <Text style={styles.mainTitle}>Child Care</Text>
        </View>

        {/* Content Body */}
        <View style={styles.contentBody}>
          {/* Job Meta Info */}
          <View style={styles.section}>
            <Text style={styles.dateText}>Today, 4:00 PM - 6:00 PM</Text>
            <View style={styles.userRow}>
              <Text style={styles.userName}>John Doe</Text>
              <View style={styles.dot} />
              <Text style={styles.addressLine} numberOfLines={2}>
                4517 Washington Ave. Manchester, Kentucky
              </Text>
            </View>

            <View style={styles.contactRow}>
              <View style={styles.distanceWrapper}>
                <MapPin size={20} color="#4b5563" />
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

          {/* Pricing Details Box */}
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

          {/* Alert Info */}
          <View style={styles.infoAlert}>
            <Info size={18} color="#4D7C0F" />
            <Text style={styles.infoText}>
              Amount will be calculated based on actual time.
            </Text>
          </View>

          {/* Map Section (Flexible height) */}
          <View style={styles.mapContainer}>
            <Image
              source={{
                uri: "https://pbs.twimg.com/media/Dui4MkLWoAAC2mU.jpg",
              }}
              style={styles.mapImage}
            />
          </View>

          {/* Action Button */}
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.startBtnText}>Start Job</Text>
          </TouchableOpacity>
        </View>
      </View>
      <OTPVerificationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onVerify={(code) => console.log("OTP is:", code)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerSection: {
    flexDirection: "row", // Horizontal layout jonno
    alignItems: "center", // Vertically center korar jonno
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  backButton: {
    marginRight: 10, // Title theke ektu gap
    padding: 5, // Clickable area baranor jonno
    marginLeft: -5, // Icon alignment adjust korar jonno
  },
  mainTitle: {
    fontSize: 24, // Text ektu adjust kora hoyeche jate button-er sathe thik thake
    fontWeight: "bold",
    color: "#1e1b4b",
  },
  contentBody: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  section: {
    marginVertical: 10,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3730a3",
    marginBottom: 5,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userName: { color: "#4b5563", fontSize: 15, fontWeight: "600" },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#4b5563",
    marginHorizontal: 8,
  },
  addressLine: {
    color: "#6b7280",
    fontSize: 14,
    flex: 1,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  distanceWrapper: { flexDirection: "row", alignItems: "center" },
  distanceText: {
    marginLeft: 8,
    fontWeight: "700",
    color: "#1E1E1E",
    fontSize: 16,
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
    backgroundColor: "#f9fafb",
    borderRadius: 20,
    padding: 18,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1E1E1E",
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: { color: "#6b7280", fontSize: 15 },
  value: { fontWeight: "bold", color: "#1E1E1E", fontSize: 16 },
  divider: { height: 1, backgroundColor: "#e5e7eb", marginVertical: 8 },
  estimatedLabel: { fontWeight: "bold", color: "#1E1E1E", fontSize: 17 },
  estimatedValue: { fontWeight: "bold", color: "#1E1E1E", fontSize: 17 },
  infoAlert: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    padding: 15,
    borderRadius: 12,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#166534",
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    marginVertical: 15,
    minHeight: 150,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  startBtn: {
    backgroundColor: "#4d7c0f",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  startBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default JobDetailsScreen;

import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Modal,
  ScrollView,
  Platform,
} from "react-native";
import { ChevronLeft, Calendar as CalendarIcon } from "lucide-react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const WalletHistoryDrawer = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      // Nich theke opore uthar animation
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        friction: 9,
        tension: 40,
      }).start();
    } else {
      // Bondho hobar somoy nicher dike neme jabe
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

  const historyData = [
    {
      id: "123456AA87",
      acc: "78******3936",
      date: "08 July, 2024",
      amount: "+₹1,455",
      status: "Success",
      color: "#2FCA00",
    },
    {
      id: "123456AA87",
      acc: "78******3936",
      date: "08 July, 2024",
      amount: "-₹1,455",
      status: "Failed",
      color: "#FF6565",
    },
  ];

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <Animated.View
          style={[styles.drawer, { transform: [{ translateY: slideAnim }] }]}
        >
          {/* Header with Back Function */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleClose} style={styles.backBtn}>
              <ChevronLeft size={24} color="#1e1b4b" strokeWidth={3} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Wallet History</Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollBody}
          >
            <View style={styles.card}>
              {historyData.map((item, index) => (
                <View key={index}>
                  <View style={styles.itemRow}>
                    <View style={styles.infoCol}>
                      <Text style={styles.accText}>
                        Account Number: {item.acc}
                      </Text>
                      <Text style={styles.subText}>
                        Transaction ID: {item.id}
                      </Text>
                      <Text style={styles.subText}>{item.date}</Text>
                    </View>

                    <View style={styles.statusCol}>
                      <View
                        style={[styles.badge, { backgroundColor: item.color }]}
                      >
                        <Text style={styles.badgeText}>{item.status}</Text>
                      </View>
                      <Text style={[styles.amountText, { color: item.color }]}>
                        {item.amount}
                      </Text>
                    </View>
                  </View>
                  {index < historyData.length - 1 && (
                    <View style={styles.divider} />
                  )}
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Floating Calendar Button (Figma) */}
          <TouchableOpacity style={styles.fab}>
            <CalendarIcon size={24} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default WalletHistoryDrawer;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  drawer: {
    flex: 1,
    backgroundColor: "white",
    // marginTop: Platform.OS === "ios" ? 50 : 20,
    // borderTopLeftRadius: 28,
    // borderTopRightRadius: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  backBtn: { marginRight: 15 },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora-Bold",
  },
  scrollBody: { padding: 20 },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 5,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  infoCol: { flex: 1 },
  accText: {
    fontSize: 12,
    color: "#374151",
    fontFamily: "Poppins-Regular",
    marginBottom: 4,
  },
  subText: {
    fontSize: 11,
    color: "#6b7280",
    fontFamily: "Poppins-Regular",
    marginBottom: 2,
  },
  statusCol: { alignItems: "flex-end" },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 60,
    marginBottom: 8,
  },
  badgeText: {
    color: "white",
    fontSize: 11,
    fontFamily: "Poppins-Regular",
  },
  amountText: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Sora-Bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginHorizontal: 16,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1e1b4b",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

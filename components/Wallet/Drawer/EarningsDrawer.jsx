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

const EarningsDrawer = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0, // Full screen porjonto uthbe
        useNativeDriver: true,
        friction: 8,
        tension: 40,
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

  const transactionData = [
    {
      id: "123456AA87",
      date: "08 July, 2024",
      amount: "₹1,455",
      title: "Child care",
      status: "Pending",
    },
    {
      id: "123456AA87",
      date: "08 July, 2024",
      amount: "₹1,455",
      title: "Child care",
      status: "Pending",
    },
    {
      id: "123456AA87",
      date: "08 July, 2024",
      amount: "₹1,455",
      title: "Child care",
      status: "Pending",
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
          {/* Custom Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleClose} style={styles.backBtn}>
              <ChevronLeft size={24} color="#1e1b4b" strokeWidth={3} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Earnings</Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.card}>
              {transactionData.map((item, index) => (
                <View key={index}>
                  <View style={styles.transactionItem}>
                    <View style={styles.itemHeader}>
                      <Text style={styles.jobTitle}>{item.title}</Text>
                      <View style={styles.pendingBadge}>
                        <Text style={styles.pendingText}>{item.status}</Text>
                      </View>
                    </View>

                    <Text style={styles.infoText}>{item.date}</Text>
                    <Text style={styles.infoText}>
                      Transaction ID: {item.id}
                    </Text>
                    <Text style={styles.amountText}>{item.amount}</Text>
                  </View>
                  {index < transactionData.length - 1 && (
                    <View style={styles.divider} />
                  )}
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Floating Calendar Button */}
          <TouchableOpacity style={styles.fab}>
            <CalendarIcon size={24} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default EarningsDrawer;

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)" },
  drawer: {
    flex: 1,
    backgroundColor: "white",
    // marginTop: Platform.OS === "ios" ? 50 : 20, // Status bar area bad diye
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderBottomWidth: 1,
    paddingTop: 20,
    // borderBottomColor: "#f3f4f6",
  },
  backBtn: { marginRight: 15 },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora-Bold",
  },

  scrollContent: { padding: 20 },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 5,
  },
  transactionItem: { padding: 16 },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora-Bold",
  },
  pendingBadge: {
    backgroundColor: "#d97706",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  pendingText: { color: "white", fontSize: 11, fontWeight: "500" },

  infoText: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 4,
    fontFamily: "Montserrat-Regular",
  },
  amountText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e1b4b",
    marginTop: 4,
    fontFamily: "Sora-Bold",
  },
  divider: { height: 1, backgroundColor: "#e5e7eb", marginHorizontal: 16 },

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

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { ChevronLeft, Construction } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const NotFoundScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color="#1e1b4b" strokeWidth={3} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Under Construction Icon */}
        <View style={styles.iconCircle}>
          <Construction size={60} color="#f97316" strokeWidth={1.5} />
        </View>

        {/* Message Section */}
        <Text style={styles.title}>Feature Not Found</Text>
        <Text style={styles.description}>
          These features are currently not implemented. So please check others
          for now.
        </Text>

        {/* Action Button */}
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff7ed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora-Bold",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 22,
    fontFamily: "Montserrat-Medium",
    marginBottom: 40,
  },
  goBackBtn: {
    backgroundColor: "#1e1b4b",
    width: width * 0.6,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sora-SemiBold",
  },
});

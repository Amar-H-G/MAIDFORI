import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const CompleteAccount = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);
  const [service, setService] = useState("Barber");
  const [showDropdown, setShowDropdown] = useState(false);

  /* ---------- Image Picker ---------- */
  const pickImage = () => {
    launchImageLibrary({ mediaType: "photo", quality: 0.7 }, (response) => {
      if (!response.didCancel && response.assets?.length > 0) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Complete your account</Text>
        </View>

        {/* Profile Image / Icon Placeholder */}
        <View style={styles.profileWrapper}>
          <View style={styles.imageContainer}>
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.iconPlaceholder}>
                {/* person icon-ta beshi bhalo center hoy person-circle theke */}
                <Ionicons name="person" size={50} color="#ccc" />
              </View>
            )}
          </View>
          <Pressable style={styles.editIcon} onPress={pickImage}>
            <Ionicons name="pencil" size={16} color="#fff" />
          </Pressable>
        </View>

        {/* Service Category */}
        <Pressable
          style={styles.inputBox}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <View style={styles.dropdownTrigger}>
            <Text style={styles.inputText}>
              {service || "Select Service Category"}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#555" />
          </View>
        </Pressable>

        {showDropdown && (
          <View style={styles.dropdown}>
            {["Barber", "Driver", "Nurse"].map((item) => (
              <Pressable
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                  setService(item);
                  setShowDropdown(false);
                }}
              >
                <Text style={styles.dropdownText}>{item}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Address Fields */}
        <Input placeholder="Address" />
        <Input placeholder="House / Flat No." />
        <Input placeholder="Street / Area" />
        <Input placeholder="City" />

        <View style={styles.row}>
          <Input placeholder="Postal Code" style={{ width: "48%" }} />
          <Input placeholder="State" style={{ width: "48%" }} />
        </View>

        <Input placeholder="Land Mark" />

        {/* Submit */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/verification")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          By Continuing, you agree to our <Text style={styles.link}>T&C</Text>{" "}
          and <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

/* ================= REUSABLE INPUT ================= */
const Input = ({ style, ...props }) => (
  <View style={[styles.inputBox, style]}>
    <TextInput
      {...props}
      placeholderTextColor="#888"
      style={styles.textInputStyle}
    />
  </View>
);

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: Platform.OS === "ios" ? 40 : 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 15,
    color: "#000",
  },
  profileWrapper: {
    alignSelf: "center",
    marginVertical: 20,
    position: "relative",
  },
  imageContainer: {
    width: 100, // Size ektu barano hoyeche centering er jonno
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f2f2f2",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  iconPlaceholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#f57c00",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputBox: {
    backgroundColor: "#f4f4f4",
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 55,
    justifyContent: "center",
    marginBottom: 15,
  },
  dropdownTrigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    color: "#333",
    fontSize: 15,
  },
  dropdown: {
    backgroundColor: "#f4f4f4",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownText: {
    fontSize: 15,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInputStyle: {
    flex: 1,
    color: "#000",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
    marginTop: 20,
    paddingBottom: 30,
  },
  link: {
    color: "#000",
    fontWeight: "700",
  },
});

export default CompleteAccount;

import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
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
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthUser } from "../../api/authUser";

/* ===== assume callApi already exists ===== */

const CompleteAccount = () => {
  const { callApi } = AuthUser();
  const navigation = useNavigation();
  const router = useRouter();

  const [profileImage, setProfileImage] = useState(null);

  /* ===== SERVICE ===== */
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  /* ===== STATE ===== */
  const [states, setStates] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState(null);
  const [selectedStateName, setSelectedStateName] = useState("");
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  /* ===== FETCH API DATA ===== */
  const fetchListData = async () => {
    try {
      const response = await callApi({
        api: "/signForm",
        method: "GET",
      });

      if (response?.response?.data?.all_service) {
        setServices(response.response.data.all_service);
      }

      if (response?.response?.data?.states) {
        setStates(response.response.data.states);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchListData();
  }, []);

  /* ===== IMAGE PICKER ===== */
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Gallery access permission is required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Complete your account</Text>
      </View>

      {/* ===== PROFILE IMAGE ===== */}
      <View style={styles.profileWrapper}>
        <View style={styles.imageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.iconPlaceholder}>
              <Ionicons name="person" size={50} color="#ccc" />
            </View>
          )}
        </View>

        <Pressable style={styles.editIcon} onPress={pickImage}>
          <Ionicons name="pencil" size={16} color="#fff" />
        </Pressable>
      </View>

      {/* ===== SERVICE DROPDOWN ===== */}
      <Pressable
        style={styles.inputBox}
        onPress={() => setShowServiceDropdown(!showServiceDropdown)}
      >
        <View style={styles.dropdownTrigger}>
          <Text style={styles.inputText}>
            {selectedServiceName || "Select Service Category"}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#555" />
        </View>
      </Pressable>

      {showServiceDropdown && (
        <View style={styles.dropdown}>
          <ScrollView style={{ maxHeight: 200 }}>
            {services.map((item) => (
              <Pressable
                key={item.category_subchild_id}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedServiceId(item.category_subchild_id);
                  setSelectedServiceName(item.category_subchild_name);
                  setShowServiceDropdown(false);
                }}
              >
                <Text style={styles.dropdownText}>
                  {item.category_subchild_name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      {/* ===== ADDRESS INPUTS ===== */}
      <Input placeholder="Address" />
      <Input placeholder="House / Flat No." />
      <Input placeholder="Street / Area" />
      <Input placeholder="City" />

      <View style={styles.row}>
        <Input placeholder="Postal Code" style={{ width: "48%" }} />

        {/* ===== STATE DROPDOWN ===== */}
        <Pressable
          style={[styles.inputBox, { width: "48%" }]}
          onPress={() => setShowStateDropdown(!showStateDropdown)}
        >
          <View style={styles.dropdownTrigger}>
            <Text style={styles.inputText}>{selectedStateName || "State"}</Text>
            <Ionicons name="chevron-down" size={20} color="#555" />
          </View>
        </Pressable>
      </View>

      {showStateDropdown && (
        <View style={styles.dropdown}>
          <ScrollView style={{ maxHeight: 200 }}>
            {states.map((item) => (
              <Pressable
                key={item.state_id}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedStateId(item.state_id);
                  setSelectedStateName(item.state_name);
                  setShowStateDropdown(false);
                }}
              >
                <Text style={styles.dropdownText}>{item.state_name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      <Input placeholder="Land Mark" />

      {/* ===== SUBMIT ===== */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("SERVICE ID:", selectedServiceId);
          console.log("STATE ID:", selectedStateId);
          router.push("/auth/verification");
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        By Continuing, you agree to our <Text style={styles.link}>T&C</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </SafeAreaView>
  );
};

/* ===== REUSABLE INPUT ===== */
const Input = ({ style, ...props }) => (
  <View style={[styles.inputBox, style]}>
    <TextInput
      {...props}
      placeholderTextColor="#888"
      style={styles.textInputStyle}
    />
  </View>
);

/* ===== STYLES (UNCHANGED) ===== */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: Platform.OS === "ios" ? 40 : 10,
  },
  headerText: { fontSize: 18, fontWeight: "600", marginLeft: 15 },
  profileWrapper: { alignSelf: "center", marginVertical: 20 },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f2f2f2",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: { width: "100%", height: "100%" },
  iconPlaceholder: { flex: 1, justifyContent: "center", alignItems: "center" },
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
  dropdown: {
    backgroundColor: "#f4f4f4",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownText: { fontSize: 15 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  textInputStyle: { fontSize: 15 },
  button: {
    backgroundColor: "#f57c00",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  footer: { fontSize: 12, textAlign: "center", marginTop: 20 },
  link: { fontWeight: "700" },
});

export default CompleteAccount;

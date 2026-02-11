import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ArrowLeft,
  Calendar,
  Check,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthUser } from "../../api/authUser";
import Toast from "react-native-toast-message";

export default function RegisterScreen() {
  const { callApi } = AuthUser();

  /* ================= STATES ================= */
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("Female");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [alternateMobile, setAlternateMobile] = useState("");
  const [email, setEmail] = useState("");
  const [sameWhatsapp, setSameWhatsapp] = useState(true);

  const [religionList, setReligionList] = useState([]);
  const [selectedReligionName, setSelectedReligionName] = useState("");
  const [selectedReligionId, setSelectedReligionId] = useState(null);
  const [showReligionModal, setShowReligionModal] = useState(false);

  /* ================= FETCH RELIGION ================= */
  useEffect(() => {
    (async () => {
      try {
        const response = await callApi({
          api: "/signForm",
          method: "GET",
        });
        if (response?.response?.data?.religion) {
          setReligionList(response.response.data.religion);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  /* ================= SAME WHATSAPP ================= */
  useEffect(() => {
    if (sameWhatsapp) setWhatsapp(mobile);
  }, [mobile, sameWhatsapp]);

  /* ================= DOB FORMAT (DD-MM-YYYY) ================= */
  const formatDOB = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 8);
    let formatted = cleaned;
    if (cleaned.length > 4)
      formatted = `${cleaned.slice(0, 2)}-${cleaned.slice(
        2,
        4,
      )}-${cleaned.slice(4)}`;
    else if (cleaned.length > 2)
      formatted = `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
    setDob(formatted);
  };

  /* ================= REGISTER API ================= */
  const registerData = async () => {
    try {
      const payload = {
        step: "1",
        name: fullName,
        gender: gender === "Male" ? "M" : "F",
        dob: dob,
        religion: selectedReligionId,
        phone: `${mobile}`,
        alt_phone: `${alternateMobile}`,
        whatsapp: sameWhatsapp ? `${mobile}` : `${whatsapp}`,
        email: email,
      };

      console.log("FORM-DATA PAYLOAD:", payload);

      const response = await callApi({
        api: "/signupPro",
        method: "CUSTOM_POST",
        data: payload,
      });

      const resData = response?.response;

      console.log("API RESPONSE:", resData);

      /* ================= SUCCESS CASE ================= */
      if (resData?.status === "OK" && resData?.calback === "nextstep") {
        // ✅ Success Toast
        Toast.show({
          type: "success",
          text1: "Registration Successful",
          props: { code: "200" },
        });

        const fullData = {
          ...payload,
          ...resData?.calbackdata,
        };

        // ⏳ Delay তারপর Navigate
        setTimeout(() => {
          router.push({
            pathname: "/auth/completeProfile",
            params: {
              userData: JSON.stringify(fullData),
            },
          });
        }, 1500);
      } else {
        /* ================= ERROR CASE ================= */
        Toast.show({
          type: "error",
          text1: resData?.message || "Registration Failed",
          props: { code: resData?.status || "400" },
        });
      }
    } catch (error) {
      console.log("Registration failed:", error);

      Toast.show({
        type: "error",
        text1: "Something went wrong",
        props: { code: "500" },
      });
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={22} color="#0C0C26" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Register Now</Text>
        </View>

        <Input
          icon={<User size={18} color="#777" />}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <View style={styles.genderRow}>
          <GenderButton
            label="Female"
            selected={gender === "Female"}
            onPress={() => setGender("Female")}
          />
          <GenderButton
            label="Male"
            selected={gender === "Male"}
            onPress={() => setGender("Male")}
          />
        </View>

        <Input
          icon={<Calendar size={18} color="#777" />}
          placeholder="DD-MM-YYYY"
          keyboardType="number-pad"
          value={dob}
          onChangeText={formatDOB}
        />

        <TouchableOpacity onPress={() => setShowReligionModal(true)}>
          <Input
            icon={<User size={18} color="#777" />}
            placeholder="Select Religion"
            value={selectedReligionName}
            editable={false}
            rightIcon={<ChevronDown size={18} color="#777" />}
          />
        </TouchableOpacity>

        <Input
          icon={<Phone size={18} color="#777" />}
          placeholder="Mobile Number"
          keyboardType="number-pad"
          value={mobile}
          onChangeText={setMobile}
        />

        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setSameWhatsapp(!sameWhatsapp)}
        >
          <View
            style={[styles.checkbox, sameWhatsapp && styles.checkboxActive]}
          >
            {sameWhatsapp && <Check size={14} color="#FFF" />}
          </View>
          <Text style={styles.checkboxText}>Same for Whatsapp</Text>
        </TouchableOpacity>

        <Input
          icon={<MessageCircle size={18} color="#777" />}
          placeholder="Whatsapp Number"
          keyboardType="number-pad"
          value={sameWhatsapp ? mobile : whatsapp}
          editable={!sameWhatsapp}
          onChangeText={setWhatsapp}
        />

        <Input
          icon={<Phone size={18} color="#777" />}
          placeholder="Alternate Mobile Number"
          keyboardType="number-pad"
          value={alternateMobile}
          onChangeText={setAlternateMobile}
        />

        <Input
          icon={<Mail size={18} color="#777" />}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={registerData}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Religion Modal */}
      <Modal visible={showReligionModal} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowReligionModal(false)}
          activeOpacity={1}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Religion</Text>
            <FlatList
              data={religionList}
              keyExtractor={(i) => i.religion_id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedReligionName(item.religion_name);
                    setSelectedReligionId(item.religion_id);
                    setShowReligionModal(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>
                    {item.religion_name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
/* ================= COMPONENTS ================= */
function Input({ icon, rightIcon, ...props }) {
  return (
    <View style={styles.inputBox}>
      <View style={styles.iconLeft}>{icon}</View>
      <TextInput {...props} placeholderTextColor="#777" style={styles.input} />
      {rightIcon && <View>{rightIcon}</View>}
    </View>
  );
}

function GenderButton({ label, selected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.genderBtn,
        selected ? styles.genderActive : styles.genderInactive,
      ]}
    >
      <View
        style={[
          styles.radio,
          selected ? styles.radioActive : styles.radioInactive,
        ]}
      >
        {selected && <View style={styles.radioDot} />}
      </View>
      <Text style={[styles.genderText, selected && { color: "#FFF" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 30,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#474747" },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    paddingHorizontal: 20,
    height: 52,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  iconLeft: { marginRight: 12 },
  input: { flex: 1, fontSize: 14, color: "#000" },
  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 16,
  },
  genderBtn: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 999,
    gap: 10,
  },
  genderActive: { backgroundColor: "#045FA2" },
  genderInactive: { backgroundColor: "#F7F6FC" },
  genderText: { fontSize: 14, fontWeight: "600", color: "#2E2E74" },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  radioActive: { borderWidth: 2, borderColor: "#FFF" },
  radioInactive: { borderWidth: 1.5, borderColor: "#045FA2" },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: "#FFF" },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 16,
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#ED6E0A",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxActive: { backgroundColor: "#ED6E0A" },
  checkboxText: { fontSize: 14, color: "#474747" },
  button: {
    height: 52,
    backgroundColor: "#ED6E0A",
    borderRadius: 999,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 14, fontWeight: "600" },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 30,
  },
  loginText: { fontSize: 12, color: "#474747" },
  loginLink: { fontSize: 12, color: "#ED6E0A", fontWeight: "600" },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end", // Bottom sheet style feel
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: "60%",
  },
  modalHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E2E74",
  },
  dropdownItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#474747",
    textAlign: "center",
  },
});

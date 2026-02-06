import { Text, View, Button } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="dark" />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View>
        <Button
          title="Go to SplashScreen"
          onPress={() => {
            router.push("/splash");
          }}
        />
      </View>
    </View>
  );
}

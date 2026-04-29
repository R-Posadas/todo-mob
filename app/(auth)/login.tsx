import { Button } from "@/components/Button";
import { Input } from "@/components/TInput";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from '@/components/themed-view';
import { Layout } from "@/constants/theme/";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  function handleLogin(){
    if(username && password === "admin"){
      router.replace("/(tabs)");
    }
  }

  return (
    <>
      <ThemedView style={[Layout.screen, Layout.center, { gap: 8 }]}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Login</ThemedText>
        </ThemedView>

        <ThemedView style={{ width: "100%" }}>
          <Input placeholder="Username" value={username} onChange={setUsername} />
          <Input placeholder="Password" value={password} onChange={setPassword} secureTextEntry/>
          
        <ThemedView style={styles.optionsRow}>
          <ThemedView style={styles.checkboxRow}>
            <Pressable
              style={styles.checkbox}
              onPress={() => setRemember(!remember)}
            >
              {remember && <ThemedText>✓</ThemedText>}
            </Pressable>

            <ThemedText>Remember Me</ThemedText>
          </ThemedView>

          <ThemedText
            type="link"
            onPress={() => Alert.alert("Coming Soon", "Forgot password feature not implemented yet")}
          >
            Forgot Password?
          </ThemedText>
        </ThemedView>

          <Button style={styles.button} textStyle={styles.text} title="Login" onPress={handleLogin}/>

          <ThemedText type="link" onPress={() => router.push("/signup")}>
            Create Account
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingBottom: 32,
  },
  button: {
    backgroundColor: "#2b2b2c",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "600",
    alignItems: "center",
    fontSize: 18,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
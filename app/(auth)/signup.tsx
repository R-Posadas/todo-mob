import { Input } from "@/components/TInput";
import { Colors, Spacing, moderateScale } from "@/constants/theme/";
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function SignupScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignup() {
    if (!username || !password) return;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // fake success → go to app
    router.replace("/(tabs)");
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        value={username}
        onChange={setUsername}
      />

      <Input
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />

      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      <View style={styles.button}>
        <Button title="Sign Up" onPress={handleSignup} />
      </View>

      <View style={styles.loginLink}>
        <Button
          title="Already have an account? Login"
          onPress={() => router.push("/(auth)/login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },

  button: {
    marginTop: Spacing.md,
  },

  loginLink: {
    marginTop: Spacing.lg,
  },
});
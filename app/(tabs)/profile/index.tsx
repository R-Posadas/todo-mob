import { Colors, moderateScale, Radius, Spacing } from "@/constants/theme/";
import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  // fake user data for now (later this comes from backend / storage)
  const user = {
    username: "john_doe",
    email: "john@example.com",
  };

  function handleLogout() {
    // later you clear storage / auth state
    router.replace("/(auth)/login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>{user.username}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.button}>
        <Button title="Logout" color="#ef4444" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
    backgroundColor: Colors.light.background,
    justifyContent: "center",
  },

  card: {
    padding: moderateScale(16),
    borderRadius: Radius.md,
    backgroundColor: Colors.light.surface,
    marginBottom: Spacing.lg,
  },

  label: {
    fontSize: moderateScale(12),
    color: Colors.light.textMuted,
    marginTop: Spacing.sm,
  },

  value: {
    fontSize: moderateScale(16),
    color: Colors.light.text,
    marginBottom: Spacing.sm,
  },

  button: {
    marginTop: Spacing.md,
  },
});
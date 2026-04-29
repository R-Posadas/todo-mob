import { moderateScale } from "@/constants/theme/";
import { StyleSheet, TextInput } from "react-native";

export function Input({
  value,
  onChange,
  placeholder,
  secureTextEntry,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: moderateScale(12),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    width: "100%",
    marginBottom: 12,
  },
});
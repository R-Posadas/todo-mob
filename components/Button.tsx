import { Pressable, Text } from "react-native";

export function Button({ title, onPress, style, textStyle }: any) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "#4F46E5",
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     width: "100%",
//   },
//   text: {
//     color: "white",
//     fontWeight: "600",
//   },
// });
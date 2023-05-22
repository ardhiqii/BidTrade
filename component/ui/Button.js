import { View, StyleSheet, Text, Pressable } from "react-native";

function Button({ children, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3072e8",
    paddingVertical:15,
    paddingHorizontal: 12,
    borderRadius: 15,
    elevation: 5,
    justifyContent:'center'
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});

import { TextInput, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  autoCapitalize,
  icon,
  size,
  color
}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        { icon && <Ionicons name={icon} size={size} color={color} />}
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        autoCapitalize={!autoCapitalize && "sentences"}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  labelContainer:{
    flexDirection:'row',
    alignItems:'center',
    columnGap:8
  },
  label: {
    color: "#9d9c9c",
    marginBottom: 4,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#bdbdbd",
  },
});

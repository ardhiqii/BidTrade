import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextInputCustom = ({ label,customStyles,multiline,textAlignVertical }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={[styles.textInputContainer,customStyles]}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container:{
    rowGap:10,
  },
  textInputContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    
    borderRadius: 10,
    
    backgroundColor: "#d4e2fb",
  },
});

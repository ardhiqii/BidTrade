import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormatCurrency from "../../util/FormatCurrency";

const TextInputPrice = () => {
  const [price, setPrice] = useState("0");
  const [isFocused, setIsFocused] = useState(false);
  const inputPriceHandler = (e) => {
    const rawData = e.split(".");
    const data = rawData.join("");
    const formatted = FormatCurrency(data);
    setPrice(formatted);
  };
  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <Text style={[styles.label, isFocused && styles.labelFocused]}>
        Nominal
      </Text>
      <View style={[styles.inputPriceContainer]}>
        <View style={styles.textInputContainer}>
          <Text style={styles.currencyText}>Rp </Text>
          <TextInput
            value={price}
            style={styles.textInput}
            onChangeText={inputPriceHandler}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            keyboardType="number-pad"
          />
        </View>
        <Pressable
          style={styles.clearInputContainer}
          onPress={() => setPrice("0")}
        >
          <Ionicons name="close-circle-outline" size={25} color={"#a3a2a2"} />
        </Pressable>
      </View>
    </View>
  );
};

export default TextInputPrice;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "#a3a2a2",
  },
  label: {
    color: "#a3a2a2",
  },
  inputPriceContainer: {
    flexDirection: "row",
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
  },
  containerFocused: {
    borderBottomColor: "#3072e8",
  },
  labelFocused: {
    color: "#3072e8",
  },

  currencyText: {},
  clearInputContainer: {
    width: 30,
  },
});

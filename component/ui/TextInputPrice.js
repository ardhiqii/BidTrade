import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormatCurrency from "../../util/FormatCurrency";

const TextInputPrice = ({ nominal, setNominal,modalState }) => {
  const [isFocused, setIsFocused] = useState(false);
  useEffect(()=>{
    setNominal({
      valid:true,
      price:'0'
    })
  },[modalState])
  const inputPriceHandler = (e) => {
    const rawData = e.split(".");
    const data = rawData.join("");
    const formatted = FormatCurrency(data);
    setNominal((prev) => {
      return {
        ...prev,
        price: formatted,
      };
    });
  };
  const resetValue = () => {
    setNominal((prev) => {
      return {
        ...prev,
        price: "0",
      };
    });
  };
  return (
    <View style={[styles.container, isFocused && styles.containerFocused,!nominal.valid && styles.invalidContainer]}>
      <Text
        style={[styles.label, styles.text, isFocused && styles.labelFocused,!nominal.valid && styles.invalidText]}
      >
        Nominal
      </Text>
      <View style={[styles.inputPriceContainer]}>
        <View style={styles.textInputContainer}>
          <Text style={styles.text}>Rp </Text>
          <TextInput
            value={nominal.price}
            style={[styles.textInput, styles.text]}
            onChangeText={inputPriceHandler}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            keyboardType="number-pad"
          />
        </View>
        <Pressable
          style={styles.clearInputContainer}
          onPress={resetValue}
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
    paddingVertical: 5,
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
  clearInputContainer: {
    width: 45,
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  invalidText:{
    color:'#fd785d'
  },
  invalidContainer:{
    borderBottomColor:'#fd785d'
  }
});

import { StyleSheet, Text, TextInput, View } from "react-native";
import TextInputCustom from "../ui/TextInputCustom";
import DatePickerCustom from "../ui/DatePickerCustom";
import { useState } from "react";
import LayoutForm from "./LayoutForm";

const ProductDetails = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const titleProps = {
    label: "Title*",
  };
  const desProps = {
    label: "Description",
    multiline: true,
    textAlignVertical: "top",
  };
  return (
    <LayoutForm>
      <TextInputCustom {...titleProps} />
      <TextInputCustom label={"Price"} />
      <TextInputCustom {...desProps} customStyles={styles.desTextInput} />
      <View style={styles.datePickContainer}>
        <Text>End Date of Auction</Text>
        <DatePickerCustom
          openModal={modalVisible}
          modalVisibleHandler={setModalVisible}
        />
      </View>
    </LayoutForm>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    rowGap: 10,
    backgroundColor: "white",
  },
  textInputContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#bdbdbd",
    backgroundColor: "white",
  },
  desTextInput: {
    height: 120,
  },
  datePickContainer: {
    rowGap: 10,
  },
});

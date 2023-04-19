import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  BackHandler,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import FormatCurrency from "../../../util/FormatCurrency";
import TextInputPrice from "../../ui/TextInputPrice";
function ModalPlaceBid({ onModal, changeOnModal }) {
  return (
    <>
      <Modal
        visible={true}
        onRequestClose={() => changeOnModal(false)}
        transparent={true}
      >
        <View style={styles.backgroundDark}></View>
      </Modal>
      <Modal
        transparent={true}
        visible={true}
        onRequestClose={() => changeOnModal(false)}
        animationType="slide"
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable onPress={() => changeOnModal(false)}>
              <Ionicons name="md-close-outline" size={40} color={"#a8a8a8"} />
            </Pressable>
            <Text style={styles.headerText}>Place A Bid</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text>{`Minimal: Rp.10.000`}</Text>
            <TextInputPrice />
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ModalPlaceBid;

const styles = StyleSheet.create({
  backgroundDark: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    height: "50%",
    marginTop: "auto",
    backgroundColor: "#e8e8e8",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    borderColor: "#e8e8e8",
  },
  header: {
    backgroundColor: "white",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    columnGap: 12,
    marginBottom: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#a3a2a2",
  },
  textInput: {
    color: "#a3a2a2",
  },
  inputcontainerFocus: {
    borderBottomColor: "#3072e8",
  },
  textInputFocus: {
    color: "#3072e8",
  },
  input: {
    width: "85%",
  },
});

import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
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
import PlaceBidButton from "./PlaceBidButton";
import { UserContext } from "../../../store/user-context";
import { updateAuctionPrice } from "../../../util/auct";
import ModalLayout from "../../ui/ModaLayout";
function ModalPlaceBid({ onModal, changeOnModal,minPrice,idProduct,forceRefresh }) {
  const [inputUser, setInputUser] = useState({
    valid: true,
    price: "0",
  });
  const userCtx = useContext(UserContext)
  const userId = userCtx.user.uid
  const submitHandler = async () => {
    userPrice = parseInt(inputUser.price.split(".").join(""), 10);
    if (userPrice <= minPrice) {
      setInputUser((prev) => {
        return {
          ...prev,
          valid: false,
        };
      });
      return false;
    }
    setInputUser((prev) => {
      return {
        ...prev,
        valid: true,
      };
    });
    await updateAuctionPrice(userId,idProduct,userPrice)
    return true;
  };
  return (
    <>
          <ModalLayout onModal={onModal} changeOnModal={changeOnModal}>
          <View style={styles.header}>
            <Pressable onPress={() => changeOnModal(false)}>
              <Ionicons name="md-close-outline" size={40} color={"#a8a8a8"} />
            </Pressable>
            <Text style={styles.headerText}>Place A Bid</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text>Minimal: Rp {FormatCurrency(minPrice)}</Text>
            <TextInputPrice nominal={inputUser} setNominal={setInputUser} modalState={onModal} />
            {!inputUser.valid && (
              <Text style={styles.invalidText}>
                *Place a bid with higher current price
              </Text>
            )}
          </View>
          <PlaceBidButton
            onConfirm={submitHandler}
            forceRefreshHandler={forceRefresh}
            closeModal={changeOnModal}
          />
          </ModalLayout>
          
        
    </>
  );
}

export default ModalPlaceBid;

const styles = StyleSheet.create({
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
    height: 180,
    paddingHorizontal: 25,
    paddingVertical: 15,
    rowGap: 15,
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
  invalidText: {
    color: "#fd785d",
  },
});

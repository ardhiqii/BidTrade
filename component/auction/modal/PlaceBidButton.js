import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Loading = () => {
  return <ActivityIndicator color={"white"} size={"large"} />;
};

const Done = () => {
  return <Ionicons size={35} color={"#1ed660"} name="checkmark-circle" />;
};

function PlaceBidButton({onConfirm,forceRefreshHandler,closeModal}) {
  const [isConfirming, setIsInConfirming] = useState(false);
  const [isDone, setIsDone] = useState(false);
  let content = <Text style={styles.text}>Confirm</Text>;
  async function confirmingHandler() {
    setIsInConfirming(true);
    const isValidInput = await onConfirm()
    if(isValidInput){
      setTimeout(() => {
        console.log("DONE");
        setIsDone(true);
      }, 1000);
      setTimeout(() => {
        console.log("HANDLER");
        forceRefreshHandler()
        closeModal(false)
      }, 2000);
    } else {
      setIsInConfirming(false)
    }
    
  }
  if (!isDone) {
    if (isConfirming) {
      content = <Loading />;
    }
  } else {
    content = <Done />;
  }
  return (
    <Pressable style={styles.container} onPress={confirmingHandler}>
      {content}
    </Pressable>
  );
}

export default PlaceBidButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3072e8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

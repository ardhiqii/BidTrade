import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DatePicker, {
  getFormatedDate,
  getToday,
} from "react-native-modern-datepicker";
import { useEffect, useState } from "react";
import moment from "moment/moment";
const DatePickerCustom = ({ openModal, modalVisibleHandler }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayDate, setDisplayDate] = useState(null);
  const today = getToday();
  useEffect(() => {
    if (selectedDate) {
      const rawDate = moment(selectedDate, "YYYY/MM/DD HH:mm");
      const formated = getFormatedDate(rawDate, "MMM DD HH:mm");
      setDisplayDate(formated);
    }
  }, [selectedDate]);
  const closeModalHandler = () => {
    modalVisibleHandler(false);
  };
  const openModalHandler = () => {
    modalVisibleHandler(true);
  };
  const cancelHandler = () =>{
    setDisplayDate(null)
    modalVisibleHandler(false)
  }
  const confirmHandler = () =>{
    modalVisibleHandler(false)
  }
  return (
    <View>
      <Pressable style={styles.containerButton} onPress={openModalHandler}>
        <AntDesign name="calendar" size={25} />
        <Text>{displayDate || "Select Date"}</Text>
      </Pressable>
      <Modal transparent={true} visible={openModal}>
        <View style={styles.containerModal}>
          <View style={styles.closeContainer}>
            <Pressable onPress={cancelHandler}>
              <Ionicons name="md-close-outline" size={40} color={"#dfdede"} />
            </Pressable>
          </View>
          <DatePicker
            selected={today}
            minimumDate={today}
            onSelectedChange={(date) => setSelectedDate(date)}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button title="Confirm" color={"#3072e8"} onPress={closeModalHandler} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Cancel" color={"#ff8f8f"} onPress={cancelHandler}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DatePickerCustom;

const styles = StyleSheet.create({
  containerButton: {
    width: 180,
    borderRadius: 10,
    columnGap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:'#d4e2fb'
  },
  containerModal: {
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    flex: 1,
  },
  closeContainer: {
    alignItems: "flex-end",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer:{
    flex:1
  }
});

import { StyleSheet, View } from "react-native";

const LayoutForm = ({children}) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default LayoutForm;

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
});

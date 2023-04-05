import { View,StyleSheet,Text,Pressable } from "react-native";

function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.buttonText} >{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3072e8",
    paddingVertical:18,
    paddingHorizontal:12,
    borderRadius:15,
    elevation: 5
  },
  buttonText:{
    textAlign:'center',
    fontSize:16,
    color:'white'
  }
});

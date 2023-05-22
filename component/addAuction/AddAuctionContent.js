import { StyleSheet, Text, View } from "react-native";
import StepsIndicator from "./stepsIndicator/StepsIndicator";
import ProductDetails from "./ProductDetails";
import Button from "../ui/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const AddAuctionContent = () => {
  const nav = useNavigation()
  const [currentPage,setCurrentPage] = useState(0)
  const changeCurrentPage = (type) =>{
    // setCurrentPage(prev => prev + 1)
    nav.navigate('Home')
  }
  let content = <ProductDetails />
  return (
    <>
      <View style={styles.indicatorContainer}>
        <StepsIndicator currentPosition={currentPage} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          {content}
        </View>
        <View style={styles.buttonContainer}>
          <Button style={{elevation:0,width:250}} onPress={changeCurrentPage}>Next</Button>
        </View>
      </View>
    </>
  );
};

export default AddAuctionContent;

const styles = StyleSheet.create({
  indicatorContainer: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor:'white'
  },
  formContainer: {
    flex: 1,
  },
  buttonContainer:{
    alignItems:'center'
  }
});

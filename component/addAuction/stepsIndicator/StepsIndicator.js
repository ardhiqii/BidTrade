import { StyleSheet, Text, View } from "react-native";
import StepIndicator from 'react-native-step-indicator';

const StepsIndicator = ({currentPosition}) => {
  const labels = ["Product Detail","Delivery Address","Order Summary"];
  
  const primaryColor = "#3072e8"
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: primaryColor,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: primaryColor,
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: primaryColor,
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: primaryColor,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: primaryColor,
}
  return (
    <StepIndicator stepCount={3} customStyles={customStyles} currentPosition={currentPosition} labels={labels}/>
  );
};

export default StepsIndicator;

const styles = StyleSheet.create({
  stepContainer: {
    height: 35,
    justifyContent:'space-between',
    backgroundColor:'red'
  },
  indicator:{
    backgroundColor:'blue',
    width:'100%',
    height:8,
    borderRadius:5,
  },
  textIndicator:{
    textAlign:'center'
  }
});

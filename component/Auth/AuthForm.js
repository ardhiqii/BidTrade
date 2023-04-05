import { View, StyleSheet } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../ui/Button";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [formValue, setFormValue] = useState({
    enteredFullName: "",
    enteredEmail: "",
    enteredPassword: "",
  });

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    fullName: fullNameInvalid,
  } = credentialsInvalid;
  function updateInputValueHandler(inputIdentifier, enteredValue) {
    setFormValue((prev) => {
      return {
        ...prev,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    onSubmit(formValue);
  }
  return (
    <View>
      <View style={styles.inputsContainer}>
        {!isLogin && (
          <View>
            <Input
              label={"Full Name"}
              keyboardType={"default"}
              onUpdateValue={updateInputValueHandler.bind(
                this,
                "enteredFullName"
              )}
              icon={"person-outline"}
              size={15}
            />
          </View>
        )}

        <View>
          <Input
            label={"Email Address"}
            keyboardType={"email-address"}
            onUpdateValue={updateInputValueHandler.bind(this, "enteredEmail")}
            isInvalid={emailIsInvalid}
            autoCapitalize={"none"}
            icon={"mail-outline"}
            size={15}
          />
        </View>
        <View>
          <Input
            label={"Password"}
            secure
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "enteredPassword"
            )}
            isInvalid={passwordIsInvalid}
            icon={"lock-closed-outline"}
            size={15}
          />
        </View>
      </View>
      <View>
        <Button onPress={submitHandler}>
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  inputsContainer: {
    marginBottom: 25,
  },
});

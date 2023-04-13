import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import styles from "./style";

const LoginNumber = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.arrowcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            style={styles.leftarrow}
            source={require("../../images/left-arrow.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.txtconatiner}>
        <Text style={styles.txt}>What's your number?</Text>
        <Text>We'll text a code to verify your phone</Text>
      </View>

      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="MA"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        containerStyle={styles.Numberinput}
        withDarkTheme
        withShadow
        autoFocus
      />

      <View style={styles.footercontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeNavigator")}>
          <Text style={styles.footertxt}>
            Have an account and a new number?
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginNumber;

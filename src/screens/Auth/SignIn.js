import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import materialTheme from "../../constants/theme";
import Images from "../../constants/images";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Block flex style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Block flex style={styles.padded}>
        <Block flex style={{ zIndex: 2 }}>
          <Image source={Images.appLogo} />
          <Block center>
            <Text color="#EF592B" size={25}>
              Login to your account
            </Text>
          </Block>
          <Block style={styles.inputBlock}>
            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            {/* Forgot Password Text */}
            <Text
              style={styles.forgotPassword}
              onPress={() => {
                console.log("Forgot Password clicked");
              }}
            >
              Forgot Password?
            </Text>
          </Block>

          <Block center>
            {/* Login Button */}
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={handleLogin}
            >
              Login
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE * 5,
    marginBottom: "20%",
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: "10%",
  },
  inputBlock: {
    marginTop: "20%",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  forgotPassword: {
    color: materialTheme.COLORS.BUTTON_COLOR,
    textAlign: "right",
    textDecorationLine: "underline",
  },
});

export default SignIn;

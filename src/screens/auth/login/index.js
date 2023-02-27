import React, { useRef } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, Input, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import TextInput from "~components/textInput";
import { height } from "~utills/Dimension";
import ScreenNames from "~routes/routes";
import { useState } from "react";
import { getData, SignInEmailPassword } from "~backend/Auth";
import { erroMessage, successMessage } from "~utills/Methods";
export default function Login({ navigation, route }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passRef = useRef();
  const onSubmitLogin = async () => {
    dispatch(setAppLoader(true));
    // try {
    const result = await SignInEmailPassword(email, password);
    console.log("====================================");
    console.log(result.data.user.uid);
    console.log("====================================");
    if (result?.success) {
      const res = await getData("Users", result.data.user.uid);
      if (res?.exists) {
        dispatch(setUserMeta(res?.data));
        dispatch(setAppLoader(false));
        dispatch(setIsLoggedIn(true));
        successMessage("Successfully Logged In");
      } else {
        await auth().signOut();
        dispatch(setAppLoader(false));
      }
    } else {
      dispatch(setAppLoader(false));
      erroMessage(result?.error);
      dispatch(setAppLoader(false));
    }
    // } catch (error) {
    //   dispatch(setAppLoader(false));
    //   erroMessage("Invalid user");
    // }
  };

  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.inputContainer}>
          <Input
            title={"Email"}
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType={"email-address"}
            placeholder={"johndoe@email.com"}
            returnKeyType={"next"}
            onSubmitEditing={() => passRef.current.focus()}
          />
          <Input
            title={"Password"}
            placeholder={"********"}
            value={password}
            onChangeText={(password) => setPassword(password)}
            ref={passRef}
            returnKeyType={"Done"}
            secureTextEntry={false}
          />
        </View>
        <Button
          containerStyle={styles.btnContainer}
          title={"Login"}
          // onPress={() => {
          //   dispatch(setAppLoader(true));
          //   setTimeout(() => {
          //     dispatch(setIsLoggedIn(true));
          //     dispatch(
          //       setUserMeta({
          //         name: "John",
          //         email: "John Doe",
          //       })
          //     );
          //     dispatch(setAppLoader(false));
          //   }, 600);
          // }}
          onPress={() => onSubmitLogin()}
        />
        <View style={styles.conditionCon}>
          <Text>Don't have Account</Text>
          <Pressable onPress={() => navigation.navigate(ScreenNames.SIGNUP)}>
            <Text style={styles.signupText}>{` Sign Up`}</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

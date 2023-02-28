import React, { useRef } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, Input, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { getData, SaveData, SignUpEmailPassword } from "~backend/Auth";
import ScreenNames from "~routes/routes";
import { useState } from "react";
import { erroMessage, successMessage } from "~utills/Methods";
import auth from "@react-native-firebase/auth";
export default function SignUpScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // console.log(password, "----data is-----", userData);
  const frstName = useRef();
  const lastname = useRef();
  const email = useRef();

  const UserSignUp = async () => {
    if (userData?.firstName == "") {
      erroMessage("Enter your first name");
      return;
    } else if (userData?.lastName == "") {
      erroMessage("Enter your Last name");
      return;
    } else if (userData?.email == "") {
      erroMessage("Enter your  email");
      return;
    } else if (password == "") {
      erroMessage("Enter Password");
      return;
    } else {
      dispatch(setAppLoader(true));
      const resp = await SignUpEmailPassword(userData?.email, password);
      if (resp) {
        const uid = auth().currentUser.uid;
        let userDetail = {
          firstName: userData?.firstName,
          lastname: userData?.lastName,
          email: userData?.email,
          uid: uid,
          // password: password,
        };
        const res = await SaveData("Users", uid, userDetail);
        if (res) {
          const user = await getData("Users", uid);
          dispatch(setUserMeta(user?.data));
          dispatch(setIsLoggedIn(true));
          dispatch(setAppLoader(false));
          successMessage("SignUp successfully SignUp");
        } else {
          dispatch(setAppLoader(false));
        }
      } else {
        erroMessage("email is invalid");
        dispatch(setAppLoader(false));
      }
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Text style={styles.title}>SignUp</Text>
        <View style={styles.inputContainer}>
          <Input
            title={"first Name"}
            keyboardType={"email-address"}
            placeholder={"Enter your first name"}
            returnKeyType={"next"}
            value={userData?.firstName}
            onChangeText={(value) =>
              setUserData({ ...userData, firstName: value })
            }
            onSubmitEditing={() => frstName.current.focus()}
          />
          <Input
            title={"last Name"}
            ref={frstName}
            keyboardType={"email-address"}
            placeholder={"Enter your last name"}
            returnKeyType={"next"}
            onSubmitEditing={() => lastname.current.focus()}
            value={userData?.lastName}
            onChangeText={(value) =>
              setUserData({ ...userData, lastName: value })
            }
          />
          <Input
            title={"Email"}
            ref={lastname}
            keyboardType={"email-address"}
            placeholder={"johndoe@email.com"}
            returnKeyType={"next"}
            value={userData?.email}
            onChangeText={(value) => setUserData({ ...userData, email: value })}
            onSubmitEditing={() => email.current.focus()}
          />
          <Input
            title={"Password"}
            placeholder={"********"}
            ref={email}
            returnKeyType={"Done"}
            secureTextEntry={false}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
        <Button
          containerStyle={styles.btnContainer}
          title={"Sign Up"}
          onPress={() => UserSignUp()}
        />
        <View style={styles.conditionCon}>
          <Text>Already Account </Text>
          <Pressable onPress={() => navigation.navigate(ScreenNames.LOGIN)}>
            <Text style={styles.signupText}>{` Sign In`}</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

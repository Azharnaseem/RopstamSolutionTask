import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { LoginScreen, SignUpScreen } from "~screens/auth";
import { Loader } from "~components";
import ScreenNames from "./routes";
import { AddedDataScreen, HomeScreen } from "~screens/app";
import { selectIsLoggedIn } from "~redux/slices/user";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.LOGIN}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ScreenNames.SIGNUP} component={SignUpScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
          <Stack.Screen
            name={ScreenNames.ADDEDDATASCREEN}
            component={AddedDataScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

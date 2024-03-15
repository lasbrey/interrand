import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingScreen, SignIn } from "../screens";
// import ModalStackNavigator from "./ModalStackNavigator";


const HomeStack = createNativeStackNavigator();

const Navigator1_V1_0_2 = () => {

  return (
    <HomeStack.Navigator initialRouteName="OnboardingScreen">
      <HomeStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      {/* <HomeStack.Screen
        name="ModalStack"
        component={ModalStackNavigator}
        options={{ headerShown: false }}
      /> */}
    </HomeStack.Navigator>
  );
};

export default Navigator1_V1_0_2;

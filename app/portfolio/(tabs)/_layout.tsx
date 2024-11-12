import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Tabs } from "expo-router";
import CustomHeader from "./header";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        header: () => <CustomHeader />,
      }}
    >
      <Tabs.Screen name="profileScreen" options={{ title: "Repository" }} />
      <Tabs.Screen name="repositoryScreen" options={{ title: "Repository" }} />
    </Tabs>
  );
};

export default _layout;

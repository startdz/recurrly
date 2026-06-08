import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSaveAreaView);

const Subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Subscriptions</Text>
    </SafeAreaView>
  );
};

export default Subscriptions;

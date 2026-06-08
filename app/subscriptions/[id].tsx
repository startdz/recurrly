import { Link, useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSaveAreaView);

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Subscriptions Detail: {id}</Text>
      <Link href="/">Go back</Link>
    </SafeAreaView>
  );
};

export default SubscriptionDetails;

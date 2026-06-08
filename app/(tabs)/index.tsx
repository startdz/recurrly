import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSaveAreaView);

const App = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cumque
        eaque iste fuga libero nobis ullam consectetur quas esse architecto!
        Veniam ipsa ullam fugiat ducimus quas fuga unde mollitia voluptatem.
      </Text>
    </SafeAreaView>
  );
};

export default App;

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/onboarding" className="p-4 rounded bg-primary text-white">
        Go to onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="p-4 rounded bg-primary text-white"
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="p-4 rounded bg-primary text-white"
      >
        Sign Up
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscriptions</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude max subscriptions
      </Link>
    </View>
  );
}

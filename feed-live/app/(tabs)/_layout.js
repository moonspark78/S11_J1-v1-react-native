import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00BCD4",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "index":
              iconName = "home-outline";
              break;
            case "conversations":
              iconName = "chatbubbles-outline";
              break;
            case "add-post":
              iconName = "add-circle-outline";
              size = 40;
              break;
            case "favorites":
              iconName = "heart-outline";
              break;
            case "profile":
              iconName = "person-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Feed" }} />
      <Tabs.Screen name="conversations" options={{ title: "Conversations" }} />
      <Tabs.Screen name="add-post" options={{ title: "" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

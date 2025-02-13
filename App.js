import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePageScreen from "./screens/HomePageScreen";
import CabinetScreen from "./screens/CabinetScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReminderScreen from "./screens/ReminderScreen";
import { NavigationContainer } from "@react-navigation/native";
import IconButton from "./components/ui/IconButton";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ navigation }) => ({
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                color={tintColor}
                size={26}
                onPress={() => {}}
              />
            ),
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomePageScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cabinet"
            component={CabinetScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bag-add-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Reminder"
            component={ReminderScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

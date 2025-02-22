import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePageScreen from "./screens/HomePageScreen";
import MenuScreen from "./screens/MenuScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrescriptionScreen from "./screens/PrescriptionScreen";
import { NavigationContainer } from "@react-navigation/native";
import IconButton from "./components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarHideOnKeyboard: true, // Ẩn bottom tab khi bàn phím mở
            }}
          >
            <Tab.Screen
              name="Trang chủ"
              component={HomePageScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Danh mục"
              component={MenuScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="grid-outline" color={color} size={size} />
                ),
                headerTitle: "Danh mục", // Đặt tiêu đề cụ thể
                headerTitleAlign: "center",
              }}
            />
            <Tab.Screen
              name="Đơn thuốc"
              component={PrescriptionScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="calendar-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Cá nhân"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
                headerTitleAlign: "center",
                headerShadowVisible: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

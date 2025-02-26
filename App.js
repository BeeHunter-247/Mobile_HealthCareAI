import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePageScreen from "./screens/HomePageScreen";
import MenuScreen from "./screens/MenuScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrescriptionScreen from "./screens/PrescriptionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { registerForPushNotificationsAsync } from "./Services/registerForPushNotifications"; // Corrected path
import * as Notifications from "expo-notifications";

const Tab = createBottomTabNavigator();
export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();

    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Nhận thông báo:", notification);
      }
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Phản hồi thông báo:", response);
      });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

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

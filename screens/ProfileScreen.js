import { ScrollView, StyleSheet } from "react-native";
import  ProfileHeader  from "../components/UI/Profiles/ProfileHeader";
import  InfoSection  from "../components/UI/Profiles/InfoSection";

// Constants
const PROFILE_DATA = {
  name: "Tiến",
  uuid: "374C77DC-8690-8690-869...",
  avatarUrl: require('../assets/icon.png'),
  prescriptions: 0,
};

const PERSONAL_INFO = [
  { icon: "bookmark", text: "Đơn thuốc" },
  { icon: "envelope", text: "tientran@gmail.com" },
  { icon: "phone", text: "09123456789" },
  { icon: "balance-scale", text: "50 kg" },
  { icon: "child", text: "150 cm" },
  { icon: "smile-o", text: "Good" },
];

const ABOUT_ITEMS = [
  { icon: "info-circle", text: "Thông tin về ứng dụng" },
  { icon: "envelope", text: "Liên hệ với chúng tôi - via email" },
  { icon: "heart", text: "Ủng hộ chúng tôi" },
];

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader {...PROFILE_DATA} />
      <InfoSection items={PERSONAL_INFO} />
      <InfoSection title="Về chúng tôi" items={ABOUT_ITEMS} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});

export default ProfileScreen;

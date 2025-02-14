import Logo from "../components/ui/Logo";
import {View, Text, ScrollView, FlatList} from "react-native";
import CompanyCard from "../components/ui/CompanyCard";
import MedicineCard from "../components/ui/MedicineCard";
import { Avatar, Card, Button } from "react-native-paper";

const DATA_MEDICINES = [
  { id: "1", name: "Augmentin 625mg", description: "Lorem Ipsum has been the industry's standard dummy text.", duration: "24 tháng", prescription: true },
  { id: "2", name: "Augmentin 625mg", description: "Lorem Ipsum has been the industry's standard dummy text.", duration: "24 tháng", prescription: true },
  { id: "3", name: "Augmentin 625mg", description: "Lorem Ipsum has been the industry's standard dummy text.", duration: "24 tháng", prescription: true },
];

const DATA_NEW = [
  { id: "4", name: "Usarmicin", description: "when an unknown printer took a galley", duration: "48 tháng" },
  { id: "5", name: "Usarmicin", description: "when an unknown printer took a galley", duration: "48 tháng" },
  { id: "6", name: "Usarmicin", description: "when an unknown printer took a galley", duration: "48 tháng" },
];

const DATA_COMPANIES = [
  { id: "7", name: "DCL", description: "Lorem Ipsum has been the industry's standard dummy text.", license: "131/BYT-DKDD" },
  { id: "8", name: "DCL", description: "Lorem Ipsum has been the industry's standard dummy text.", license: "131/BYT-DKDD" },
];
function HomePageScreen() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
        <View style={{ padding: 16 }}>
          {/* Header */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <Avatar.Text size={40} label="DB" />
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Drug Bank</Text>
              <Text style={{ color: "#666" }}>Ngân hàng dữ liệu ngành Dược</Text>
            </View>
          </View>
  
          {/* Search Bar */}
          <View style={{ height: 40, backgroundColor: "#eee", borderRadius: 8, marginBottom: 16 }}></View>
  
          {/* Banner */}
          <View style={{ height: 120, backgroundColor: "#ddd", borderRadius: 8, marginBottom: 16 }}></View>
  
          {/* Danh sách thuốc */}
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>Thuốc được tìm kiếm nhiều nhất</Text>
          <FlatList horizontal data={DATA_MEDICINES} keyExtractor={(item) => item.id} renderItem={({ item }) => <MedicineCard item={item} />} />
  
          <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 8 }}>Thuốc mới lưu hành</Text>
          <FlatList horizontal data={DATA_NEW} keyExtractor={(item) => item.id} renderItem={({ item }) => <MedicineCard item={item} />} />
  
          <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 8 }}>Thuốc mới rút số đăng ký</Text>
          <FlatList horizontal data={DATA_NEW} keyExtractor={(item) => item.id} renderItem={({ item }) => <MedicineCard item={item} />} />
  
          <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 8 }}>Doanh nghiệp được tìm kiếm nhiều nhất</Text>
          <FlatList horizontal data={DATA_COMPANIES} keyExtractor={(item) => item.id} renderItem={({ item }) => <CompanyCard item={item} />} />
        </View>
      </ScrollView>
    );
}

export default HomePageScreen;

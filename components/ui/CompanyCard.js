import { Card } from "react-native-paper";
import { Text } from "react-native";
const CompanyCard = ({ item }) => (
    <Card style={{ margin: 8, width: 160 }}>
      <Card.Content>
        <Text style={{ backgroundColor: "#ccc", padding: 4, borderRadius: 4 }}>Bộ Y Tế</Text>
        <Text style={{ fontWeight: "bold", marginVertical: 4 }}>{item.name}</Text>
        <Text numberOfLines={2} style={{ color: "#666" }}>{item.description}</Text>
        <Text style={{ color: "#666", marginTop: 4 }}>{item.license}</Text>
      </Card.Content>
    </Card>
  );

  export default CompanyCard;
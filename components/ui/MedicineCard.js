

const MedicineCard = ({ item }) => (
    <Card style={{ margin: 8, width: 160 }}>
      <Card.Content>
        {item.prescription && <Text style={{ backgroundColor: "#ccc", padding: 4, borderRadius: 4 }}>Thuốc kê đơn</Text>}
        <Text style={{ fontWeight: "bold", marginVertical: 4 }}>{item.name}</Text>
        <Text numberOfLines={2} style={{ color: "#666" }}>{item.description}</Text>
        <Text style={{ color: "#666", marginTop: 4 }}>{item.duration}</Text>
      </Card.Content>
    </Card>
  );

  export default MedicineCard;
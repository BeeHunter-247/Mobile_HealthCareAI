import React from 'react';
import { View, ScrollView } from 'react-native';
import LogoButton from '../components/UI/LogoButton';
import SearchBar from '../components/UI/SearchBar';
import Banner from '../components/UI/Banner';
import SectionTitle from '../components/UI/SectionTitle';
import HorizontalList from '../components/UI/HorizontalList';
import MedicineCard from '../components/UI/MedicineCard';
import CompanyCard from '../components/UI/CompanyCard';

const DATA_MEDICINES = [
  {
    id: '1',
    name: 'Augmentin 625mg',
    description: "Lorem Ipsum has been the industry's standard dummy text.",
    duration: '24 tháng',
    prescription: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Ví dụ ảnh thuốc
  },
  {
    id: '2',
    name: 'Augmentin 625mg',
    description: "Lorem Ipsum has been the industry's standard dummy text.",
    duration: '24 tháng',
    prescription: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Ví dụ ảnh thuốc
  },
  {
    id: '3',
    name: 'Augmentin 625mg',
    description: "Lorem Ipsum has been the industry's standard dummy text.",
    duration: '24 tháng',
    prescription: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Ví dụ ảnh thuốc
  },
];

const DATA_NEW = [
  {
    id: '4',
    name: 'Usarmicin',
    description: 'when an unknown printer took a galley',
    duration: '48 tháng',
  },
  {
    id: '5',
    name: 'Usarmicin',
    description: 'when an unknown printer took a galley',
    duration: '48 tháng',
  },
  {
    id: '6',
    name: 'Usarmicin',
    description: 'when an unknown printer took a galley',
    duration: '48 tháng',
  },
];

const DATA_COMPANIES = [
  {
    id: '7',
    name: 'DCL',
    description: "Lorem Ipsum has been the industry's standard dummy text.",
    license: '131/BYT-DKDD',
  },
  {
    id: '8',
    name: 'DCL',
    description: "Lorem Ipsum has been the industry's standard dummy text.",
    license: '131/BYT-DKDD',
  },
  {
    id: '9',  
    name: 'DCL',
    description: "Lorem Ipsum has been the industry's standard dummy text.",
    license: '131/BYT-DKDD',
  },
];

function HomePageScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={{ padding: 16 }}>
        <LogoButton onPress={() => {}} />
        <SearchBar onSearch={(text) => console.log('Search:', text)} />
        <Banner url={require('../assets/dugsd.jpg')} />

        <SectionTitle title="Thuốc được tìm kiếm nhiều nhất" />
        <HorizontalList
          data={DATA_MEDICINES}
          renderItem={({ item }) => <MedicineCard item={item} showImage={true} />}
          keyExtractor={(item) => item.id}
        />

        <SectionTitle title="Thuốc mới lưu hành" />
        <HorizontalList
          data={DATA_NEW}
          renderItem={({ item }) => <MedicineCard item={item} />}
          keyExtractor={(item) => item.id}
        />

        <SectionTitle title="Thuốc mới rút số đăng ký" />
        <HorizontalList
          data={DATA_NEW}
          renderItem={({ item }) => <MedicineCard item={item} />}
          keyExtractor={(item) => item.id}
        />

        <SectionTitle title="Doanh nghiệp được tìm kiếm nhiều nhất" />
        <HorizontalList
          data={DATA_COMPANIES}
          renderItem={({ item }) => <CompanyCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

export default HomePageScreen;
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type ApplicationStatus = 'Submitted' | 'Received' | 'Shortlisted' | 'Rejected';

interface JobApplication {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  logo: ImageSourcePropType;
}

type ApplicationsData = {
  [key in ApplicationStatus]: JobApplication[];
};

const sampleApplications: ApplicationsData = {
  Submitted: [
    {
      id: '1',
      title: 'Data analyst',
      company: 'lorem',
      salary: '$14000/m',
      location: 'Kampala, Uganda',
      logo: require('../../assets/images/kalep-logo.jpg'),
    },
    {
      id: '2',
      title: 'Marketing Analyst',
      company: 'Carter',
      salary: '$5000/m',
      location: 'Kigali, Rwanda',
      logo: require('../../assets/images/carter-logo.jpg'),
    },
    {
      id: '3',
      title: 'Jr Executive',
      company: 'Google',
      salary: '$30000/m',
      location: 'Los Angeles, US',
      logo: require('../../assets/images/google-logo.jpg'),
    },
    {
      id: '4',
      title: 'Software Developer',
      company: 'Spotify',
      salary: '$35000/m',
      location: 'CapeTown, S.A',
      logo: require('../../assets/images/spotify-logo.jpg'),
    },
  ],
  Received: [],
  Shortlisted: [],
  Rejected: [],
};

const tabs: ApplicationStatus[] = ['Submitted', 'Received', 'Shortlisted', 'Rejected'];

export default function ApplicationsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ApplicationStatus>('Submitted');

  return (
    <View className="flex-1 bg-[#f7f9fa] pt-10 px-4">
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Tabs */}
      <View className="flex-row mb-5">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`mr-6 pb-2 border-b-2 ${activeTab === tab ? 'border-[#00B9A0]' : 'border-transparent'}`}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.7}
          >
            <Text className={`text-base font-semibold ${activeTab === tab ? 'text-[#00B9A0]' : 'text-gray-500'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Applications List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {sampleApplications[activeTab].length === 0 ? (
          <Text className="text-center text-gray-400 mt-20">No applications in this category.</Text>
        ) : (
          sampleApplications[activeTab].map((item) => (
            <View
              key={item.id}
              className="flex-row items-center bg-white rounded-2xl px-4 py-4 mb-4"
            >
              <View className="mr-4">
                <Image
                  source={item.logo}
                  style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#f2f2f2' }}
                />
              </View>
              <View className="flex-1">
                <Text className="font-semibold text-base">{item.title}</Text>
                <Text className="text-xs text-gray-500">{item.company}</Text>
                <Text className="text-xs text-gray-500">{item.location}</Text>
              </View>
              <Text className="text-[#00B9A0] font-semibold">{item.salary}</Text>
            </View>
          ))
        )}
        <View className="mb-10" />
      </ScrollView>
    </View>
  );
}
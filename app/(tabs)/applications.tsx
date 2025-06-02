import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View, useColorScheme, Platform } from 'react-native';

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
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? '#101114' : '#f7f9fa',
        paddingTop: Platform.OS === 'android' ? 38 : 18,
        paddingHorizontal: 16,
      }}
    >
      {/* Back arrow */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginBottom: 18,
          alignSelf: 'flex-start',
          backgroundColor: '#e6f7f5',
          borderRadius: 100,
          padding: 8,
        }}
      >
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Tabs */}
      <View style={{ flexDirection: 'row', marginBottom: 18 }}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={{
              marginRight: 22,
              paddingBottom: 6,
              borderBottomWidth: 2,
              borderBottomColor: activeTab === tab ? '#00B9A0' : 'transparent',
            }}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.7}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: activeTab === tab ? '#00B9A0' : isDark ? '#888' : '#888',
                letterSpacing: 0.2,
              }}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Applications List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {sampleApplications[activeTab].length === 0 ? (
          <Text style={{
            textAlign: 'center',
            color: isDark ? '#444' : '#bbb',
            marginTop: 60,
            fontSize: 16,
            letterSpacing: 0.1,
          }}>
            No applications in this category.
          </Text>
        ) : (
          sampleApplications[activeTab].map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: isDark ? '#181d20' : '#fff',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 16,
                marginBottom: 14,
                shadowColor: isDark ? '#222' : '#00B9A0',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.07,
                shadowRadius: 6,
                elevation: 2,
                borderWidth: 1,
                borderColor: isDark ? '#23272b' : '#eef5f3',
              }}
            >
              <View style={{ marginRight: 16 }}>
                <Image
                  source={item.logo}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: isDark ? '#222' : '#f2f2f2',
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: isDark ? '#fff' : '#181d20',
                  marginBottom: 2,
                }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888', marginBottom: 1 }}>
                  {item.company}
                </Text>
                <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888' }}>
                  {item.location}
                </Text>
              </View>
              <Text style={{
                color: '#00B9A0',
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: 8,
              }}>
                {item.salary}
              </Text>
            </View>
          ))
        )}
        <View style={{ marginBottom: 40 }} />
      </ScrollView>
    </View>
  );
}
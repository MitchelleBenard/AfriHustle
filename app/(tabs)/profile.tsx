import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View, useColorScheme, Platform } from 'react-native';

// Example data — replace with real user info
const user = {
  name: 'Jinesh Patesh',
  title: 'Software Developer',
  avatar: require('../../assets/images/jinesh.jpg'),
  verified: true,
  experience: [
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'Microify',
      location: 'Cairo, Egypt',
      dates: 'Dec 20 – Feb 21',
      logo: require('../../assets/images/microfy-logo.jpg'),
    },
    {
      id: 2,
      title: 'IT Consultant intern',
      company: 'Unity',
      location: 'Giza, Egypt',
      dates: 'Feb 5 – July 4',
      logo: require('../../assets/images/unity-logo.jpg'),
    },
  ],
  education: [
    {
      id: 3,
      title: 'Computer Science',
      level: 'Bachelor | Delta',
      location: 'Egypt',
      dates: '2017 – 2020',
      logo: require('../../assets/images/education-logo.jpg'),
    },
  ],
};

export default function ProfileScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#101114' : '#f7f9fa',
        paddingTop: Platform.OS === 'android' ? 38 : 18,
        paddingHorizontal: 18,
      }}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Row: Back and Edit */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 4 }}>
          <Ionicons name="arrow-back" size={28} color="#00B9A0" />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 4 }}>
          <Text style={{ color: '#00B9A0', fontWeight: 'bold', fontSize: 16 }}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Avatar + Name + Title + Verified */}
      <View style={{ alignItems: 'center', marginTop: 8, marginBottom: 18 }}>
        <Image
          source={user.avatar}
          style={{
            width: 90,
            height: 90,
            borderRadius: 45,
            marginBottom: 8,
            borderWidth: 2,
            borderColor: '#00B9A0',
            backgroundColor: isDark ? '#181d20' : '#f2f2f2',
          }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: isDark ? '#fff' : '#181d20', marginBottom: 2 }}>
          {user.name}
        </Text>
        <Text style={{ color: isDark ? '#aaa' : '#888', fontSize: 15, marginBottom: 2 }}>{user.title}</Text>
        {user.verified && (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <Ionicons name="checkmark-circle" size={16} color="#00B9A0" />
            <Text style={{ color: '#00B9A0', fontSize: 13, marginLeft: 4, fontWeight: '500' }}>Verified</Text>
          </View>
        )}
      </View>

      {/* Experience */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
          marginTop: 8,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: '600', color: isDark ? '#fff' : '#181d20' }}>Experience</Text>
        <TouchableOpacity>
          <Text style={{ color: '#00B9A0', fontWeight: '500', fontSize: 13 }}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 18 }}>
        {user.experience.map((exp) => (
          <View
            key={exp.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: isDark ? '#181d20' : '#fff',
              borderRadius: 18,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 10,
              shadowColor: isDark ? '#222' : '#00B9A0',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.07,
              shadowRadius: 5,
              elevation: 2,
            }}
          >
            <Image
              source={exp.logo}
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                backgroundColor: isDark ? '#222' : '#f2f2f2',
                marginRight: 12,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '600', fontSize: 15, color: isDark ? '#fff' : '#181d20' }}>{exp.title}</Text>
              <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888', marginTop: 1 }}>{exp.company}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 12, color: isDark ? '#aaa' : '#888' }}>{exp.location}</Text>
              <Text style={{ fontSize: 12, color: isDark ? '#555' : '#bbb', marginTop: 1 }}>{exp.dates}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
          marginTop: 18,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: '600', color: isDark ? '#fff' : '#181d20' }}>Education</Text>
        <TouchableOpacity>
          <Text style={{ color: '#00B9A0', fontWeight: '500', fontSize: 13 }}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 32 }}>
        {user.education.map((edu) => (
          <View
            key={edu.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: isDark ? '#181d20' : '#fff',
              borderRadius: 18,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 10,
              shadowColor: isDark ? '#222' : '#00B9A0',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.07,
              shadowRadius: 5,
              elevation: 2,
            }}
          >
            <Image
              source={edu.logo}
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                backgroundColor: isDark ? '#222' : '#f2f2f2',
                marginRight: 12,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '600', fontSize: 15, color: isDark ? '#fff' : '#181d20' }}>{edu.title}</Text>
              <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888', marginTop: 1 }}>{edu.level}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 12, color: isDark ? '#aaa' : '#888' }}>{edu.location}</Text>
              <Text style={{ fontSize: 12, color: isDark ? '#555' : '#bbb', marginTop: 1 }}>{edu.dates}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
// Note: This code is a simplified version of a profile screen in a React Native application.
// It includes a header with back and edit buttons, user avatar, name, title, and verified status.
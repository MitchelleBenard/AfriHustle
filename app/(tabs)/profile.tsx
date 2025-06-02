import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Example data — replace with real user info
const user = {
  name: 'Jinesh Patesh',
  title: 'Software Developer',
  avatar: require('../../assets/images/jinesh.jpg'), // Use your avatar
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

  return (
    <ScrollView className="flex-1 bg-[#f7f9fa] pt-10 px-4">
      {/* Header Row: Back and Edit */}
      <View className="flex-row justify-between items-center mb-2">
        <TouchableOpacity onPress={() => router.back()} className="p-1">
          <Ionicons name="arrow-back" size={28} color="#00B9A0" />
        </TouchableOpacity>
        <TouchableOpacity className="p-1">
          <Text className="text-[#00B9A0] font-semibold text-base">Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Avatar + Name + Title + Verified */}
      <View className="items-center mt-2 mb-3">
        <Image
          source={user.avatar}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 6 }}
        />
        <Text className="font-bold text-xl mb-1">{user.name}</Text>
        <Text className="text-gray-500 mb-1">{user.title}</Text>
        {user.verified && (
          <View className="flex-row items-center">
            <Ionicons name="checkmark-circle" size={16} color="#00B9A0" />
            <Text className="text-xs text-[#00B9A0] ml-1">Verified</Text>
          </View>
        )}
      </View>

      {/* Experience */}
      <View className="flex-row justify-between items-center mb-2 mt-2">
        <Text className="text-base font-semibold">Experience</Text>
        <TouchableOpacity>
          <Text className="text-[#00B9A0] font-medium text-xs">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="mb-3">
        {user.experience.map((exp) => (
          <View
            key={exp.id}
            className="flex-row items-center bg-white rounded-2xl px-4 py-3 mb-2"
          >
            <Image
              source={exp.logo}
              style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#f2f2f2', marginRight: 10 }}
            />
            <View className="flex-1">
              <Text className="font-semibold text-sm">{exp.title}</Text>
              <Text className="text-xs text-gray-500">{exp.company}</Text>
            </View>
            <View className="items-end">
              <Text className="text-xs text-gray-500">{exp.location}</Text>
              <Text className="text-xs text-gray-400">{exp.dates}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View className="flex-row justify-between items-center mb-2 mt-5">
        <Text className="text-base font-semibold">Education</Text>
        <TouchableOpacity>
          <Text className="text-[#00B9A0] font-medium text-xs">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="mb-10">
        {user.education.map((edu) => (
          <View
            key={edu.id}
            className="flex-row items-center bg-white rounded-2xl px-4 py-3 mb-2"
          >
            <Image
              source={edu.logo}
              style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#f2f2f2', marginRight: 10 }}
            />
            <View className="flex-1">
              <Text className="font-semibold text-sm">{edu.title}</Text>
              <Text className="text-xs text-gray-500">{edu.level}</Text>
            </View>
            <View className="items-end">
              <Text className="text-xs text-gray-500">{edu.location}</Text>
              <Text className="text-xs text-gray-400">{edu.dates}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
// Note: This code is a simplified version of a profile screen in a React Native application.
// It includes a header with back and edit buttons, user avatar, name, title, and verified status.
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const recentJobs = [
  {
    id: '1',
    title: 'UI/UX Designer',
    company: 'Pinterest',
    salary: '$10000/m',
    logo: require('../../assets/images/pinterest-logo.png'), // Add your own image
  },
  {
    id: '2',
    title: 'Software Developer',
    company: 'Spotify',
    salary: '$30000/m',
    logo: require('../../assets/images/spotify-logo.png'), // Add your own image
  },
];

const popularJobs = [
  {
    id: '3',
    title: 'Cashier',
    company: 'Burger King',
    salary: '$3000/m',
    location: 'Nairobi, Kenya',
    type: 'Full-Time',
    logo: require('../../assets/images/burgerking-logo.png'), // Add your own image
  },
  {
    id: '4',
    title: 'Marketing Analyst',
    company: 'Carter',
    salary: '$5000/m',
    location: 'Kigali, Rwanda',
    type: 'Part-Time',
    logo: require('../../assets/images/carter-logo.png'), // Add your own image
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <ScrollView className="flex-1 bg-white pt-10 px-4">
      {/* Greeting */}
      <View className="flex-row items-center justify-between mb-3">
        <View>
          <Text className="text-base text-gray-700">Welcome to AfriHustle,</Text>
          <Text className="text-xl font-bold">
            <Text className="text-[#00B9A0]">Discover Jobs!</Text>
          </Text>
        </View>
        {/* Profile icon */}
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <TouchableOpacity
        className="flex-row items-center bg-[#f2f2f2] rounded-xl px-3 py-2 mb-6"
        onPress={() => router.push('/(tabs)/search')}
        activeOpacity={0.9}
      >
        <Ionicons name="search" size={22} color="#00B9A0" />
        <Text className="flex-1 px-3 text-base text-gray-400">
          Search a job or position
        </Text>
      </TouchableOpacity>

      {/* Recent Jobs */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-base font-semibold">Recent jobs</Text>
        <TouchableOpacity>
          <Text className="text-[#00B9A0] font-medium">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-7">
        {recentJobs.map((job) => (
          <TouchableOpacity
            key={job.id}
            className="bg-white border border-[#00B9A0] rounded-2xl mr-4 py-5 px-7 items-center justify-center w-48"
            onPress={() => router.push('/(tabs)/details')}
            activeOpacity={0.9}
          >
            <Image
              source={job.logo}
              style={{ width: 40, height: 40, borderRadius: 12, marginBottom: 8 }}
            />
            <Text className="font-bold text-base text-center">{job.title}</Text>
            <Text className="text-xs text-gray-400 mt-1">{job.company}</Text>
            <Text className="text-[#00B9A0] font-medium mt-2">{job.salary}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Jobs */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-base font-semibold">Popular jobs</Text>
        <TouchableOpacity>
          <Text className="text-[#00B9A0] font-medium">See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={popularJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center py-4 border-b border-gray-100"
            onPress={() => router.push('/(tabs)/details')}
            activeOpacity={0.9}
          >
            <Image
              source={item.logo}
              style={{ width: 38, height: 38, borderRadius: 12, marginRight: 14 }}
            />
            <View className="flex-1">
              <Text className="font-semibold">{item.title}</Text>
              <Text className="text-xs text-gray-500">{item.company} • {item.location}</Text>
            </View>
            <View className="items-end">
              <Text className="text-[#00B9A0] font-medium">{item.salary}</Text>
              <View className="mt-1">
                <Text className={`text-xs rounded-full px-2 py-0.5 ${item.type === 'Full-Time' ? 'bg-[#00B9A0] text-white' : 'bg-[#e6f7f5] text-[#00B9A0]'}`}>
                  {item.type}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

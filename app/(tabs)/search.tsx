import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const sampleJobs = [
  {
    id: '1',
    title: 'Data analyst',
    company: 'Fiat',
    location: 'Kisumu, Kenya',
    salary: '$23000/m',
    logo: require('../../assets/images/fiat-logo.png'), // Add your own image
  },
  {
    id: '2',
    title: 'Data analyst',
    company: 'lorem',
    location: 'Kampala, Uganda',
    salary: '$14000/m',
    logo: require('../../assets/images/kalep-logo.jpg'), // Add your own image
  },
  {
    id: '3',
    title: 'Data analyst',
    company: 'carty',
    location: 'Lagos, Nigeria',
    salary: '$10000/m',
    logo: require('../../assets/images/company2-logo.png'), // Add your own image
  },
  {
    id: '4',
    title: 'Data analyst',
    company: 'kalep',
    location: 'Arusha, Tanzania',
    salary: '$26000/m',
    logo: require('../../assets/images/company3-logo.png'), // Add your own image
  },
];

export default function SearchScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('Data Analyst');
  const [jobs, setJobs] = useState(sampleJobs);

  const handleClear = () => {
    setSearch('');
    setJobs(sampleJobs); // Reset to all
  };

  // Simple search filtering (replace with real search in production)
  const handleSearchChange = (text: string) => {
    setSearch(text);
    if (!text.trim()) {
      setJobs(sampleJobs);
    } else {
      setJobs(
        sampleJobs.filter((job) =>
          job.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <View className="flex-1 bg-white pt-10 px-4">
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Search bar */}
      <View className="flex-row items-center bg-[#f2f2f2] rounded-xl px-3 py-2 mb-5">
        <Ionicons name="search" size={22} color="#00B9A0" />
        <TextInput
          className="flex-1 px-3 text-base"
          placeholder="Search a job or position"
          value={search}
          onChangeText={handleSearchChange}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Ionicons name="close" size={20} color="#B0B0B0" />
          </TouchableOpacity>
        )}
      </View>

      {/* Results */}
      <Text className="text-gray-600 mb-2">{jobs.length} Jobs Found</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center py-3 px-2 border-b border-gray-100"
            onPress={() => router.push('/(tabs)/details')}
            activeOpacity={0.8}
          >
            {/* Logo */}
            <View className="w-12 h-12 bg-[#f2f2f2] rounded-xl items-center justify-center mr-3">
              {/* Use actual images in production */}
              <Image source={item.logo} style={{ width: 32, height: 32 }} />
            </View>
            {/* Job Info */}
            <View className="flex-1">
              <Text className="font-semibold text-base">{item.title}</Text>
              <Text className="text-xs text-gray-500">{item.company} • {item.location}</Text>
            </View>
            {/* Salary */}
            <Text className="text-[#00B9A0] font-medium">{item.salary}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-400 mt-10">No jobs found.</Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

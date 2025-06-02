import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Platform, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';

const sampleJobs = [
  {
    id: '1',
    title: 'Data analyst',
    company: 'Fiat',
    location: 'Kisumu, Kenya',
    salary: '$23000/m',
    logo: require('../../assets/images/fiat-logo.png'),
  },
  {
    id: '2',
    title: 'Data analyst',
    company: 'lorem',
    location: 'Kampala, Uganda',
    salary: '$14000/m',
    logo: require('../../assets/images/kalep-logo.jpg'),
  },
  {
    id: '3',
    title: 'Data analyst',
    company: 'carty',
    location: 'Lagos, Nigeria',
    salary: '$10000/m',
    logo: require('../../assets/images/company2-logo.png'),
  },
  {
    id: '4',
    title: 'Data analyst',
    company: 'kalep',
    location: 'Arusha, Tanzania',
    salary: '$26000/m',
    logo: require('../../assets/images/company3-logo.png'),
  },
];

export default function SearchScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('Data Analyst');
  const [jobs, setJobs] = useState(sampleJobs);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleClear = () => {
    setSearch('');
    setJobs(sampleJobs);
  };

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
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? '#101114' : '#f7f9fa',
        paddingTop: Platform.OS === 'android' ? 38 : 18,
        paddingHorizontal: 16,
      }}
    >
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginBottom: 18,
          alignSelf: 'flex-start',
          backgroundColor: '#e6f7f5',
          borderRadius: 50,
          padding: 8,
          shadowColor: '#00B9A0',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.07,
          shadowRadius: 3,
          elevation: 1,
        }}
      >
        <Ionicons name="arrow-back" size={26} color="#00B9A0" />
      </TouchableOpacity>

      {/* Search bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: isDark ? '#1a1a1a' : '#f2f2f2',
          borderRadius: 18,
          paddingHorizontal: 16,
          paddingVertical: 14,
          marginBottom: 20,
        }}
      >
        <Ionicons name="search" size={22} color="#00B9A0" />
        <TextInput
          style={{
            flex: 1,
            marginLeft: 10,
            fontSize: 16,
            color: isDark ? '#fff' : '#222',
            fontWeight: '500',
            backgroundColor: 'transparent',
            paddingVertical: 0,
          }}
          placeholder="Search a job or position"
          placeholderTextColor={isDark ? '#aaa' : '#999'}
          value={search}
          onChangeText={handleSearchChange}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Ionicons name="close" size={19} color="#B0B0B0" />
          </TouchableOpacity>
        )}
      </View>

      {/* Results */}
      <Text
        style={{
          color: isDark ? '#a7b1bc' : '#69727d',
          marginBottom: 13,
          fontSize: 15,
          fontWeight: '500',
          letterSpacing: 0.1,
        }}
      >
        {jobs.length} Jobs Found
      </Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 18,
              paddingHorizontal: 12,
              marginBottom: 12,
              borderRadius: 18,
              backgroundColor: isDark ? '#191c22' : '#fff',
              shadowColor: isDark ? '#222' : '#00B9A0',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.08,
              shadowRadius: 7,
              elevation: 3,
              borderWidth: 1,
              borderColor: isDark ? '#1a1a1a' : '#eef5f3',
            }}
            onPress={() => router.push('/(tabs)/details')}
            activeOpacity={0.86}
          >
            {/* Logo */}
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: isDark ? '#242628' : '#eaf3f0',
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 17,
                borderWidth: 1,
                borderColor: isDark ? '#2b2b2d' : '#dde7e4',
              }}
            >
              <Image source={item.logo} style={{ width: 32, height: 32, borderRadius: 8 }} />
            </View>
            {/* Job Info */}
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 17,
                  color: isDark ? '#fff' : '#181d20',
                  marginBottom: 2,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: isDark ? '#d3e0e5' : '#6b7682',
                  marginTop: 1,
                  fontWeight: '500',
                }}
              >
                {item.company} • {item.location}
              </Text>
            </View>
            {/* Salary */}
            <Text
              style={{
                color: '#00B9A0',
                fontWeight: '700',
                fontSize: 15.5,
                marginLeft: 12,
                letterSpacing: 0.2,
              }}
            >
              {item.salary}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              color: isDark ? '#444' : '#bbb',
              marginTop: 50,
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            No jobs found.
          </Text>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}

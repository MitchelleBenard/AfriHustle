import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

const recentJobs = [
  {
    id: '1',
    title: 'UI/UX Designer',
    company: 'Pinterest',
    salary: '$10000/m',
    logo: require('../../assets/images/pinterest.jpg'), // Add your own image
  },
  {
    id: '2',
    title: 'Software Developer',
    company: 'Spotify',
    salary: '$30000/m',
    logo: require('../../assets/images/spotify-logo.jpg'), // Add your own image
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
    logo: require('../../assets/images/carter-logo.jpg'), // Add your own image
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#000' : '#fff' }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: isDark ? '#000' : '#fff', paddingHorizontal: 18 }}
        contentContainerStyle={{
          paddingTop: Platform.OS === 'android' ? 38 : 18,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
            marginTop: Platform.OS === 'android' ? 10 : 0,
          }}
        >
          <View>
            <Text style={{ fontSize: 15, color: isDark ? '#e5e7eb' : '#444', marginBottom: 2 }}>
              Welcome to AfriHustle,
            </Text>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: isDark ? '#fff' : '#222' }}>
              <Text style={{ color: '#00B9A0' }}>Discover Jobs!</Text>
            </Text>
          </View>
          {/* Profile icon */}
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require('../../assets/images/jinesh.jpg')}
              style={{ width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: '#00B9A0' }}
            />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: isDark ? '#222' : '#f2f2f2',
            borderRadius: 16,
            paddingHorizontal: 14,
            paddingVertical: 12,
            marginBottom: 28,
          }}
          onPress={() => router.push('/(tabs)/search')}
          activeOpacity={0.9}
        >
          <Ionicons name="search" size={22} color="#00B9A0" />
          <Text style={{ flex: 1, marginLeft: 10, fontSize: 16, color: isDark ? '#aaa' : '#888' }}>
            Search a job or position
          </Text>
        </TouchableOpacity>

        {/* Recent Jobs */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: '600', color: isDark ? '#fff' : '#222' }}>Recent jobs</Text>
          <TouchableOpacity>
            <Text style={{ color: '#00B9A0', fontWeight: '500', fontSize: 15 }}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 28 }}>
          {recentJobs.map((job) => (
            <TouchableOpacity
              key={job.id}
              style={{
                backgroundColor: isDark ? '#181818' : '#fff',
                borderWidth: 1.5,
                borderColor: '#00B9A0',
                borderRadius: 20,
                marginRight: 16,
                paddingVertical: 22,
                paddingHorizontal: 22,
                alignItems: 'center',
                justifyContent: 'center',
                width: 180,
                shadowColor: '#00B9A0',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 6,
                elevation: 2,
              }}
              onPress={() => router.push('/(tabs)/details')}
              activeOpacity={0.9}
            >
              <Image
                source={job.logo}
                style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 10 }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', color: isDark ? '#fff' : '#222' }}>{job.title}</Text>
              <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888', marginTop: 2 }}>{job.company}</Text>
              <Text style={{ color: '#00B9A0', fontWeight: '600', marginTop: 8, fontSize: 15 }}>{job.salary}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Jobs */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: '600', color: isDark ? '#fff' : '#222' }}>Popular jobs</Text>
          <TouchableOpacity>
            <Text style={{ color: '#00B9A0', fontWeight: '500', fontSize: 15 }}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 18,
                borderBottomWidth: 1,
                borderBottomColor: isDark ? '#222' : '#f3f4f6',
                marginBottom: 2,
              }}
              onPress={() => router.push('/(tabs)/details')}
              activeOpacity={0.9}
            >
              <Image
                source={item.logo}
                style={{ width: 40, height: 40, borderRadius: 12, marginRight: 16 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '600', fontSize: 15, color: isDark ? '#fff' : '#222' }}>{item.title}</Text>
                <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888', marginTop: 2 }}>
                  {item.company} • {item.location}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: '#00B9A0', fontWeight: '600', fontSize: 15 }}>{item.salary}</Text>
                <View style={{ marginTop: 4 }}>
                  <Text style={{
                    fontSize: 12,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    backgroundColor: item.type === 'Full-Time' ? '#00B9A0' : '#e6f7f5',
                    color: item.type === 'Full-Time' ? '#fff' : '#00B9A0',
                    fontWeight: '500',
                    overflow: 'hidden',
                  }}>
                    {item.type}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

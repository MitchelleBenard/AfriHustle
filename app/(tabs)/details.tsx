import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

const job = {
  title: 'UI/UX Designer',
  company: 'Pinterest',
  logo: require('../../assets/images/pinterest.jpg'),
  location: 'Nairobi, Kenya',
  salary: '$10000/m',
  type: 'Full-Time',
  description: `We are looking for a talented UI/UX Designer to join our growing product team. You will create clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts.

**Responsibilities**
- Collaborate with product management and engineering to define and implement innovative solutions.
- Execute all visual design stages from concept to final hand-off.
- Present and defend designs.

**Requirements**
- Proven UI/UX experience.
- Strong portfolio.
- Proficiency in Figma, Adobe XD.
- Up-to-date with the latest UI trends.`,
};

export default function DetailsScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#101114' : '#fff',
        paddingTop: 38,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ marginBottom: 18, alignSelf: 'flex-start', backgroundColor: '#e6f7f5', borderRadius: 100, padding: 8 }}
      >
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Job Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 28 }}>
        <Image
          source={job.logo}
          style={{
            width: 60,
            height: 60,
            borderRadius: 14,
            marginRight: 16,
            backgroundColor: "#e6f7f5",
            borderWidth: 1,
            borderColor: isDark ? '#222' : '#e6f7f5',
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: isDark ? '#fff' : '#181d20', marginBottom: 2 }}>
            {job.title}
          </Text>
          <Text style={{ color: isDark ? '#aaa' : '#888', fontSize: 15 }}>{job.company}</Text>
        </View>
        <TouchableOpacity style={{ padding: 6 }}>
          <Ionicons name="bookmark-outline" size={26} color="#00B9A0" />
        </TouchableOpacity>
      </View>

      {/* Job Meta */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 22 }}>
        <Ionicons name="location-outline" size={18} color="#00B9A0" />
        <Text style={{ marginLeft: 4, marginRight: 18, color: isDark ? '#aaa' : '#666', fontSize: 15 }}>
          {job.location}
        </Text>
        <Ionicons name="cash-outline" size={18} color="#00B9A0" />
        <Text style={{ marginLeft: 4, marginRight: 18, color: '#00B9A0', fontWeight: '600', fontSize: 15 }}>
          {job.salary}
        </Text>
        <Text
          style={{
            fontSize: 13,
            backgroundColor: isDark ? '#1a2320' : '#e6f7f5',
            color: '#00B9A0',
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 999,
            fontWeight: '600',
            overflow: 'hidden',
          }}
        >
          {job.type}
        </Text>
      </View>

      {/* Description */}
      <Text style={{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 8,
        color: isDark ? '#fff' : '#181d20',
      }}>
        Job Description
      </Text>
      <Text style={{
        color: isDark ? '#e5e7eb' : '#444',
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 28,
      }}>
        {job.description}
      </Text>

      {/* Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 32 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: isDark ? '#181d20' : '#fff',
            borderWidth: 2,
            borderColor: '#00B9A0',
            paddingVertical: 14,
            borderRadius: 999,
            marginRight: 10,
            alignItems: 'center',
            shadowColor: '#00B9A0',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 6,
            elevation: 2,
          }}
          activeOpacity={0.85}
        >
          <Text style={{ color: '#00B9A0', fontWeight: 'bold', fontSize: 16 }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#00B9A0',
            paddingVertical: 14,
            borderRadius: 999,
            marginLeft: 10,
            alignItems: 'center',
            shadowColor: '#00B9A0',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.12,
            shadowRadius: 8,
            elevation: 3,
          }}
          activeOpacity={0.85}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
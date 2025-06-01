import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Example job data (replace with real job passed as param/prop later)
const job = {
  title: 'UI/UX Designer',
  company: 'Pinterest',
  logo: require('../../assets/images/pinterest-logo.png'), // Add your own image
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

  return (
    <ScrollView className="flex-1 bg-white pt-10 px-6">
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Job Header */}
      <View className="flex-row items-center mb-6">
        <Image
          source={job.logo}
          style={{ width: 56, height: 56, borderRadius: 12, marginRight: 14, backgroundColor: "#e6f7f5" }}
        />
        <View className="flex-1">
          <Text className="font-bold text-lg">{job.title}</Text>
          <Text className="text-gray-500">{job.company}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={26} color="#00B9A0" />
        </TouchableOpacity>
      </View>

      {/* Job Meta */}
      <View className="flex-row items-center mb-5">
        <Ionicons name="location-outline" size={18} color="#00B9A0" />
        <Text className="ml-1 mr-6 text-gray-600">{job.location}</Text>
        <Ionicons name="cash-outline" size={18} color="#00B9A0" />
        <Text className="ml-1 mr-6 text-[#00B9A0] font-medium">{job.salary}</Text>
        <Text className="text-xs bg-[#e6f7f5] text-[#00B9A0] px-2 py-0.5 rounded-full">
          {job.type}
        </Text>
      </View>

      {/* Description */}
      <Text className="text-base font-semibold mb-2">Job Description</Text>
      <Text className="text-gray-700 mb-7">{job.description}</Text>

      {/* Buttons */}
      <View className="flex-row justify-between mt-2 mb-10">
        <TouchableOpacity
          className="flex-1 bg-white border border-[#00B9A0] py-3 rounded-full mr-3 items-center"
          activeOpacity={0.85}
        >
          <Text className="text-[#00B9A0] font-bold">Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 bg-[#00B9A0] py-3 rounded-full ml-3 items-center"
          activeOpacity={0.85}
        >
          <Text className="text-white font-bold">Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
//         {item.type}
//               {item.type}
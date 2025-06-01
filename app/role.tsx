import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function RoleScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<"jobseeker" | "employer" | null>(null);

  const handleContinue = () => {
    if (!selected) return;
    // Replace with your actual next screen:
    router.replace('/profile/personal-info');
  };

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-center text-lg text-gray-800 mb-2 font-semibold">
        Select how you want to use AfriHustle.
      </Text>
      <Text className="text-center text-[#00B9A0] text-base mb-6 font-medium underline">
        Choose Your Role
      </Text>

      {/* Role Cards */}
      <View className="space-y-5 mt-2 mb-14">
        <TouchableOpacity
          onPress={() => setSelected('jobseeker')}
          activeOpacity={0.85}
          className={`
            border-2 rounded-2xl py-8 items-center
            ${selected === 'jobseeker' ? 'border-[#00B9A0] bg-[#e6f7f5]' : 'border-gray-200 bg-white'}
          `}
        >
          <Text className="text-lg font-medium text-gray-800">I'm a Job Seeker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelected('employer')}
          activeOpacity={0.85}
          className={`
            border-2 rounded-2xl py-8 items-center
            ${selected === 'employer' ? 'border-[#00B9A0] bg-[#e6f7f5]' : 'border-gray-200 bg-white'}
          `}
        >
          <Text className="text-lg font-medium text-gray-800">I'm an Employer</Text>
        </TouchableOpacity>
      </View>

      {/* Complete Profile Button */}
      <TouchableOpacity
        className={`rounded-full py-3 ${selected ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={handleContinue}
        disabled={!selected}
        activeOpacity={selected ? 0.85 : 1}
      >
        <Text className="text-white text-lg font-bold text-center">
          Complete Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

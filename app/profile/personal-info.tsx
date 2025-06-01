import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PersonalInfoScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  // Example locations, you can replace with your real data or a picker later
  const locationOptions = ['Nairobi', 'Mombasa', 'Kisumu', 'Remote', 'Other'];

  const [showLocationOptions, setShowLocationOptions] = useState(false);

  const canContinue = fullName && jobTitle && phone && location;

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-10" keyboardShouldPersistTaps="handled">
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Progress bar */}
      <View className="flex-row items-center mb-7">
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full ml-2" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full ml-2" />
      </View>

      {/* Profile Icon */}
      <View className="items-center mb-7">
        <Ionicons name="person-circle" size={80} color="#00B9A0" />
      </View>

      {/* Form */}
      <Text className="text-xl font-bold text-center mb-6">Personal Information</Text>

      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
      />
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="+254 Enter Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Location Dropdown */}
      <TouchableOpacity
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 flex-row justify-between items-center"
        onPress={() => setShowLocationOptions((v) => !v)}
        activeOpacity={0.85}
      >
        <Text className={`text-gray-700 ${location ? '' : 'text-gray-400'}`}>
          {location ? location : 'Select Location'}
        </Text>
        <Ionicons name={showLocationOptions ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
      </TouchableOpacity>
      {showLocationOptions && (
        <View className="border border-gray-200 rounded-xl mb-4 bg-white shadow">
          {locationOptions.map((opt) => (
            <TouchableOpacity
              key={opt}
              className="py-3 px-4"
              onPress={() => {
                setLocation(opt);
                setShowLocationOptions(false);
              }}
            >
              <Text>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Continue Button */}
      <TouchableOpacity
        className={`rounded-full py-3 mt-6 ${canContinue ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={() => router.replace('/profile/skills')}
        disabled={!canContinue}
      >
        <Text className="text-white text-lg font-bold text-center">Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// This code defines a personal information screen for a profile setup in a React Native application.
// It includes fields for full name, job title, phone number, and location selection.
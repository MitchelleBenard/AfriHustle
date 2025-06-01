import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Experience {
  title: string;
  company: string;
  years: string;
}

export default function WorkExperienceScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [years, setYears] = useState('');
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const addExperience = () => {
    if (title.trim() && company.trim() && years.trim()) {
      setExperiences([
        ...experiences,
        { title: title.trim(), company: company.trim(), years: years.trim() },
      ]);
      setTitle('');
      setCompany('');
      setYears('');
    }
  };

  const removeExperience = (idx: number) => {
    setExperiences(experiences.filter((_, i) => i !== idx));
  };

  const canContinue = experiences.length > 0;

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-10" keyboardShouldPersistTaps="handled">
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Progress bar */}
      <View className="flex-row items-center mb-7">
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full" />
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full ml-2" />
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full ml-2" />
      </View>

      {/* Work Icon */}
      <View className="items-center mb-7">
        <Ionicons name="briefcase-outline" size={80} color="#00B9A0" />
      </View>

      {/* Screen Title */}
      <Text className="text-xl font-bold text-center mb-6">Work Experience</Text>

      {/* Experience Form */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Job Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Company"
        value={company}
        onChangeText={setCompany}
      />
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Years (e.g., 2019-2022 or 3 years)"
        value={years}
        onChangeText={setYears}
      />

      {/* Add Experience Button */}
      <TouchableOpacity
        className={`rounded-full py-3 mb-7 ${title && company && years ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={addExperience}
        disabled={!(title && company && years)}
      >
        <Text className="text-white text-lg font-bold text-center">Add Experience</Text>
      </TouchableOpacity>

      {/* List of Experiences */}
      <View className="mb-8">
        {experiences.map((exp, idx) => (
          <View
            key={idx}
            className="border border-[#00B9A0] bg-[#e6f7f5] rounded-2xl px-4 py-4 mb-3 flex-row items-center justify-between"
          >
            <View>
              <Text className="font-semibold text-[#00B9A0]">{exp.title}</Text>
              <Text className="text-gray-700">{exp.company}</Text>
              <Text className="text-gray-500">{exp.years}</Text>
            </View>
            <TouchableOpacity onPress={() => removeExperience(idx)}>
              <Ionicons name="trash" size={22} color="#00B9A0" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className={`rounded-full py-3 mb-10 ${canContinue ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={() => router.replace('/(tabs)')}
        disabled={!canContinue}
      >
        <Text className="text-white text-lg font-bold text-center">Finish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
// This code defines a React Native screen for adding work experience in a user profile.
// It allows users to input job title, company, and years of experience, add multiple experiences,
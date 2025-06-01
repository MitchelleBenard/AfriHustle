import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SkillsScreen() {
  const router = useRouter();
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState<string[]>([]);

  const addSkill = () => {
    const trimmed = skill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkill('');
    }
  };

  const removeSkill = (idx: number) => {
    setSkills(skills.filter((_, i) => i !== idx));
  };

  const canContinue = skills.length > 0;

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
        <View className="flex-1 h-1 bg-gray-200 rounded-full ml-2" />
      </View>

      {/* Skills Icon */}
      <View className="items-center mb-7">
        <Ionicons name="build-outline" size={80} color="#00B9A0" />
      </View>

      {/* Screen Title */}
      <Text className="text-xl font-bold text-center mb-6">Your Skills</Text>

      {/* Skills Input */}
      <View className="flex-row items-center mb-4">
        <TextInput
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3"
          placeholder="Add a skill"
          value={skill}
          onChangeText={setSkill}
          autoCapitalize="words"
          onSubmitEditing={addSkill}
          returnKeyType="done"
        />
        <TouchableOpacity
          onPress={addSkill}
          className="ml-2 bg-[#00B9A0] rounded-full p-3"
        >
          <Ionicons name="add" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Skills List */}
      <View className="flex-row flex-wrap">
        {skills.map((item, idx) => (
          <View
            key={idx}
            className="flex-row items-center px-3 py-1 bg-[#e6f7f5] rounded-full mr-2 mb-2"
          >
            <Text className="mr-2 text-[#00B9A0]">{item}</Text>
            <TouchableOpacity onPress={() => removeSkill(idx)}>
              <Ionicons name="close-circle" size={18} color="#00B9A0" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        className={`rounded-full py-3 mt-10 ${canContinue ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={() => router.replace('/profile/work-experience')}
        disabled={!canContinue}
      >
        <Text className="text-white text-lg font-bold text-center">Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// This code defines a SkillsScreen component that allows users to add and manage their skills.
// It includes a back button, a progress bar, an icon, an input field for skills, and a list of added skills.
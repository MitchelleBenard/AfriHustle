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
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 24 }}
      contentContainerStyle={{ paddingTop: 40, paddingBottom: 32 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* Back arrow */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginBottom: 18,
          alignSelf: 'flex-start',
          backgroundColor: '#e6f7f5',
          borderRadius: 100,
          padding: 8,
        }}
      >
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Progress bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 28 }}>
        <View style={{ flex: 1, height: 5, backgroundColor: '#00B9A0', borderRadius: 8 }} />
        <View style={{ flex: 1, height: 5, backgroundColor: '#00B9A0', borderRadius: 8, marginLeft: 8 }} />
        <View style={{ flex: 1, height: 5, backgroundColor: '#e5e7eb', borderRadius: 8, marginLeft: 8 }} />
      </View>

      {/* Skills Icon */}
      <View style={{ alignItems: 'center', marginBottom: 24 }}>
        <Ionicons name="build-outline" size={80} color="#00B9A0" />
      </View>

      {/* Screen Title */}
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
        color: '#222',
        letterSpacing: 0.2,
      }}>
        Your Skills
      </Text>
      <Text style={{
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
        marginBottom: 24,
      }}>
        Add your top skills. You can add more later.
      </Text>

      {/* Skills Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: '#e5e7eb',
            borderRadius: 14,
            paddingHorizontal: 16,
            paddingVertical: 13,
            fontSize: 16,
            backgroundColor: '#fafafa',
          }}
          placeholder="Add a skill"
          placeholderTextColor="#aaa"
          value={skill}
          onChangeText={setSkill}
          autoCapitalize="words"
          onSubmitEditing={addSkill}
          returnKeyType="done"
        />
        <TouchableOpacity
          onPress={addSkill}
          style={{
            marginLeft: 10,
            backgroundColor: '#00B9A0',
            borderRadius: 100,
            padding: 12,
            shadowColor: '#00B9A0',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.12,
            shadowRadius: 4,
            elevation: 2,
          }}
          activeOpacity={0.85}
        >
          <Ionicons name="add" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Skills List */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 }}>
        {skills.map((item, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 14,
              paddingVertical: 7,
              backgroundColor: '#e6f7f5',
              borderRadius: 999,
              marginRight: 8,
              marginBottom: 8,
            }}
          >
            <Text style={{ marginRight: 6, color: '#00B9A0', fontWeight: '500' }}>{item}</Text>
            <TouchableOpacity onPress={() => removeSkill(idx)}>
              <Ionicons name="close-circle" size={18} color="#00B9A0" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={{
          borderRadius: 24,
          paddingVertical: 16,
          marginTop: 32,
          backgroundColor: canContinue ? '#00B9A0' : '#e0e0e0',
          shadowColor: '#00B9A0',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: canContinue ? 0.15 : 0,
          shadowRadius: 8,
          elevation: canContinue ? 4 : 0,
        }}
        onPress={() => router.replace('/profile/work-experience')}
        disabled={!canContinue}
        activeOpacity={canContinue ? 0.85 : 1}
      >
        <Text style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: 0.5,
        }}>
          Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// This code defines a SkillsScreen component that allows users to add and manage their skills.
// It includes a back button, a progress bar, an icon, an input field for skills, and a list of added skills.
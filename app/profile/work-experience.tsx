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
        <View style={{ flex: 1, height: 5, backgroundColor: '#00B9A0', borderRadius: 8, marginLeft: 8 }} />
      </View>

      {/* Work Icon */}
      <View style={{ alignItems: 'center', marginBottom: 24 }}>
        <Ionicons name="briefcase-outline" size={80} color="#00B9A0" />
      </View>

      {/* Screen Title */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 8,
          color: '#222',
          letterSpacing: 0.2,
        }}
      >
        Work Experience
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: '#666',
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        Add your relevant work experience. You can add more later.
      </Text>

      {/* Experience Form */}
      <View style={{ gap: 14, marginBottom: 18 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#e5e7eb',
            borderRadius: 14,
            paddingHorizontal: 16,
            paddingVertical: 13,
            fontSize: 16,
            backgroundColor: '#fafafa',
          }}
          placeholder="Job Title"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#e5e7eb',
            borderRadius: 14,
            paddingHorizontal: 16,
            paddingVertical: 13,
            fontSize: 16,
            backgroundColor: '#fafafa',
          }}
          placeholder="Company"
          placeholderTextColor="#aaa"
          value={company}
          onChangeText={setCompany}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#e5e7eb',
            borderRadius: 14,
            paddingHorizontal: 16,
            paddingVertical: 13,
            fontSize: 16,
            backgroundColor: '#fafafa',
          }}
          placeholder="Years (e.g., 2019-2022 or 3 years)"
          placeholderTextColor="#aaa"
          value={years}
          onChangeText={setYears}
        />
        <TouchableOpacity
          style={{
            borderRadius: 24,
            paddingVertical: 14,
            marginTop: 6,
            backgroundColor: title && company && years ? '#00B9A0' : '#e0e0e0',
            shadowColor: '#00B9A0',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: title && company && years ? 0.12 : 0,
            shadowRadius: 8,
            elevation: title && company && years ? 3 : 0,
          }}
          onPress={addExperience}
          disabled={!(title && company && years)}
          activeOpacity={title && company && years ? 0.85 : 1}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: 0.5,
            }}
          >
            Add Experience
          </Text>
        </TouchableOpacity>
      </View>

      {/* List of Experiences */}
      <View style={{ marginBottom: 32 }}>
        {experiences.map((exp, idx) => (
          <View
            key={idx}
            style={{
              borderWidth: 1.5,
              borderColor: '#00B9A0',
              backgroundColor: '#e6f7f5',
              borderRadius: 18,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              shadowColor: '#00B9A0',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <View>
              <Text style={{ fontWeight: '600', color: '#00B9A0', fontSize: 16 }}>{exp.title}</Text>
              <Text style={{ color: '#444', fontSize: 15 }}>{exp.company}</Text>
              <Text style={{ color: '#888', fontSize: 14 }}>{exp.years}</Text>
            </View>
            <TouchableOpacity onPress={() => removeExperience(idx)}>
              <Ionicons name="trash" size={22} color="#00B9A0" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={{
          borderRadius: 24,
          paddingVertical: 16,
          marginBottom: 16,
          backgroundColor: canContinue ? '#00B9A0' : '#e0e0e0',
          shadowColor: '#00B9A0',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: canContinue ? 0.15 : 0,
          shadowRadius: 8,
          elevation: canContinue ? 4 : 0,
        }}
        onPress={() => router.replace('/(tabs)/home')}
        disabled={!canContinue}
        activeOpacity={canContinue ? 0.85 : 1}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 0.5,
          }}
        >
          Finish
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
// This code defines a React Native screen for adding work experience in a user profile.
// It allows users to input job title, company, and years of experience, add multiple experiences,
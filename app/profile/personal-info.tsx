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
  const locationOptions = ['Nairobi', 'Mombasa', 'Kisumu', 'Remote', 'Other'];
  const [showLocationOptions, setShowLocationOptions] = useState(false);

  const canContinue = fullName && jobTitle && phone && location;

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
        <View style={{ flex: 1, height: 5, backgroundColor: '#e5e7eb', borderRadius: 8, marginLeft: 8 }} />
        <View style={{ flex: 1, height: 5, backgroundColor: '#e5e7eb', borderRadius: 8, marginLeft: 8 }} />
      </View>

      {/* Profile Icon */}
      <View style={{ alignItems: 'center', marginBottom: 24 }}>
        <Ionicons name="person-circle" size={80} color="#00B9A0" />
      </View>

      {/* Title */}
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
        color: '#222',
        letterSpacing: 0.2,
      }}>
        Personal Information
      </Text>
      <Text style={{
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
        marginBottom: 24,
      }}>
        Tell us a bit about yourself to get started.
      </Text>

      {/* Form Fields */}
      <View style={{ gap: 18 }}>
        <View>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
            Full Name
          </Text>
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
            placeholder="Enter your full name"
            placeholderTextColor="#aaa"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
            Job Title
          </Text>
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
            placeholder="e.g. Software Engineer"
            placeholderTextColor="#aaa"
            value={jobTitle}
            onChangeText={setJobTitle}
          />
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
            Phone Number
          </Text>
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
            placeholder="+254 Enter Phone Number"
            placeholderTextColor="#aaa"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        {/* Location Dropdown */}
        <View>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
            Location
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#e5e7eb',
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingVertical: 13,
              backgroundColor: '#fafafa',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setShowLocationOptions((v) => !v)}
            activeOpacity={0.85}
          >
            <Text style={{ color: location ? '#222' : '#aaa', fontSize: 16 }}>
              {location ? location : 'Select Location'}
            </Text>
            <Ionicons name={showLocationOptions ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
          </TouchableOpacity>
          {showLocationOptions && (
            <View style={{
              borderWidth: 1,
              borderColor: '#e5e7eb',
              borderRadius: 14,
              marginTop: 2,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 6,
              elevation: 2,
            }}>
              {locationOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={{
                    paddingVertical: 13,
                    paddingHorizontal: 16,
                    borderBottomWidth: opt !== locationOptions[locationOptions.length - 1] ? 1 : 0,
                    borderBottomColor: '#f3f4f6',
                  }}
                  onPress={() => {
                    setLocation(opt);
                    setShowLocationOptions(false);
                  }}
                >
                  <Text style={{ color: '#222', fontSize: 16 }}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
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
        onPress={() => router.replace('/profile/skills')}
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

// This code defines a personal information screen for a profile setup in a React Native application.
// It includes fields for full name, job title, phone number, and location selection.
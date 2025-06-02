import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function RoleScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<"jobseeker" | "employer" | null>(null);

  const handleContinue = () => {
    if (!selected) return;
    router.replace('/profile/personal-info');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 32 }}>
        {/* Back Arrow */}
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
          <Ionicons name="arrow-back" size={24} color="#00B9A0" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={{
          textAlign: 'center',
          fontSize: 22,
          fontWeight: 'bold',
          color: '#222',
          marginBottom: 6,
          letterSpacing: 0.2,
        }}>
          Select how you want to use AfriHustle
        </Text>
        <Text style={{
          textAlign: 'center',
          color: '#00B9A0',
          fontSize: 16,
          fontWeight: '600',
          marginBottom: 32,
          textDecorationLine: 'underline',
        }}>
          Choose Your Role
        </Text>

        {/* Role Cards */}
        <View style={{ gap: 20, marginBottom: 48 }}>
          <TouchableOpacity
            onPress={() => setSelected('jobseeker')}
            activeOpacity={0.85}
            style={{
              borderWidth: 2,
              borderColor: selected === 'jobseeker' ? '#00B9A0' : '#e5e7eb',
              backgroundColor: selected === 'jobseeker' ? '#e6f7f5' : '#fff',
              borderRadius: 20,
              paddingVertical: 32,
              alignItems: 'center',
              shadowColor: selected === 'jobseeker' ? '#00B9A0' : '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: selected === 'jobseeker' ? 0.08 : 0.03,
              shadowRadius: 6,
              elevation: selected === 'jobseeker' ? 3 : 1,
            }}
          >
            <Ionicons name="person" size={36} color={selected === 'jobseeker' ? "#00B9A0" : "#bbb"} style={{ marginBottom: 10 }} />
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#222',
              marginBottom: 4,
            }}>
              I'm a Job Seeker
            </Text>
            <Text style={{
              fontSize: 14,
              color: '#666',
              textAlign: 'center',
              maxWidth: 220,
            }}>
              Find jobs, gigs, and opportunities tailored for you.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelected('employer')}
            activeOpacity={0.85}
            style={{
              borderWidth: 2,
              borderColor: selected === 'employer' ? '#00B9A0' : '#e5e7eb',
              backgroundColor: selected === 'employer' ? '#e6f7f5' : '#fff',
              borderRadius: 20,
              paddingVertical: 32,
              alignItems: 'center',
              shadowColor: selected === 'employer' ? '#00B9A0' : '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: selected === 'employer' ? 0.08 : 0.03,
              shadowRadius: 6,
              elevation: selected === 'employer' ? 3 : 1,
            }}
          >
            <Ionicons name="briefcase" size={36} color={selected === 'employer' ? "#00B9A0" : "#bbb"} style={{ marginBottom: 10 }} />
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#222',
              marginBottom: 4,
            }}>
              I'm an Employer
            </Text>
            <Text style={{
              fontSize: 14,
              color: '#666',
              textAlign: 'center',
              maxWidth: 220,
            }}>
              Post jobs and connect with top African talent.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={{
            backgroundColor: selected ? '#00B9A0' : '#e0e0e0',
            borderRadius: 24,
            paddingVertical: 16,
            marginBottom: 16,
            shadowColor: '#00B9A0',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: selected ? 0.15 : 0,
            shadowRadius: 8,
            elevation: selected ? 4 : 0,
          }}
          onPress={handleContinue}
          disabled={!selected}
          activeOpacity={selected ? 0.85 : 1}
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
      </View>
    </SafeAreaView>
  );
}

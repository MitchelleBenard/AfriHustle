import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EducationScreen() {
  const router = useRouter();

  const [level, setLevel] = useState('');
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const levelOptions = ['PhD', 'Masters', 'Bachelors', 'Diploma', 'Certificate', 'High School'];

  const [course, setCourse] = useState('');
  const [institution, setInstitution] = useState('');
  const [year, setYear] = useState('');
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const yearOptions = Array.from({ length: 40 }, (_, i) => `${new Date().getFullYear() - i}`);

  const [portfolio, setPortfolio] = useState('');
  const [cvUploaded, setCvUploaded] = useState(false);

  const canSave = level && course && institution && year;

  // Dummy CV upload handler
  const handleCvUpload = () => {
    setCvUploaded(true);
    // Real app: Launch file picker here!
  };

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
        <View style={{ flex: 1, height: 5, backgroundColor: '#00B9A0', borderRadius: 8, marginLeft: 8 }} />
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
        Education
      </Text>

      {/* Level of Education Dropdown */}
      <View style={{ marginBottom: 18 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#444',
            marginBottom: 6,
            marginLeft: 2,
          }}
        >
          Level of Education (Highest)
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
          onPress={() => setShowLevelDropdown((v) => !v)}
          activeOpacity={0.85}
        >
          <Text style={{ color: level ? '#222' : '#aaa', fontSize: 16 }}>
            {level ? level : 'Select Level'}
          </Text>
          <Ionicons name={showLevelDropdown ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
        </TouchableOpacity>
        {showLevelDropdown && (
          <View
            style={{
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
              maxHeight: 220,
            }}
          >
            <ScrollView>
              {levelOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={{
                    paddingVertical: 13,
                    paddingHorizontal: 16,
                    borderBottomWidth: opt !== levelOptions[levelOptions.length - 1] ? 1 : 0,
                    borderBottomColor: '#f3f4f6',
                  }}
                  onPress={() => {
                    setLevel(opt);
                    setShowLevelDropdown(false);
                  }}
                >
                  <Text style={{ color: '#222', fontSize: 16 }}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      {/* Course */}
      <View style={{ marginBottom: 18 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#444',
            marginBottom: 6,
            marginLeft: 2,
          }}
        >
          Course
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
          placeholder="E.g. Bachelors in Finance and Accounting"
          value={course}
          onChangeText={setCourse}
        />
      </View>

      {/* Institution */}
      <View style={{ marginBottom: 18 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#444',
            marginBottom: 6,
            marginLeft: 2,
          }}
        >
          Institution
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
          placeholder="Institution"
          value={institution}
          onChangeText={setInstitution}
        />
      </View>

      {/* Year of Completion Dropdown */}
      <View style={{ marginBottom: 18 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#444',
            marginBottom: 6,
            marginLeft: 2,
          }}
        >
          Year of Completion
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
          onPress={() => setShowYearDropdown((v) => !v)}
          activeOpacity={0.85}
        >
          <Text style={{ color: year ? '#222' : '#aaa', fontSize: 16 }}>
            {year ? year : 'Select Year'}
          </Text>
          <Ionicons name={showYearDropdown ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
        </TouchableOpacity>
        {showYearDropdown && (
          <View
            style={{
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
              maxHeight: 220,
            }}
          >
            <ScrollView>
              {yearOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={{
                    paddingVertical: 13,
                    paddingHorizontal: 16,
                    borderBottomWidth: opt !== yearOptions[yearOptions.length - 1] ? 1 : 0,
                    borderBottomColor: '#f3f4f6',
                  }}
                  onPress={() => {
                    setYear(opt);
                    setShowYearDropdown(false);
                  }}
                >
                  <Text style={{ color: '#222', fontSize: 16 }}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      {/* Portfolio link (optional) */}
      <View style={{ marginBottom: 18 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#444',
            marginBottom: 6,
            marginLeft: 2,
          }}
        >
          Portfolio link (optional)
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
          placeholder="Portfolio link (optional)"
          value={portfolio}
          onChangeText={setPortfolio}
          autoCapitalize="none"
        />
      </View>

      {/* Upload CV Button */}
      <TouchableOpacity
        onPress={handleCvUpload}
        style={{
          borderWidth: 2,
          borderColor: '#00B9A0',
          borderRadius: 14,
          paddingHorizontal: 16,
          paddingVertical: 13,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24,
          backgroundColor: cvUploaded ? '#e6f7f5' : '#fff',
        }}
        activeOpacity={0.8}
      >
        <Ionicons name={cvUploaded ? 'checkmark-done' : 'cloud-upload-outline'} size={20} color="#00B9A0" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: '600',
            color: '#00B9A0',
            fontSize: 16,
          }}
        >
          {cvUploaded ? 'CV Uploaded' : 'Click to upload CV'}
        </Text>
      </TouchableOpacity>

      {/* Save Profile Button */}
      <TouchableOpacity
        style={{
          borderRadius: 24,
          paddingVertical: 16,
          marginBottom: 16,
          backgroundColor: canSave ? '#00B9A0' : '#e0e0e0',
          shadowColor: '#00B9A0',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: canSave ? 0.15 : 0,
          shadowRadius: 8,
          elevation: canSave ? 4 : 0,
        }}
        onPress={() => router.replace('/(tabs)')}
        disabled={!canSave}
        activeOpacity={canSave ? 0.85 : 1}
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
          Save Profile
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

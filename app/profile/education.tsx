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
    <ScrollView className="flex-1 bg-white px-6 pt-10" keyboardShouldPersistTaps="handled">
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Progress bar (last step) */}
      <View className="flex-row items-center mb-7">
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full" />
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full ml-2" />
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full ml-2" />
        <View className="flex-1 h-1 bg-[#00B9A0] rounded-full ml-2" />
      </View>

      {/* Screen Title */}
      <Text className="text-xl font-bold text-center mb-6">Education</Text>

      {/* Level of Education Dropdown */}
      <TouchableOpacity
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 flex-row justify-between items-center"
        onPress={() => setShowLevelDropdown((v) => !v)}
        activeOpacity={0.85}
      >
        <Text className={`text-gray-700 ${level ? '' : 'text-gray-400'}`}>
          {level ? level : 'Level of Education (Highest)'}
        </Text>
        <Ionicons name={showLevelDropdown ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
      </TouchableOpacity>
      {showLevelDropdown && (
        <View className="border border-gray-200 rounded-xl mb-4 bg-white shadow">
          {levelOptions.map((opt) => (
            <TouchableOpacity
              key={opt}
              className="py-3 px-4"
              onPress={() => {
                setLevel(opt);
                setShowLevelDropdown(false);
              }}
            >
              <Text>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Course */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="E.g. Bachelors in Finance and Accounting"
        value={course}
        onChangeText={setCourse}
      />
      {/* Institution */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Institution"
        value={institution}
        onChangeText={setInstitution}
      />

      {/* Year of Completion Dropdown */}
      <TouchableOpacity
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 flex-row justify-between items-center"
        onPress={() => setShowYearDropdown((v) => !v)}
        activeOpacity={0.85}
      >
        <Text className={`text-gray-700 ${year ? '' : 'text-gray-400'}`}>
          {year ? year : 'Year of completion'}
        </Text>
        <Ionicons name={showYearDropdown ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
      </TouchableOpacity>
      {showYearDropdown && (
        <View className="border border-gray-200 rounded-xl mb-4 bg-white shadow max-h-40">
          <ScrollView>
            {yearOptions.map((opt) => (
              <TouchableOpacity
                key={opt}
                className="py-3 px-4"
                onPress={() => {
                  setYear(opt);
                  setShowYearDropdown(false);
                }}
              >
                <Text>{opt}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Portfolio link (optional) */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Portfolio link (optional)"
        value={portfolio}
        onChangeText={setPortfolio}
        autoCapitalize="none"
      />

      {/* Upload CV Button */}
      <TouchableOpacity
        onPress={handleCvUpload}
        className="border border-[#00B9A0] rounded-xl px-4 py-3 flex-row items-center justify-center mb-6"
        activeOpacity={0.8}
      >
        <Ionicons name={cvUploaded ? 'checkmark-done' : 'cloud-upload-outline'} size={20} color="#00B9A0" />
        <Text className={`ml-2 font-semibold ${cvUploaded ? 'text-[#00B9A0]' : 'text-[#00B9A0]'}`}>
          {cvUploaded ? 'CV Uploaded' : 'Click to upload CV'}
        </Text>
      </TouchableOpacity>

      {/* Save Profile Button */}
      <TouchableOpacity
        className={`rounded-full py-3 mb-10 ${canSave ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={() => router.replace('/(tabs)')}
        disabled={!canSave}
      >
        <Text className="text-white text-lg font-bold text-center">Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

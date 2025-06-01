import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CompanyProfileScreen() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const industryOptions = [
    'Tech', 'Finance', 'Healthcare', 'Media', 'Education', 'Construction', 'Other'
  ];
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [logoUploaded, setLogoUploaded] = useState(false);

  const canSave =
    companyName && industry && website && location && email;

  // Dummy logo upload
  const handleLogoUpload = () => {
    setLogoUploaded(true);
    // TODO: integrate with image picker in production
  };

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-10" keyboardShouldPersistTaps="handled">
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Screen Title */}
      <Text className="text-xl font-bold text-center mb-7">Company Profile</Text>

      {/* Logo Upload */}
      <View className="items-center mb-7">
        <TouchableOpacity
          onPress={handleLogoUpload}
          className="rounded-full border-2 border-[#00B9A0] w-24 h-24 items-center justify-center bg-[#e6f7f5]"
          activeOpacity={0.8}
        >
          {logoUploaded ? (
            <Ionicons name="checkmark-done" size={38} color="#00B9A0" />
          ) : (
            <Ionicons name="image-outline" size={38} color="#00B9A0" />
          )}
          <View className="absolute bottom-2 right-2 bg-[#00B9A0] rounded-full p-1">
            <Ionicons name="pencil" size={16} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text className="text-[#00B9A0] mt-2 font-semibold">Upload Logo</Text>
      </View>

      {/* Company Name */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="e.g AfriHustle"
        value={companyName}
        onChangeText={setCompanyName}
      />

      {/* Industry Dropdown */}
      <TouchableOpacity
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 flex-row justify-between items-center"
        onPress={() => setShowIndustryDropdown((v) => !v)}
        activeOpacity={0.85}
      >
        <Text className={`text-gray-700 ${industry ? '' : 'text-gray-400'}`}>
          {industry ? industry : 'Select Industry'}
        </Text>
        <Ionicons name={showIndustryDropdown ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
      </TouchableOpacity>
      {showIndustryDropdown && (
        <View className="border border-gray-200 rounded-xl mb-4 bg-white shadow">
          {industryOptions.map((opt) => (
            <TouchableOpacity
              key={opt}
              className="py-3 px-4"
              onPress={() => {
                setIndustry(opt);
                setShowIndustryDropdown(false);
              }}
            >
              <Text>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Website */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="https://www.africahustle.com"
        value={website}
        onChangeText={setWebsite}
        autoCapitalize="none"
        keyboardType="url"
      />

      {/* Location */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Nairobi, Kenya"
        value={location}
        onChangeText={setLocation}
      />

      {/* Email */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

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

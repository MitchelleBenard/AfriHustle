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

      {/* Screen Title */}
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#222',
        letterSpacing: 0.2,
      }}>
        Company Profile
      </Text>

      {/* Logo Upload */}
      <View style={{ alignItems: 'center', marginBottom: 28 }}>
        <TouchableOpacity
          onPress={handleLogoUpload}
          style={{
            borderRadius: 999,
            borderWidth: 2,
            borderColor: '#00B9A0',
            width: 96,
            height: 96,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e6f7f5',
            position: 'relative',
          }}
          activeOpacity={0.8}
        >
          {logoUploaded ? (
            <Ionicons name="checkmark-done" size={38} color="#00B9A0" />
          ) : (
            <Ionicons name="image-outline" size={38} color="#00B9A0" />
          )}
          <View style={{
            position: 'absolute',
            bottom: 6,
            right: 6,
            backgroundColor: '#00B9A0',
            borderRadius: 999,
            padding: 4,
          }}>
            <Ionicons name="pencil" size={16} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={{
          color: '#00B9A0',
          marginTop: 10,
          fontWeight: '600',
          fontSize: 15,
        }}>
          Upload Logo
        </Text>
      </View>

      {/* Company Name */}
      <View style={{ marginBottom: 18 }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
          Company Name
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
          placeholder="e.g AfriHustle"
          value={companyName}
          onChangeText={setCompanyName}
        />
      </View>

      {/* Industry Dropdown */}
      <View style={{ marginBottom: 18 }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
          Industry
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
          onPress={() => setShowIndustryDropdown((v) => !v)}
          activeOpacity={0.85}
        >
          <Text style={{ color: industry ? '#222' : '#aaa', fontSize: 16 }}>
            {industry ? industry : 'Select Industry'}
          </Text>
          <Ionicons name={showIndustryDropdown ? 'chevron-up' : 'chevron-down'} size={22} color="#00B9A0" />
        </TouchableOpacity>
        {showIndustryDropdown && (
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
            maxHeight: 220,
          }}>
            <ScrollView>
              {industryOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={{
                    paddingVertical: 13,
                    paddingHorizontal: 16,
                    borderBottomWidth: opt !== industryOptions[industryOptions.length - 1] ? 1 : 0,
                    borderBottomColor: '#f3f4f6',
                  }}
                  onPress={() => {
                    setIndustry(opt);
                    setShowIndustryDropdown(false);
                  }}
                >
                  <Text style={{ color: '#222', fontSize: 16 }}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      {/* Website */}
      <View style={{ marginBottom: 18 }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
          Website
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
          placeholder="https://www.africahustle.com"
          value={website}
          onChangeText={setWebsite}
          autoCapitalize="none"
          keyboardType="url"
        />
      </View>

      {/* Location */}
      <View style={{ marginBottom: 18 }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
          Location
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
          placeholder="Nairobi, Kenya"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Email */}
      <View style={{ marginBottom: 28 }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
          Email
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
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

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
        <Text style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: 0.5,
        }}>
          Save Profile
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import { Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, useColorScheme, Platform } from 'react-native';

// Example job data (replace with actual passed data)
const job = {
  title: 'Software Developer',
  company: 'Spotify',
  logo: require('../../assets/images/spotify-logo.jpg'),
  location: 'CapeTown, S.A',
  salary: '$30k/m',
};

export default function ApplyScreen() {
  const router = useRouter();
  const [coverLetter, setCoverLetter] = useState('');
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleUploadPDF = () => {
    setPdfUploaded(true);
  };

  const handleSubmit = () => {
    alert('Application submitted!');
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#101114' : '#f7f9fa',
        paddingTop: Platform.OS === 'android' ? 38 : 18,
        paddingHorizontal: 20,
      }}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: 32 }}
    >
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
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Job Summary */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22,
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{
            backgroundColor: isDark ? '#181d20' : '#fff',
            padding: 10,
            borderRadius: 16,
            marginRight: 14,
            shadowColor: isDark ? '#222' : '#00B9A0',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.07,
            shadowRadius: 5,
            elevation: 2,
          }}>
            <Entypo name="spotify-with-circle" size={36} color="#1DB954" />
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: isDark ? '#fff' : '#181d20' }}>{job.title}</Text>
            <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888', marginTop: 2 }}>{job.company}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontWeight: '600', fontSize: 16, color: '#00B9A0' }}>{job.salary}</Text>
          <Text style={{ fontSize: 13, color: isDark ? '#aaa' : '#888', marginTop: 2 }}>{job.location}</Text>
        </View>
      </View>

      {/* Profile Summary */}
      <Text style={{
        marginBottom: 8,
        marginTop: 8,
        fontWeight: '500',
        fontSize: 15,
        color: isDark ? '#aaa' : '#444',
      }}>
        Your profile
      </Text>
      <View style={{
        backgroundColor: isDark ? '#181d20' : '#fff',
        borderRadius: 18,
        paddingVertical: 24,
        paddingHorizontal: 16,
        marginBottom: 22,
        alignItems: 'center',
        shadowColor: isDark ? '#222' : '#00B9A0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 5,
        elevation: 2,
      }}>
        <Ionicons name="person-circle" size={50} color="#00B9A0" style={{ marginBottom: 8 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: isDark ? '#fff' : '#181d20', marginBottom: 2 }}>Alice Wambui</Text>
        <Text style={{ color: isDark ? '#aaa' : '#888', marginBottom: 6 }}>Software Developer</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="checkmark-circle" size={16} color="#00B9A0" />
          <Text style={{ fontSize: 12, color: '#00B9A0', marginLeft: 4, fontWeight: '500' }}>Verified</Text>
        </View>
      </View>

      {/* Cover Letter/Message */}
      <Text style={{
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 6,
        color: isDark ? '#fff' : '#181d20',
      }}>
        Cover Letter <Text style={{ color: isDark ? '#555' : '#bbb', fontWeight: '400' }}>(Optional)</Text>
      </Text>
      <View style={{ flexDirection: 'row', marginBottom: 18 }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: isDark ? '#181d20' : '#fff',
            borderRadius: 16,
            paddingHorizontal: 14,
            paddingVertical: 12,
            fontSize: 15,
            color: isDark ? '#fff' : '#181d20',
            minHeight: 60,
            marginRight: 10,
            borderWidth: 1,
            borderColor: isDark ? '#23272b' : '#e6f7f5',
          }}
          placeholder="Write a small message......"
          placeholderTextColor={isDark ? '#aaa' : '#bbb'}
          value={coverLetter}
          onChangeText={setCoverLetter}
          multiline
          textAlignVertical="top"
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 60,
          }}
          onPress={handleUploadPDF}
          activeOpacity={0.8}
        >
          <View style={{
            backgroundColor: '#e6f7f5',
            padding: 12,
            borderRadius: 14,
            marginBottom: 4,
          }}>
            <Ionicons name={pdfUploaded ? 'checkmark-done' : 'cloud-upload-outline'} size={22} color="#00B9A0" />
          </View>
          <Text style={{
            fontSize: 12,
            fontWeight: '500',
            color: pdfUploaded ? '#00B9A0' : (isDark ? '#aaa' : '#888'),
            textAlign: 'center',
          }}>
            {pdfUploaded ? 'PDF\nUploaded' : 'Upload\nPDF'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#00B9A0',
          borderRadius: 999,
          paddingVertical: 16,
          marginTop: 8,
          marginBottom: 32,
          shadowColor: '#00B9A0',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 3,
        }}
        onPress={handleSubmit}
        activeOpacity={0.9}
      >
        <Text style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: 0.5,
        }}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
// Note: Make sure to replace the job data and logo path with actual data passed from the previous screen or fetched from an API.
// This code is a React Native component for an "Apply" screen in a job application flow.
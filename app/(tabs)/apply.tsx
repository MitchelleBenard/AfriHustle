import { Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


// Example job data (replace with actual passed data)
const job = {
  title: 'Software Developer',
  company: 'Spotify',
  logo: require('../../assets/images/spotify-logo.jpg'), // Update path for your logo
  location: 'CapeTown, S.A',
  salary: '$30k/m',
};

export default function ApplyScreen() {
  const router = useRouter();
  const [coverLetter, setCoverLetter] = useState('');
  const [pdfUploaded, setPdfUploaded] = useState(false);

  const handleUploadPDF = () => {
    // TODO: Integrate file picker for real PDF upload
    setPdfUploaded(true);
  };

  const handleSubmit = () => {
    // TODO: Integrate with backend application submit logic
    // router.replace('/(tabs)/applications');
    alert('Application submitted!');
  };

  return (
    <ScrollView className="flex-1 bg-[#f7f9fa] pt-10 px-6" keyboardShouldPersistTaps="handled">
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Job Summary */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <View className="bg-white p-2 rounded-xl mr-3">
            <Entypo name="spotify-with-circle" size={36} color="#1DB954" />

          </View>
          <View>
            <Text className="font-bold text-base">{job.title}</Text>
            <Text className="text-xs text-gray-500">{job.company}</Text>
          </View>
        </View>
        <View className="items-end">
          <Text className="font-semibold text-base">{job.salary}</Text>
          <Text className="text-xs text-gray-500">{job.location}</Text>
        </View>
      </View>

      {/* Profile Summary */}
      <Text className="mb-2 mt-2 font-medium text-base text-gray-600">Your profile</Text>
      <View className="bg-white rounded-xl py-7 px-4 mb-5 items-center">
        <Ionicons name="person-circle" size={50} color="#00B9A0" className="mb-2" />
        <Text className="font-bold text-lg mb-1">Alice Wambui</Text>
        <Text className="text-gray-500 mb-2">Software Developer</Text>
        <View className="flex-row items-center">
          <Ionicons name="checkmark-circle" size={16} color="#00B9A0" />
          <Text className="text-xs text-[#00B9A0] ml-1">Verified</Text>
        </View>
      </View>

      {/* Cover Letter/Message */}
      <Text className="font-medium text-base mb-1">Cover Letter <Text className="text-gray-400">(Optional)</Text></Text>
      <View className="flex-row">
        <TextInput
          className="flex-1 bg-white rounded-xl px-4 py-3 mb-4 mr-2 text-[15px]"
          style={{ minHeight: 60 }}
          placeholder="Write a small message......"
          value={coverLetter}
          onChangeText={setCoverLetter}
          multiline
          textAlignVertical="top"
        />
        <TouchableOpacity
          className="items-center justify-center"
          style={{ width: 70, height: 60 }}
          onPress={handleUploadPDF}
          activeOpacity={0.8}
        >
          <View className="bg-[#e6f7f5] p-3 rounded-xl mb-2">
            <Ionicons name={pdfUploaded ? 'checkmark-done' : 'cloud-upload-outline'} size={22} color="#00B9A0" />
          </View>
          <Text className={`text-xs font-medium ${pdfUploaded ? 'text-[#00B9A0]' : 'text-gray-500'}`}>
            {pdfUploaded ? 'PDF\nUploaded' : 'Upload\nPDF'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-[#00B9A0] rounded-full py-3 mt-3 mb-8"
        onPress={handleSubmit}
        activeOpacity={0.9}
      >
        <Text className="text-white text-lg font-bold text-center">Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
// Note: Make sure to replace the job data and logo path with actual data passed from the previous screen or fetched from an API.
// This code is a React Native component for an "Apply" screen in a job application flow.
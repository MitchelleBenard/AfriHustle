import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const canSignUp = username && email && password && agree;

  const handleSignUp = () => {
    if (!canSignUp) return;
    // TODO: connect to Firebase/Auth backend
    // router.replace('/(tabs)'); // navigate to main app after signup
    alert('Sign up successful (stub)');
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      {/* Branding */}
      <Text className="text-3xl font-semibold text-center">AfriHustle</Text>
      <Text className="text-[#00B9A0] text-center text-base font-medium mb-7">Create your account</Text>

      {/* Username */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
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

      {/* Password */}
      <View className="relative mb-4">
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 pr-12"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <Pressable
          className="absolute right-4 top-4"
          onPress={() => setShowPassword((v) => !v)}
        >
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={22}
            color="#666"
          />
        </Pressable>
      </View>

      {/* Terms Checkbox */}
      <TouchableOpacity
        className="flex-row items-center mb-5"
        onPress={() => setAgree((v) => !v)}
        activeOpacity={0.7}
      >
        <View
          className={`w-5 h-5 border-2 rounded mr-2 ${
            agree ? 'bg-[#00B9A0] border-[#00B9A0]' : 'border-gray-400 bg-white'
          } items-center justify-center`}
        >
          {agree && <Ionicons name="checkmark" size={16} color="white" />}
        </View>
        <Text className="text-sm">I agree to the terms and conditions</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        className={`rounded-full py-3 mb-4 ${canSignUp ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={handleSignUp}
        disabled={!canSignUp}
      >
        <Text className="text-white text-lg font-bold text-center">Sign up</Text>
      </TouchableOpacity>

      {/* Or divider */}
      <View className="flex-row items-center my-2">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-gray-400 font-medium">or</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social logins */}
      <View className="flex-row justify-center mb-5 mt-3 space-x-5">
        <TouchableOpacity className="bg-white p-3 rounded-full border border-gray-200">
          <Ionicons name="logo-google" size={22} color="#EA4335" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-3 rounded-full border border-gray-200">
          <Ionicons name="logo-facebook" size={22} color="#1877F3" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-3 rounded-full border border-gray-200">
          <Ionicons name="logo-twitter" size={22} color="#1DA1F2" />
        </TouchableOpacity>
      </View>

      {/* Login link */}
      <View className="flex-row justify-center mt-2">
        <Text className="text-gray-600">Already Have an account? </Text>
        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text className="text-[#00B9A0] font-semibold">Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// This code defines a sign-up screen for an app called "AfriHustle".
// It includes fields for username, email, and password, with validation for required fields.
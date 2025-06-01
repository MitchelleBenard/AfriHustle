import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const canLogin = email && password;

  const handleLogin = () => {
    if (!canLogin) return;
    // TODO: connect to backend/Auth
    router.replace('/role'); // Navigate to role selection after login
    alert('Log in successful (stub)');
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      {/* Branding */}
      <Text className="text-3xl font-semibold text-center">AfriHustle</Text>
      <Text className="text-[#00B9A0] text-center text-base font-medium mb-6">Hello , Welcome Back!</Text>

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
      <View className="relative mb-2">
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

      {/* Forgot password */}
      <TouchableOpacity activeOpacity={0.7} className="mb-6 self-end">
        <Text className="text-xs text-gray-500 font-medium">Forgot your password?</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity
        className={`rounded-full py-3 mb-4 ${canLogin ? 'bg-[#00B9A0]' : 'bg-gray-300'}`}
        onPress={handleLogin}
        disabled={!canLogin}
      >
        <Text className="text-white text-lg font-bold text-center">Log in</Text>
      </TouchableOpacity>

      {/* Or divider */}
      <View className="flex-row items-center my-2">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-gray-400 font-medium">or</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social logins */}
      <View className="flex-row justify-center mb-4 mt-3 space-x-5">
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

      {/* Sign Up link */}
      <View className="flex-row justify-center mt-2">
        <Text className="text-gray-600">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.replace('/signup')}>
          <Text className="text-[#00B9A0] font-semibold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// This code is a React Native component for a login screen.
// It includes fields for email and password, a button to log in, and options for social login.
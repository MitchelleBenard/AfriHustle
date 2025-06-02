import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 24 }}
        contentContainerStyle={{ paddingVertical: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Branding */}
        <View style={{ marginBottom: 32 }}>
          <Text style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#222',
            textAlign: 'center',
            letterSpacing: 0.5,
          }}>
            AfriHustle
          </Text>
          <Text style={{
            color: '#00B9A0',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 8,
          }}>
            Hello, Welcome Back!
          </Text>
        </View>

        {/* Email */}
        <View style={{ marginBottom: 18 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
            Email
          </Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#e5e7eb',
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
              fontSize: 16,
              backgroundColor: '#fafafa',
            }}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={{ marginBottom: 8 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
            Password
          </Text>
          <View style={{ position: 'relative' }}>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: '#e5e7eb',
                borderRadius: 16,
                paddingHorizontal: 16,
                paddingVertical: 14,
                fontSize: 16,
                backgroundColor: '#fafafa',
                paddingRight: 48,
              }}
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <Pressable
              style={{ position: 'absolute', right: 16, top: 14 }}
              onPress={() => setShowPassword((v) => !v)}
            >
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={22}
                color="#666"
              />
            </Pressable>
          </View>
        </View>

        {/* Forgot password */}
        <TouchableOpacity activeOpacity={0.7} style={{ marginBottom: 24, alignSelf: 'flex-end' }}>
          <Text style={{ fontSize: 13, color: '#00B9A0', fontWeight: '500' }}>Forgot your password?</Text>
        </TouchableOpacity>

        {/* Log In Button */}
        <TouchableOpacity
          style={{
            borderRadius: 24,
            paddingVertical: 16,
            marginBottom: 18,
            backgroundColor: canLogin ? '#00B9A0' : '#e0e0e0',
            shadowColor: '#00B9A0',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: canLogin ? 0.15 : 0,
            shadowRadius: 8,
            elevation: canLogin ? 4 : 0,
          }}
          onPress={handleLogin}
          disabled={!canLogin}
        >
          <Text style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 0.5,
          }}>
            Log in
          </Text>
        </TouchableOpacity>

        {/* Or divider */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 18 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#e5e7eb' }} />
          <Text style={{ marginHorizontal: 16, color: '#aaa', fontWeight: '500' }}>or</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: '#e5e7eb' }} />
        </View>

        {/* Social logins */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              padding: 14,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: '#f3f4f6',
              marginHorizontal: 4,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
            }}
          >
            <Ionicons name="logo-google" size={24} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              padding: 14,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: '#f3f4f6',
              marginHorizontal: 4,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
            }}
          >
            <Ionicons name="logo-facebook" size={24} color="#1877F3" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              padding: 14,
              borderRadius: 16,
              borderWidth: 2,
              borderColor: '#f3f4f6',
              marginHorizontal: 4,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
            }}
          >
            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        {/* Sign Up link */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 24 }}>
          <Text style={{ color: '#444', fontSize: 16 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('/signup')}>
            <Text style={{ color: '#00B9A0', fontWeight: 'bold', fontSize: 16 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// This code is a React Native component for a login screen.
// It includes fields for email and password, a button to log in, and options for social login.
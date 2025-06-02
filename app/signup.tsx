import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 24 }}
        contentContainerStyle={{ paddingVertical: 32 }}
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
            Create your account
          </Text>
        </View>

        {/* Input Fields */}
        <View style={{ gap: 20 }}>
          {/* Username */}
          <View>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#444', marginBottom: 6, marginLeft: 2 }}>
              Username
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
              placeholder="Enter your username"
              placeholderTextColor="#aaa"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
          {/* Email */}
          <View>
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
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>
          {/* Password */}
          <View>
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
                placeholder="Create a password"
                placeholderTextColor="#aaa"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <Pressable
                style={{ position: 'absolute', right: 16, top: 14 }}
                onPress={() => setShowPassword((v) => !v)}
              >
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={24}
                  color="#666"
                />
              </Pressable>
            </View>
          </View>
        </View>

        {/* Terms Checkbox */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 24,
            marginBottom: 8,
          }}
          activeOpacity={0.7}
          onPress={() => setAgree((v) => !v)}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderWidth: 2,
              borderColor: '#00B9A0',
              borderRadius: 6,
              marginRight: 12,
              backgroundColor: agree ? '#00B9A0' : '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {agree && <Ionicons name="checkmark" size={18} color="white" />}
          </View>
          <Text style={{ fontSize: 14, color: '#444' }}>
            I agree to the{' '}
            <Text style={{ color: '#00B9A0', fontWeight: '600' }}>Terms</Text> and{' '}
            <Text style={{ color: '#00B9A0', fontWeight: '600' }}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={{
            backgroundColor: canSignUp ? '#00B9A0' : '#e0e0e0',
            borderRadius: 16,
            paddingVertical: 16,
            marginTop: 24,
            marginBottom: 16,
            shadowColor: '#00B9A0',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: canSignUp ? 0.15 : 0,
            shadowRadius: 8,
            elevation: canSignUp ? 4 : 0,
          }}
          onPress={handleSignUp}
          disabled={!canSignUp}
        >
          <Text style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 0.5,
          }}>
            Create Account
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 24 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#e5e7eb' }} />
          <Text style={{ marginHorizontal: 16, color: '#aaa', fontWeight: '500' }}>or continue with</Text>
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

        {/* Login link */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 24 }}>
          <Text style={{ color: '#444', fontSize: 16 }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={{ color: '#00B9A0', fontWeight: 'bold', fontSize: 16 }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// This code defines a sign-up screen for an app called "AfriHustle".
// It includes fields for username, email, and password, with validation for required fields.
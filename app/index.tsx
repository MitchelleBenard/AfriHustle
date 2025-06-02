import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Image, SafeAreaView, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  // Animation for fade-in
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View style={{ alignItems: 'center', opacity: fadeAnim }}>
          <Image
            source={require('../assets/images/company2-logo.png')}
            style={{ width: 80, height: 80, marginBottom: 24, borderRadius: 20 }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#222',
              letterSpacing: 1,
            }}
          >
            AfriHustle
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              color: '#00B9A0',
              fontWeight: '600',
              letterSpacing: 1,
            }}
          >
            Jobs. Gigs. Growth.
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to onboarding screen after 2 seconds
      router.replace('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-semibold">AfriHustle</Text>
      <Text className="text-lg mt-2 text-[#00B9A0]">Jobs. Gigs. Growth.</Text>
    </View>
  );
}

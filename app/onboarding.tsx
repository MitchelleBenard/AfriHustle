import { useRouter } from 'expo-router';
import { Dimensions, Image, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    image: require('../assets/images/onboarding1.jpg'),
    title: 'Discover work that suits you.',
    subtitle: 'Find jobs that match your skills – anytime and anywhere.',
  },
  {
    image: require('../assets/images/onboarding2.jpg'),
    title: 'Hire trusted talent fast.',
    subtitle: 'Post jobs and connect with skilled African freelancers in minutes.',
  },
  {
    image: require('../assets/images/onboarding3.jpg'),
    title: 'Smooth money transactions.',
    subtitle: 'Work, deliver, and receive payments with confidence.',
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Swiper
        loop={false}
        showsPagination={true}
        dot={
          <View 
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View 
            style={{
              backgroundColor: '#00B9A0',
              width: 20,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        paginationStyle={{
          bottom: 160 // Increased to accommodate buttons
        }}
      >
        {slides.map((slide, idx) => (
          <View key={idx} className="flex-1 items-center px-6 bg-white">
            {/* Image container */}
            <View className="w-full h-[45%] items-center justify-center mt-10">
              <Image
                source={slide.image}
                resizeMode="contain"
                style={{
                  width: width * 0.8,
                  height: height * 0.35
                }}
              />
            </View>

            {/* Text content */}
            <View className="w-full items-center mt-8 px-4">
              <Text className="text-2xl font-bold mb-4 text-center text-gray-900">
                {slide.title}
              </Text>
              <Text className="text-base text-center text-gray-600">
                {slide.subtitle}
              </Text>
            </View>

            {/* Navigation buttons - Horizontal layout */}
            <View className="absolute bottom-16 w-full px-6">
              <View className="flex-row justify-center space-x-4">
                {/* Skip/Back Button */}
                <TouchableOpacity 
                  onPress={() => idx === 0 ? router.replace('/signup') : null}
                  className="flex-1 py-4 rounded-full bg-gray-100 max-w-[160px]"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 2,
                  }}
                >
                  <Text className="text-base font-semibold text-gray-700 text-center">
                    {idx === 0 ? 'Skip' : 'Back'}
                  </Text>
                </TouchableOpacity>

                {/* Next/Get Started Button */}
                <TouchableOpacity
                  onPress={() => idx === slides.length - 1 ? router.replace('/role') : null}
                  className="flex-1 py-4 rounded-full bg-[#10B981] max-w-[160px]"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 2,
                  }}
                >
                  <Text className="text-white text-base font-semibold text-center">
                    {idx === slides.length - 1 ? 'Get Started' : 'Next'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}

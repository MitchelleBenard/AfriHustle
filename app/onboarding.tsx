import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';

const slides = [
  {
    image: require('../assets/images/onboarding1.jpg'), // Place your illustration images here
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

  const onSkip = () => {
    router.replace('/signup'); // or login
  };

  const onDone = () => {
    router.replace('/signup');
  };

  return (
    <Swiper
      loop={false}
      showsPagination={true}
      dot={<View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />}
      activeDot={<View className="w-4 h-2 bg-[#00B9A0] rounded-full mx-1" />}
    >
      {slides.map((slide, idx) => (
        <View key={idx} className="flex-1 justify-center items-center bg-white px-6">
          {/* Replace below with actual images */}
          <View className="w-full h-72 items-center justify-center">
            <Image
              source={slide.image}
              resizeMode="contain"
              className="w-full h-full"
            />
          </View>
          <Text className="text-xl font-bold text-center mt-8">{slide.title}</Text>
          <Text className="text-base text-center text-gray-500 mt-2">{slide.subtitle}</Text>
          <View className="flex-row justify-between items-center w-full mt-10 px-4">
            <TouchableOpacity onPress={onSkip}>
              <Text className="text-[#00B9A0] font-semibold">skip</Text>
            </TouchableOpacity>
            {idx < slides.length - 1 ? (
              <TouchableOpacity onPress={() => router.replace('/signup')}>
                <Text className="text-white bg-[#00B9A0] rounded-full px-7 py-2 font-semibold">Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onDone}>
                <Text className="text-white bg-[#00B9A0] rounded-full px-7 py-2 font-semibold">Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </Swiper>
  );
}

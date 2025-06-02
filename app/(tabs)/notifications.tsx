import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const activity = [
  {
    id: 1,
    logo: require('../../assets/images/spotify-logo.jpg'), // Update with your icons
    text: "Spotify wants to take a final interview of you where head of HR will see you!",
    time: "12 min ago",
    unread: true,
  },
  {
    id: 2,
    logo: require('../../assets/images/kalep-logo.jpg'),
    text: "Kalep wants to contact with you in 24 hours with proper preparation",
    time: "47 min ago",
    unread: true,
  },
];

const applications = [
  {
    id: 3,
    logo: require('../../assets/images/pinterest.jpg'),
    text: "Your application is submitted successfully to Pinterest. You can check the status here.",
    time: "1 hr ago",
    unread: false,
  },
  {
    id: 4,
    logo: require('../../assets/images/safaricom-logo.jpg'),
    text: "Safaricom is reviewing your application, cover letter and portfolio. All the best!",
    time: "3 hrs ago",
    unread: false,
  },
];

const messages = [
  {
    id: 5,
    avatar: require('../../assets/images/mike-avatar.jpg'),
    name: "Mike Miller",
    text: "We are looking for a web develo...",
    time: "11:45 am",
    unreadCount: 7,
  },
  {
    id: 6,
    avatar: require('../../assets/images/catherine-avatar.jpg'),
    name: "Catherine Akoth",
    text: "Are you available for an interview ...",
    time: "11:45 am",
    unreadCount: 0,
  },
];

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-[#f7f9fa] pt-10 px-4">
      {/* Back arrow */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-xl font-bold mb-6">Notifications</Text>

      {/* New Activity */}
      <Text className="text-sm text-gray-700 mb-3">New activity</Text>
      <View className="mb-5">
        {activity.map((item) => (
          <View key={item.id} className="flex-row items-start mb-4">
            <Image
              source={item.logo}
              style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#fff', marginRight: 12 }}
            />
            <View className="flex-1">
              <Text className="text-gray-700 text-[15px]">{item.text}</Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-xs text-gray-400">{item.time}</Text>
                {item.unread && (
                  <View className="w-2 h-2 bg-[#00B9A0] rounded-full ml-2" />
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Applications */}
      <View className="flex-row items-center mb-3">
        <Text className="text-sm text-gray-700 flex-1">Applications</Text>
        <TouchableOpacity>
          <Text className="text-[#00B9A0] text-xs font-semibold">See all</Text>
        </TouchableOpacity>
      </View>
      <View className="mb-5">
        {applications.map((item) => (
          <View key={item.id} className="flex-row items-start mb-4">
            <Image
              source={item.logo}
              style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: '#fff', marginRight: 12 }}
            />
            <View className="flex-1">
              <Text className="text-gray-700 text-[15px]">{item.text}</Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-xs text-gray-400">{item.time}</Text>
                {item.unread && (
                  <View className="w-2 h-2 bg-[#00B9A0] rounded-full ml-2" />
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Individual Messages */}
      <Text className="text-sm text-gray-700 mb-3">Individual Messages</Text>
      <View className="mb-7">
        {messages.map((item) => (
          <View key={item.id} className="flex-row items-center mb-4">
            <Image
              source={item.avatar}
              style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: '#fff', marginRight: 12 }}
            />
            <View className="flex-1">
              <Text className="font-semibold text-[15px]">{item.name}</Text>
              <Text className="text-gray-500 text-xs">{item.text}</Text>
            </View>
            <View className="items-end">
              <Text className="text-xs text-gray-400 mb-1">{item.time}</Text>
              {item.unreadCount > 0 && (
                <View className="bg-[#00B9A0] rounded-full px-2 py-0.5">
                  <Text className="text-white text-xs">{item.unreadCount}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
//       </View>
//     </ScrollView>
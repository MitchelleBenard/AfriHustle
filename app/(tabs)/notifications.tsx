import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View, useColorScheme, Platform } from 'react-native';

const activity = [
  {
    id: 1,
    logo: require('../../assets/images/spotify-logo.jpg'),
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
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: isDark ? '#101114' : '#f7f9fa',
        paddingTop: Platform.OS === 'android' ? 38 : 18,
        paddingHorizontal: 18,
      }}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Back arrow */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginBottom: 18,
          alignSelf: 'flex-start',
          backgroundColor: '#e6f7f5',
          borderRadius: 100,
          padding: 8,
        }}
      >
        <Ionicons name="arrow-back" size={28} color="#00B9A0" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 18,
        color: isDark ? '#fff' : '#181d20',
      }}>
        Notifications
      </Text>

      {/* New Activity */}
      <Text style={{
        fontSize: 14,
        color: isDark ? '#aaa' : '#666',
        marginBottom: 8,
        fontWeight: '600',
      }}>
        New activity
      </Text>
      <View style={{ marginBottom: 22 }}>
        {activity.map((item) => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 18 }}>
            <Image
              source={item.logo}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: isDark ? '#181d20' : '#fff',
                marginRight: 14,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ color: isDark ? '#fff' : '#222', fontSize: 15, marginBottom: 2 }}>
                {item.text}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                <Text style={{ fontSize: 12, color: isDark ? '#888' : '#aaa' }}>{item.time}</Text>
                {item.unread && (
                  <View style={{
                    width: 8,
                    height: 8,
                    backgroundColor: '#00B9A0',
                    borderRadius: 4,
                    marginLeft: 8,
                  }} />
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Applications */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{
          fontSize: 14,
          color: isDark ? '#aaa' : '#666',
          fontWeight: '600',
          flex: 1,
        }}>
          Applications
        </Text>
        <TouchableOpacity>
          <Text style={{ color: '#00B9A0', fontWeight: '600', fontSize: 13 }}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 22 }}>
        {applications.map((item) => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 18 }}>
            <Image
              source={item.logo}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                backgroundColor: isDark ? '#181d20' : '#fff',
                marginRight: 14,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ color: isDark ? '#fff' : '#222', fontSize: 15, marginBottom: 2 }}>
                {item.text}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                <Text style={{ fontSize: 12, color: isDark ? '#888' : '#aaa' }}>{item.time}</Text>
                {item.unread && (
                  <View style={{
                    width: 8,
                    height: 8,
                    backgroundColor: '#00B9A0',
                    borderRadius: 4,
                    marginLeft: 8,
                  }} />
                )}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Individual Messages */}
      <Text style={{
        fontSize: 14,
        color: isDark ? '#aaa' : '#666',
        marginBottom: 8,
        fontWeight: '600',
      }}>
        Individual Messages
      </Text>
      <View style={{ marginBottom: 32 }}>
        {messages.map((item) => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
            <Image
              source={item.avatar}
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                backgroundColor: isDark ? '#181d20' : '#fff',
                marginRight: 14,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: isDark ? '#fff' : '#181d20', marginBottom: 2 }}>
                {item.name}
              </Text>
              <Text style={{ color: isDark ? '#aaa' : '#888', fontSize: 13 }}>
                {item.text}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 12, color: isDark ? '#888' : '#aaa', marginBottom: 2 }}>{item.time}</Text>
              {item.unreadCount > 0 && (
                <View style={{
                  backgroundColor: '#00B9A0',
                  borderRadius: 10,
                  paddingHorizontal: 7,
                  paddingVertical: 2,
                  minWidth: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>{item.unreadCount}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
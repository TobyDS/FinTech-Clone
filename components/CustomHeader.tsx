import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Colors from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useUser } from '@clerk/clerk-expo';

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();
  const { user } = useUser();
  return (
    <BlurView intensity={80} tint={'extraLight'} style={{ paddingTop: top }}>
      <View style={styles.container}>
        <Link href={'/(authenticated)/(modals)/account'} asChild>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: Colors.gray,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {user?.imageUrl && (
              <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
            )}
          </TouchableOpacity>
        </Link>
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name='search'
            size={20}
            color={Colors.dark}
          />
          <TextInput
            style={styles.input}
            placeholder='Search'
            placeholderTextColor={Colors.dark}
          />
        </View>
        <View style={styles.circle}>
          <Ionicons name={'stats-chart'} size={20} color={Colors.dark} />
        </View>
        <View style={styles.circle}>
          <Ionicons name={'card'} size={20} color={Colors.dark} />
        </View>
      </View>
    </BlurView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  btn: {
    padding: 10,
    backgroundColor: Colors.gray,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: Colors.lightGray,
    color: Colors.dark,
    borderRadius: 30,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray,
  },
});

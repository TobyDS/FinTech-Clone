import Colors from '@/constants/Colors';
import { useUser } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import * as Haptics from 'expo-haptics';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as LocalAuthentication from 'expo-local-authentication';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const Page = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [code, setCode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);
  const router = useRouter();

  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const OFFSET = 20;
  const TIME = 80;

  useEffect(() => {
    if (code.length === 6) {
      if (code.join('') === '111111') {
        router.push('/(authenticated)/(tabs)/home');
        setCode([]);
      } else {
        offset.value = withSequence(
          withTiming(-OFFSET, { duration: TIME / 2 }),
          withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
          withTiming(0, { duration: TIME / 2 })
        );
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        setCode([]);
      }
      console.log('code: ', code);
    }
  }, [code]);

  const onNumberPress = (number: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode([...code, number]);
  };

  const numberBackspace = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode(code.slice(0, -1));
  };

  const onBiometricAuthPress = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    if (success) {
      router.push('/(authenticated)/(tabs)/home');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setCode([]);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.greeting}> Welcome back, {firstName}</Text>

      <Animated.View style={[styles.codeView, style]}>
        {codeLength.map((_, index) => (
          <View
            key={index}
            style={[
              styles.codeEmpty,
              {
                backgroundColor:
                  code[index] !== undefined ? Colors.primary : 'lightgrey',
              },
            ]}
          ></View>
        ))}
      </Animated.View>

      <View style={styles.numbersView}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={onBiometricAuthPress}>
            <MaterialCommunityIcons
              name='face-recognition'
              size={32}
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNumberPress(0)}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>
          <View style={{ minWidth: 52 }}>
            {code.length > 0 && (
              <TouchableOpacity onPress={numberBackspace}>
                <MaterialCommunityIcons
                  name='backspace-outline'
                  size={32}
                  style={{ margin: 10 }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: '500',
            color: Colors.primary,
            fontSize: 18,
          }}
        >
          Forgot your passcode?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    alignSelf: 'center',
  },
  codeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 100,
  },
  codeEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  numbersView: {
    marginHorizontal: 70,
    gap: 40,
  },
  number: {
    fontSize: 32,
    margin: 10,
  },
});

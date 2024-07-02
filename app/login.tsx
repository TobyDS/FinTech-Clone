import Colors from '@/constants/Colors';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { useState } from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [countryCode, setCountryCode] = useState('+44');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
      // TODO
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Country code'
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder='Mobile number'
            placeholderTextColor={Colors.gray}
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onSignIn(SignInType.Phone)}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          ></View>
          <Text style={{ color: Colors.gray, fontSize: 20 }}>OR</Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          ></View>
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              marginTop: 20,
              flexDirection: 'row',
              gap: 16,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => onSignIn(SignInType.Email)}
        >
          <Ionicons name='mail' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Sign in with email
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              marginTop: 20,
              flexDirection: 'row',
              gap: 16,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => onSignIn(SignInType.Google)}
        >
          <Ionicons name='logo-google' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Sign in with Google
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              marginTop: 20,
              flexDirection: 'row',
              gap: 16,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => onSignIn(SignInType.Apple)}
        >
          <Ionicons name='logo-apple' size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Sign in with Apple
          </Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }} />
        <Link href={'/signup'} replace asChild>
          <TouchableOpacity>
            <Text
              style={[
                defaultStyles.textLink,
                { marginBottom: 20, textAlign: 'center' },
              ]}
            >
              Don't Have an account? Sign up
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;

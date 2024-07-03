import { useEffect } from 'react';
import { View, Text } from 'react-native';

const Page = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/listings');
      const data = await res.json();
      console.log('🚀 ~ file: crypto.tsx:9 ~ fetchData ~ data:', data);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;

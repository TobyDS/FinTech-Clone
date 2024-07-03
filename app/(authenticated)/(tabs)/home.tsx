import Colors from '@/constants/Colors';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import RoundButton from '@/components/RoundButton';
import Dropdown from '@/components/Dropdown';

const Page = () => {
  const balance = 1420;

  const onAddMoney = () => {
    // TODO: Implement onAddMoney
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>£</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundButton text='Add money' icon={'add'} onPress={onAddMoney} />
        <RoundButton text='Exchange' icon={'refresh'} onPress={onAddMoney} />
        <RoundButton text='Details' icon={'list'} onPress={onAddMoney} />
        <Dropdown />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 20,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default Page;

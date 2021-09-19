import React, { FunctionComponent } from 'react';
import OverviewCard from './Components/OverviewCard';
import { FinanceScreenNavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import ExpenseCard from './Components/ExpensesCard';
import { expenses, income } from './dummyData';
import { ScrollView } from 'react-native-gesture-handler';

const FinanceScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<FinanceScreenNavigationProp>();

  return (
    <ScrollView>
      <OverviewCard 
        income={income}
        expenses={expenses}
      />
      <ExpenseCard
        expenses={expenses}
      />
    </ScrollView>
  );
};

export default FinanceScreen;

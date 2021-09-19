import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { Card, ListItem, LinearProgress, Button } from 'react-native-elements';
import { FinanceScreenNavigationProp } from '../../../types';

interface Props {
  expenses: {
    name: string,
    value: number,
  }[];
  income: number
}

const OverviewCard: FunctionComponent<Props> = ({
  expenses,
  income
}) => {
  const navigation = useNavigation<FinanceScreenNavigationProp>();
  const totalExpenses = expenses.reduce((total, expense) => total + expense.value, 0);

  const content = [
    {
      title: `${totalExpenses}`,
      subtitle: 'Monthly expenses'
    },
    {
      title: `${income}`,
      subtitle: 'Minimal monthly income'
    }
  ];

  return (
    <Card>
      <Card.Title>Overview</Card.Title>
      <LinearProgress
        color="green"
        trackColor="red"
        variant="determinate"
        value={1 - (totalExpenses / income)}
      />
      {content.map((item, index) => (
        <ListItem key={index}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      <Card.Divider />
      <Button
        icon={{
          name: 'create',
          type: 'ionicons',
          color: '#fff',
        }}
        title="Edit Income"
        onPress={() => navigation.navigate('EditIncomeScreen')}
      />
    </Card>
  );
};

export default OverviewCard;

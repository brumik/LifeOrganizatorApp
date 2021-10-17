import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { Card, ListItem, Button } from 'react-native-elements';
import getIconProps from '../../../components/getIconProps';
import { FinanceScreenNavigationProp } from '../../../types';

interface Props {
  expenses: {
    name: string;
    value: number;
  }[]
}

const ExpenseCard: FunctionComponent<Props> = ({
  expenses
}) => {
  const navigation = useNavigation<FinanceScreenNavigationProp>();

  return (
    <Card>
      <Card.Title>Expenses</Card.Title>
      <Button
        icon={getIconProps({ name: 'plus' })}
        title="Add expense"
        onPress={() => navigation.navigate('AddEditExpenseScreen')}
      />
      <Card.Divider style={{ marginTop: 15 }} />
      {expenses.map((item, index) => (
        <ListItem
          key={index}
          bottomDivider
          onPress={() => navigation.navigate('AddEditExpenseScreen')}
        >
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.value}/month</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </Card>
  );
};

export default ExpenseCard;

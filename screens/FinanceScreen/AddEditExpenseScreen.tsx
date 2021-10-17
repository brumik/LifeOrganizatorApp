import React, { FunctionComponent, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import Picker from '../../components/Picker';
import { FinanceScreenNavigationProp } from "../../types";
import getIconProps from "../../components/getIconProps";

const frequency: Record<string, string> = {
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarter-yearly",
  halfyearly: "Half-yearly",
  yearly: "Yearly",
}

const AddEditExpenseScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<FinanceScreenNavigationProp>();
  // const [value, setValue] = useState(2800);
  const [form, setForm] = useState({
    name: '',
    amount: 0,
    frequency: frequency.monthly,
    startDate: new Date().toISOString().split("T")[0],
    endDate: '',
    account: '',
    notes: '',
    documents: '',
  });

  return (
    <ScrollView>
      <Card>
        <Card.Title>Expense editing</Card.Title>
        <Input
          label="Name of the expense"
          placeholder="Name of the expense"
          value={form.name}
          onChangeText={(v) => setForm({
            ...form,
            name: v
          })}
        />
        <Input
          label="Amount of the expense"
          placeholder="Amount of the expense"
          value={`${form.amount}`}
          onChangeText={(v) => setForm({
            ...form,
            amount: +v
          })}
        />
        <Picker
          selectedValue={form.frequency}
          onValueChange={(v: string) => setForm({
            ...form,
            frequency: v
          })}
          label="Frequency of the payment"
          items={Object.keys(frequency).map(key => ({ value: key, label: frequency[key] }))}
        />
        <Input
          label="Start date"
          placeholder="Start date"
          value={form.startDate}
          onChangeText={(v) => setForm({
            ...form,
            startDate: v
          })}
        />
        <Input
          label="End date"
          placeholder="End date"
          value={form.endDate}
          onChangeText={(v) => setForm({
            ...form,
            endDate: v
          })}
        />
        <Input
          label="Account/Card of payment"
          placeholder="Account/Card of payment"
          value={form.account}
          onChangeText={(v) => setForm({
            ...form,
            account: v
          })}
        />
        <Input
          label="Notes"
          placeholder="Notes"
          value={form.notes}
          onChangeText={(v) => setForm({
            ...form,
            notes: v
          })}
        />
        <Input
          label="Link to documents"
          placeholder="Link to documents"
          value={form.documents}
          onChangeText={(v) => setForm({
            ...form,
            documents: v
          })}
        />
        <Button
          icon={getIconProps({ name: 'check-circle' })}
          title="Save"
          onPress={() => navigation.goBack()}
        />
      </Card>
    </ScrollView>
  );
};

export default AddEditExpenseScreen;

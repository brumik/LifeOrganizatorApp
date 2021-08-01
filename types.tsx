/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Finance: undefined;
  Documents: undefined;
};

export type FinanceParamList = {
  FinanceScreen: undefined;
  EditIncomeScreen: undefined;
  AddEditExpenseScreen: undefined;
};

export type DocumentsParamList = {
  DocumentsScreen: undefined;
};

export type FinanceScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Finance'>,
  StackNavigationProp<FinanceParamList>
>;
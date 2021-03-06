import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {
  AddEditDocumentScreen,
  AddEditProjectScreen,
  DocumentsArchiveScreen,
  DocumentScreen,
  DocumentsScreen,
  ProjectScreen,
} from '../screens/DocumentsScreen/';
import {
  FinanceScreen,
  EditIncomeScreen,
  AddEditExpenseScreen
} from '../screens/FinanceScreen/';
import {
  BottomTabParamList,
  DocumentsParamList,
  FinanceParamList
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Finance"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Finance"
        component={FinanceNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Documents"
        component={DocumentsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="folder-open" solid color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; solid?: boolean; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

const FinanceStack = createStackNavigator<FinanceParamList>();

function FinanceNavigator() {
  return (
    <FinanceStack.Navigator>
      <FinanceStack.Screen
        name="FinanceScreen"
        component={FinanceScreen}
        options={{ headerTitle: 'Finances' }}
      />
      <FinanceStack.Screen
        name="EditIncomeScreen"
        component={EditIncomeScreen}
        options={{ headerTitle: 'Edit income' }}
      />
      <FinanceStack.Screen
        name="AddEditExpenseScreen"
        component={AddEditExpenseScreen}
        options={{ headerTitle: 'Expense form' }}
      />
    </FinanceStack.Navigator>
  );
}

const DocumentsStack = createStackNavigator<DocumentsParamList>();

function DocumentsNavigator() {
  return (
    <DocumentsStack.Navigator>
      <DocumentsStack.Screen
        name="DocumentsScreen"
        component={DocumentsScreen}
        options={{ headerTitle: 'Documents' }}
      />
      <DocumentsStack.Screen
        name="AddEditDocumentScreen"
        component={AddEditDocumentScreen}
        options={{ headerTitle: 'Document form' }}
      />
      <DocumentsStack.Screen
        name="AddEditProjectScreen"
        component={AddEditProjectScreen}
        options={{ headerTitle: 'Project form' }}
      />
      <DocumentsStack.Screen
        name="DocumentsArchiveScreen"
        component={DocumentsArchiveScreen}
        options={{ headerTitle: 'Archive' }}
      />
      <DocumentsStack.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{ headerTitle: 'Document' }}
      />
      <DocumentsStack.Screen
        name="ProjectScreen"
        component={ProjectScreen}
        options={{ headerTitle: 'Project' }}
      />
    </DocumentsStack.Navigator>
  );
}

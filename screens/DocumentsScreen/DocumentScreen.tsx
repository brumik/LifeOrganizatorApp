import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card, ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { DocumentsScreenNavigationProp, FinanceScreenNavigationProp } from '../../types';
import SpeedDial from '../../components/SpeedDial';
import getIconProps from '../../components/getIconProps';
import { Linking, View } from 'react-native';
import { FinanceScreen } from '../FinanceScreen';

const DocumentScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();
  const financeNav = useNavigation<FinanceScreenNavigationProp>();

  return (
    <>
      <ScrollView>
        <Card containerStyle={{ margin: 0 }}>
          <Card.Title>Document Title</Card.Title>
          <Text>This is a short description about the document</Text>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>2020-10-15</ListItem.Title>
              <ListItem.Subtitle>Validity start date</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>2022-10-15</ListItem.Title>
              <ListItem.Subtitle>Epriation date</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>official, church, tax, payment</ListItem.Title>
              <ListItem.Subtitle>Tags</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem
            onPress={() => Linking.openURL('https://www.google.com')}
          >
            <ListItem.Content>
              <ListItem.Title>www.mydoclink.com</ListItem.Title>
              <ListItem.Subtitle>Document</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem
            onPress={() => navigation.navigate('ProjectScreen')}
          >
            <ListItem.Content>
              <ListItem.Title>My super car insurance</ListItem.Title>
              <ListItem.Subtitle>Parent project</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem
            onPress={() => financeNav.navigate('FinanceScreen')}
          >
            <ListItem.Content>
              <ListItem.Title>55€/month</ListItem.Title>
              <ListItem.Subtitle>Payment</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Card>
      </ScrollView>
      <SpeedDial>
        <SpeedDial.Action
          icon={getIconProps({ name: 'trash-alt', size: 20, })}
          title='Delete'
          onPress={() => { }}
          color="grey"
        />
        <SpeedDial.Action
          icon={getIconProps({ name: 'edit', size: 20, })}
          title='Edit'
          onPress={() => navigation.navigate('AddEditDocumentScreen')}
        />
      </SpeedDial>
    </>
  );
};

export default DocumentScreen;

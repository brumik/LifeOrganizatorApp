import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { DocumentsScreenNavigationProp } from '../../types';
import SpeedDial from '../../components/SpeedDial';
import getIconProps from '../../components/getIconProps';

const DocumentScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();

  return (
    <>
      <ScrollView>
        <Text>Title, description, validity start date,
          expiry date, document tag, link, porject link, payment link</Text>
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

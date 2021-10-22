import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { DocumentsScreenNavigationProp } from '../../types';
import { Card, Text } from 'react-native-elements';
import DocumenstList from './Components/DocumentsList';
import getIconProps from '../../components/getIconProps';
import SpeedDial from '../../components/SpeedDial';

const ProjectScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();

  return (
    <>
      <ScrollView>
        <Card containerStyle={{ margin: 0 }}>
          <Card.Title>This is the title</Card.Title>
          <Text>This is the project description.</Text>
        </Card>
        <DocumenstList documents={[
          { name: 'One', description: 'This is the one' },
          { name: 'Two', description: 'This is the two'},
          { name: 'Three', description: 'This is the three' },
        ]} />
      </ScrollView>
      <SpeedDial>
        <SpeedDial.Action
          icon={getIconProps({ name: 'angle-double-down', size: 20, })}
          title='Archive'
          onPress={() => { }}
          color="grey"
        />
        <SpeedDial.Action
          icon={getIconProps({ name: 'plus', size: 20, })}
          title='New document'
          onPress={() => navigation.navigate('AddEditDocumentScreen')}
        />
      </SpeedDial>
    </>
  );
};

export default ProjectScreen;

import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { DocumentsScreenNavigationProp } from '../../types';
import { Card, Text, FAB } from 'react-native-elements';
import DocumenstList from './Components/DocumentsList';

const ProjectScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();

  return (
    <>
      <ScrollView>
        <Card containerStyle={{ margin: 0, marginBottom: 2}}>
          <Card.Title>This is the title</Card.Title>
          <Text>This is the project description.</Text>
        </Card>
        <DocumenstList documents={[
          { name: 'One', description: 'This is the one' },
          { name: 'Two', description: 'This is the two'},
          { name: 'Three', description: 'This is the three' },
        ]} />
      </ScrollView>
      <FAB
        icon={{
          name: 'angle-double-down',
          type: 'font-awesome-5',
          color: '#fff',
        }}
        title='Archive'
        onPress={() => { }}
        color="grey"
        placement="left"
      />
      <FAB
        icon={{
          name: 'plus',
          type: 'font-awesome-5',
          color: '#fff',
        }}
        title='New file'
        onPress={() => navigation.navigate('AddEditDocumentScreen')}
        placement="right"
      />
    </>
  );
};

export default ProjectScreen;

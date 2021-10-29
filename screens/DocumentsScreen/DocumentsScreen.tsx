import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';
import { Button, FAB } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import getIconProps from '../../components/getIconProps';
import { DocumentsScreenNavigationProp } from '../../types';
import ProjectsList from './Components/ProjectsList';

import { projects } from './dummyData';

const DocumentsScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();

  return (
    <>
      <ScrollView>
        <Button
          icon={{
            name: 'archive',
            type: 'font-awesome-5',
            color: '#fff',
          }}
          title='Go to Archive'
          onPress={() => navigation.navigate('DocumentsArchiveScreen')}
        />
        <ProjectsList
          projects={projects}
        />
      </ScrollView>
      <FAB 
        icon={getIconProps({ name: 'plus' })}
        title='New project'
        onPress={() => navigation.navigate('AddEditProjectScreen')}
        placement="right"
      />
    </>
  );
};

export default DocumentsScreen;

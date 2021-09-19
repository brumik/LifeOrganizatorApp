import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Grid from '../../components/Grid';
import { DocumentsScreenNavigationProp } from '../../types';
import ProjectsListCard from './Components/ProjectsListCard';

import { projects } from './dummyData';

const DocumentsScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();

  return (
    <ScrollView>
      <Grid cols={2}>
        <Button
          icon={{
            name: 'add',
            type: 'ionicons',
            color: '#fff',
          }}
          title='New project'
          onPress={() => navigation.navigate('AddEditProjectScreen')}
        />
        <Button
          icon={{
            name: 'archive',
            type: 'ionicons',
            color: '#fff',
          }}
          title='Archive'
          onPress={() => navigation.navigate('DocumentsArchiveScreen')}
        />
      </Grid>
      <ProjectsListCard
        projects={projects}
      />
    </ScrollView>
  );
};

export default DocumentsScreen;

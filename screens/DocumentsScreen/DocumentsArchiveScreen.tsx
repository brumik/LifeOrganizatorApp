import React, { FunctionComponent, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ProjectsList from './Components/ProjectsList';
import { archiverProjects } from './dummyData';

const DocumentsScreen: FunctionComponent<Record<string, never>> = () => {
  return (
    <ScrollView>
      <ProjectsList
        projects={archiverProjects}
      />
    </ScrollView>
  );
};

export default DocumentsScreen;

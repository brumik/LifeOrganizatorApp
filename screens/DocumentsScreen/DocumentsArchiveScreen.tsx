import React, { FunctionComponent, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ProjectsListCard from './Components/ProjectsListCard';
import { archiverProjects } from './dummyData';

const DocumentsScreen: FunctionComponent<Record<string, never>> = () => {
  return (
    <ScrollView>
      <ProjectsListCard
        projects={archiverProjects}
      />
    </ScrollView>
  );
};

export default DocumentsScreen;

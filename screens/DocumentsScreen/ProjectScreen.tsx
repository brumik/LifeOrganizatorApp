import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements'; 

const ProjectScreen: FunctionComponent<Record<string, never>> = () => {
  return (
    <ScrollView>
      <Text>Project screen</Text>
    </ScrollView>
  );
};

export default ProjectScreen;

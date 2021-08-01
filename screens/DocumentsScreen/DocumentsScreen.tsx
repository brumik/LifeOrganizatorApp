import React, { FunctionComponent } from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const DocumentsScreen: FunctionComponent<Record<string, never>> = () => {
  return (
    <ScrollView>
      <Text>Documents</Text>
    </ScrollView>
  );
};

export default DocumentsScreen;

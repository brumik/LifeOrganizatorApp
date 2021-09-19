import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';

const DocumentScreen: FunctionComponent<Record<string, never>> = () => {
  return (
    <ScrollView>
      <Text>Document screen</Text>
    </ScrollView>
  );
};

export default DocumentScreen;

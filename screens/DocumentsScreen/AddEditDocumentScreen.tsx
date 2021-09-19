import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';

const AddEditDocumentScreen: FunctionComponent<Record<string, never>> = () => {
  return (
    <ScrollView>
      <Text>AddEditDocument screen</Text>
    </ScrollView>
  );
};

export default AddEditDocumentScreen;

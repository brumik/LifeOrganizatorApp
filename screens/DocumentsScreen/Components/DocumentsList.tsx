import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { ListItem } from 'react-native-elements';
import { DocumentSchema } from '../../../schemaTypes';
import { DocumentsScreenNavigationProp } from '../../../types';

interface Props {
  documents: DocumentSchema[];
}

const DocumenstList: FunctionComponent<Props> = ({
  documents
}) => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();

  return (
    <>
      {documents.map((item, index) => (
        <ListItem
          key={index}
          bottomDivider
          onPress={() => navigation.navigate('DocumentScreen')}
        >
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </>
  );
};

export default DocumenstList;

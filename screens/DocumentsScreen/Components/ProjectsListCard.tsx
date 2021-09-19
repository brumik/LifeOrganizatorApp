import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { ListItem } from 'react-native-elements';
import { DocumentsScreenNavigationProp } from '../../../types';

interface Props {
  projects: {
    name: string;
    description: string;
    documents: number
  }[]
}

const ProjectsListCard: FunctionComponent<Props> = ({
  projects
}) => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();

  return (
    <>
      {projects.map((item, index) => (
        <ListItem
          key={index}
          bottomDivider
          onPress={() => navigation.navigate('ProjectScreen')}
        >
          <ListItem.Content>
            <ListItem.Title>{item.name} ({item.documents})</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </>
  );
};

export default ProjectsListCard;

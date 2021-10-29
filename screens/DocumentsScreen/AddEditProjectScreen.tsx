import React, { FunctionComponent, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Input, Button } from 'react-native-elements';
import { DocumentsScreenNavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';
import getIconProps from '../../components/getIconProps';
import DocumenstList from './Components/DocumentsList';

const AddEditProjectScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<DocumentsScreenNavigationProp>();
  const [form, setForm] = useState({
    title: '',
    description: '',
  })

  return (
    <ScrollView>
      <Card containerStyle={{ margin: 0 }}>
        <Card.Title>Add/Edit Project</Card.Title>
        <Input
          placeholder="Project title"
          value={`${form.title || ''}`}
          keyboardType="default"
          onChangeText={(title) => setForm({ ...form, title })}
        />
        <Input
          placeholder="Project description"
          value={`${form.description || ''}`}
          keyboardType="default"
          numberOfLines={5}
          multiline={true}
          onChangeText={(description) => setForm({ ...form, description })}
        />
        <Button
          icon={getIconProps({ name: 'plus' })}
          title="Add documents"
          onPress={() => navigation.navigate('ProjectScreen')}
        />
        <DocumenstList documents={[
          { name: 'One', description: 'This is the one' },
          { name: 'Two', description: 'This is the two' },
          { name: 'Three', description: 'This is the three' },
        ]} />
        <Button
          icon={getIconProps({ name: 'check-circle' })}
          title="Save"
          onPress={() => navigation.navigate('ProjectScreen')}
        />
      </Card>
    </ScrollView>
  );
};

export default AddEditProjectScreen;

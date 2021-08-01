import React, { FunctionComponent, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { FinanceScreenNavigationProp } from "../../types";

const EditIcncomeScreen: FunctionComponent<Record<string, never>> = () => {
  const navigation = useNavigation<FinanceScreenNavigationProp>();
  const [value, setValue] = useState(2800);

  return (
    <View>
      <Card>
        <Card.Title>Edit monthly income</Card.Title>
        <Input
          placeholder="Monthly income"
          value={`${value || ''}`}
          rightIcon={{ name: 'card', type: 'ionicon' }}
          keyboardType="numeric"
          onChangeText={(v) => setValue(+v)}
        />
        <Button
          icon={{
            name: 'checkmark-circle',
            type: 'ionicon',
            color: 'white',
          }}
          title="Save"
          onPress={() => navigation.navigate('FinanceScreen')}
        />
      </Card>
    </View>
  );
};

export default EditIcncomeScreen;

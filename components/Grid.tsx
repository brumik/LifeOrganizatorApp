import React, { FunctionComponent, ReactChild } from 'react';
import { StyleSheet, View } from "react-native";

interface Props {
  cols?: number;
  padding?: boolean;
  children: ReactChild[];
}

const calculatePadding = (padding: boolean) => ({
  paddingLeft: padding ? 2 : 0,
});

const Grid: FunctionComponent<Props> = ({
  cols = 1,
  padding = false,
  children
}) => (
  <View style={styles.row}>
    {children.map((child, idx) => (
      <View
        key={idx}
        style={{
          width: `${100/cols}%`,
          ...(idx !== 0 && calculatePadding(padding))
        }}>
        {child}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

export default Grid;

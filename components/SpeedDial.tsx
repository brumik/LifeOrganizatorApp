import React, { FunctionComponent, ReactChild, useState } from "react"
import { SpeedDial } from "react-native-elements"
import getIconProps from "./getIconProps";

interface Props {
  iconName?: string;
  openIconName?: string;
  children: ReactChild[];
}

const CustomSpeedDial: FunctionComponent<Props> = ({
  iconName = 'chevron-up',
  openIconName = 'chevron-down',
  children
}) => {
  const [open, setOpen] = useState(false);

  return (
    <SpeedDial
      isOpen={open}
      icon={getIconProps({ name: iconName })}
      openIcon={getIconProps({ name: openIconName })}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
    >
      {children}
    </SpeedDial>
  );
};

export default Object.assign(CustomSpeedDial, {
      Action: SpeedDial.Action,
});

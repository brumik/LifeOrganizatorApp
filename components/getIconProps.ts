export const getIconProps = ({
  name = '',
  color = '#fff',
  size =  24,
}) => ({
  name,
  type: 'font-awesome-5',
  color,
  size,
});

export default getIconProps;

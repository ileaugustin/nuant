import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

type Props = {
  name: string;
  imageUrl: string;
  onClick: (str: string) => void;
}

function ListItem(props: Props) {
  const { name, imageUrl, onClick } = props;
  return (
    <Box
      height={60}
      width="100%"
      my={2}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '1px solid grey' }}
      onClick={() => onClick(name)}
    >
      <Avatar src={imageUrl} />
      <span className="pokemon-name">
        {name}
      </span>
    </Box>
  )
}

export default ListItem;

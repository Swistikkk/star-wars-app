import React, {FC, memo} from "react";
import {ListItem, ListItemAvatar, Avatar, ListItemText} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Link} from 'react-router-dom';
import {IPerson} from "src/types";

const PREFIX = 'Card';
const classes = {
  img: `${PREFIX}-img`,
  title: `${PREFIX}-title`,
  pos: `${PREFIX}-pos`,
  link: `${PREFIX}-link`,
}

const StyledLink = styled(Link)({
  minWidth: 200,
  textDecoration: 'none',

  [`& .${classes.img}`]: {
    height: 'auto'
  },

  [`& .${classes.title}`]: {
    fontSize: 14
  },

  [`& .${classes.pos}`]: {
    marginBottom: 12
  }
})

interface IProps {
  person: IPerson
}

const Card: FC<IProps> = ({person}: IProps) => {
  return (
    <StyledLink className={classes.link} to={`/persons/${person.id}`}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt={person.name} src={person.imgSrc} />
        </ListItemAvatar>
        <ListItemText
          primary={person.name}
        />
      </ListItem>
    </StyledLink>
  );
}

export default memo(Card);

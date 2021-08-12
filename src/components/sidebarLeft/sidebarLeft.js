import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listApi: {
  color: '#FFFFFF',
  font: 'normal normal bold 24px/33px Open Sans',
  border: '1px solid #e6f5ff',
  borderRadius: '5px',
  color: '#0099fd',
  margin: '0 0  0 40px',
  boxShadow: '3px 3px #dee2e6', }
}));


function sidebarLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <List className={classes.listApi}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Route" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            
            <ListItemText primary="eta" />
          </ListItem>
          <ListItem button className={classes.nested}>
            
            <ListItemText primary="matrix" />
          </ListItem>
          <ListItem button className={classes.nested}>
           
            <ListItemText primary="graph" />
          </ListItem>
        </List>
      </Collapse>
          
          <ListItem button>
            <ListItemText primary="Route TSP" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Geocoding" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Autocomplete" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Reverse" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="matrix" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="VRP" />
          </ListItem>
        </List>
    </div>
  );
}

export default sidebarLeft;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Map from '../map/map'
import { useSelector } from 'react-redux';
import Polygon from '../polygon/polygon';
import { Data } from '../../data';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '750px',
    backgroundColor: theme.palette.background.paper,
  },
  frame: {
    border: '1px solid #ccc',
    width: '750px',
    height: '485px',
    marginTop: '1px',
    flexWrap: 'wrap',
    padding: '3px -3px 3px 3px',
    
  }


}));

function mapapiheader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const address = useSelector(state => state.address);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onRef = (r) => {
    Data.polygonRef = r;
  };


  return (
    <div className={classes.root} >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className="hoverclass" label="Map" {...a11yProps(0)} />
          <Tab className="hoverclass" label="Request URL" {...a11yProps(1)} />
          <Tab className="hoverclass" label="JSON Response" {...a11yProps(2)} />

        </Tabs>
      </AppBar>

      <div>
        <TabPanel value={value} index={0}>
          <div style={{ position: 'relative' }} >
            <div style={{ position: 'absolute' }}>
              <Map/>
            </div>
            <div style={{ position: 'absolute' }}>
              <Polygon ref={onRef}/>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.frame}>
            <p style={{color:'#6495ED', wordBreak:'break-word'}}>{address}</p>
            
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className={classes.frame}>
            
          </div>
        </TabPanel>
      </div>
    </div>
  );
}

export default mapapiheader;
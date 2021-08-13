
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { useSelector } from 'react-redux';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import React, { useEffect, useRef, useState } from 'react';
import JSONPretty from 'react-json-pretty';
import queryString from 'query-string';
import ApiRoute from '../api/routeApi'
import '../mapapiheader/mapapiheader.css';
import Polygon from '../polygon/polygon';
import {Data} from '../../data';


const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100%',
    marginRight: '20px',
    marginLeft: '10px',
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
    border: '1px solid #ddd',
  },
  TabContext: {
    backgroundColor: '#1b2746',
    paddingTop: '8px',
    
  },
  tablist:{
    height:'55px',
    
  }

}));

function mapapiheader() {
  const classes = useStyles();
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onRef = (r) => {
    Data.polygonRef = r;
  };

  const mapRef = useRef();
  const initMap = () => {
    let options = {
      center: { lat: 10.73201, lng: 106.70147 },
      zoom: 17,
      controls: true
    }
    let map = new map4d.Map(mapRef.current, options);

    // let polyline = new map4d.Polyline({
    //   path: [
    //       [108.210912, 16.039173],
    //       [108.217263, 16.044597],
    //       [106.700763, 10.771783],
    //       [106.701901, 10.772302],
        
    //   ],
    //   strokeColor: "#ff0000",
    //   strokeOpacity: 1.0,
    //   strokeWidth: 5})
    // // Thêm polyline vào bản đồ
    // polyline.setMap(map)
  }

  useEffect(() => {

    initMap();

  },[value]);


  const Vehicle = useSelector(state => state.vehicle);
  const Origin = useSelector(state => state.origin);
  const Destination = useSelector(state => state.destination);
  const Key = useSelector(state => state.key);

  
  const [contentJson,setContent] = useState();
  const [requestUrl,setRequestUrl] = useState();


  useEffect(() => {
    const getMap = async () => {
      try {
        const params = {
          origin: Origin,
          destination: Destination,
          mode: Vehicle,
          Key: Key
        };
        const response = await ApiRoute.getAll(params);

        const url = 'https://api-dev.map4d.vn/sdk/route?' + queryString.stringify(params);
        setRequestUrl(url);

        const json = JSON.stringify(response);
        setContent(json);

      } catch (error) {
        console.log('loi :' + error);
      }
    }
    getMap();
  })

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" className={classes.TabContext} defaultValue="0">
          <TabList className={classes.tablist}  onChange={handleChange} aria-label="simple tabs example">
            <Tab className='classhover' label="Map" value="0" />
            <Tab className='classhover' label="Request URL" value="1" />
            <Tab className='classhover' label="JSON Response" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="0" style={{ padding: '0px' }}>
          <div ref={mapRef}
            id="map"
            style={{ width: '100%', height: '480px', position: 'relative' }}
          >
            <Polygon  ref={onRef}/>
          </div>
        </TabPanel>
        <TabPanel style={{ color:'#00b4fd' ,padding:'12px', height: '480px', position: 'relative' }} value="1"><a className='link' href={requestUrl}>{requestUrl}</a></TabPanel>
        <TabPanel style={{ position:'relative', padding:'0' ,wordWrap:'break-word' }} value="2"><p><JSONPretty id="json-pretty" data={contentJson}></JSONPretty></p></TabPanel>
      </TabContext>
    </div>
  );
}

export default mapapiheader;
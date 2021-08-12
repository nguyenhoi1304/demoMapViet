import React from 'react';
import { Grid } from "@material-ui/core";
import SidebarLeft from '../sidebarLeft/sidebarLeft'
import Information from '../information/information'
import Mapapiheader from '../mapapiheader/mapapiheader';
import '../demomapsapi/demomapsapi.css';
import Feedback from '../feedback/feedback';


const demomapsapi = () => {
  return (
    <div className="container__demomapapi">
      <Feedback />
      <Grid item={true} col="true" xs={2}>
        <SidebarLeft></SidebarLeft>
      </Grid>

      <Grid item={true} col="true" xs={3}>
        <Information />
      </Grid>

      <Grid item={true} col="true" xs={7}>
        <div className="header--main">
          <Mapapiheader />
        </div>
      </Grid>

    </div>
  );
}

export default demomapsapi;
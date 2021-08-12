import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footerMain: {
    bottom: '0',
    right: '0',
    left: '0',
    marginTop: '70px',
    padding: '0 0 15px 150px',
    backgroundColor: '#182340',
    color: '#fff',
    lineHeight: '1.7rem',
    display: 'flex',

    justifyContent: 'spaceAround'
  },
  styleUl: {
    fontSize: '1.5rem',
    textAlign: 'center',
    paddingTop: '20px',
    fontWeight: '500',
  }
})


function footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footerMain}>

      <Grid item={true} col="true" xs={4}>
        <div>

          <ul className={classes.styleUl}>VietMap
            <li>
              <a className="hoverclass" href="#">Tuyển dụng</a>
              <br />
              <a className="hoverclass" href="#">Giới thiệu</a>
              <br />
              <a className="hoverclass" href="#">Liên hệ</a>
            </li>
          </ul>


        </div>
      </Grid>

      <Grid item={true} col="true" xs={4}>
        <div>

          <ul className={classes.styleUl} >Sản Phẩm
            <li>
              <a className="hoverclass" href="#">Giải pháp GIS</a>
              <br />
              <a className="hoverclass" href="#">Maps API</a>
            </li>
          </ul>
        </div>
      </Grid>

      <Grid item={true} col="true" xs={4}>
        <div>

          <ul className={classes.styleUl}>Hỗ trợ
            <li>
              <a className="hoverclass" href="#">Demo Maps API</a>
              <br />
              <a className="hoverclass" href="#">Tài liệu</a>
            </li>
          </ul>
        </div>
      </Grid>

    </div>
  );
}

export default footer;
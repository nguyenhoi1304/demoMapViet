import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'font-awesome/css/font-awesome.min.css';
import '../information/information.css';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import {Data} from '../../data';
import { changeLoca, changeVehicle } from '../../redux/actions/actions';

const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: 260,
      minheight: 500,
      marginLeft: '50px',
      fontSize: 16,
    
  },
  card: {
      background: '#d4edda',
  },
  content: {
      marginBottom: '10px',
      fontSize: '1.2rem',
      fontWeight: '600',
  },
  radioGroup: {
      marginTop: '10px',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
  },
}));

function information() {
  const [vehicle, setVehicle] = useState('car');

  const classes = useStyles();
  const dispatch = useDispatch();
  const [r, setR] = useState();

  const onClick = function () {
    Data?.polygonRef?.message(r);
  };

  const onSelectedVehicle = (e) => {
      let valueOption = e.target.value;
      setVehicle(valueOption);

      const action = changeVehicle(valueOption);
      dispatch(action);
  }

  const originDefault =  useSelector(state => state.origin);
  const destiDefault =  useSelector(state => state.destination);

  const formik = useFormik({
      initialValues: {
          origin: originDefault,
          destination: destiDefault,
      },
      onSubmit: values => {
          const newOrigin = values.origin;
          const newDestination = values.destination;

          const action = changeLoca(newOrigin,newDestination,vehicle);
          dispatch(action);
      }
  });



  return (
      <div className={classes.root}>
          <Card className={classes.card}>
              <CardHeader  style={{paddingBottom:'0', marginLeft:'8px', fontWeight:'600'}}
                  title="API Routing"
              />
              <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                      Tìm đường đi từ nhiều điểm cho nhiều loại phương tiện.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                      Di chuyển các điểm trên map để thay đổi routing.
                  </Typography>
              </CardContent>
          </Card>

          <form onSubmit={formik.handleSubmit}>
              <FormControl component="fieldset">
                  <RadioGroup onChange={onSelectedVehicle} className={classes.radioGroup} row aria-label="position" name="position" defaultValue="top" value={vehicle}>
                      <FormControlLabel className={classes.itemRadio} value="car" control={<Radio color="primary" />} label="Xe ôtô" />
                      <FormControlLabel className={classes.itemRadio} value="motorcycle" control={<Radio color="primary" />} label="Xe máy" />
                      <FormControlLabel className={classes.itemRadio} value="foot" control={<Radio color="primary" />} label="Đi bộ" />
                      <FormControlLabel className={classes.itemRadio} value="bike" control={<Radio color="primary" />} label="Xe đạp" />
                      <FormControlLabel className={classes.itemRadio} value="truck_2500" control={<Radio color="primary" />} label="Xe tải dưới 2.5" />
                      <FormControlLabel className={classes.itemRadio} value="truck_5000" control={<Radio color="primary" />} label="Xe tải từ 2.5t - 5t" />
                  </RadioGroup>
              </FormControl>

              <FormControl>
                  <InputLabel htmlFor="component-error">Diểm bắt đầu</InputLabel>
                  <Input
                      type="text"
                      name="origin"
                      defaultValue={originDefault}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      aria-describedby="component-error-text"
                  />
              </FormControl><br /><br />
              <FormControl>
                  <InputLabel htmlFor="component-error">Diểm kết thức</InputLabel>
                  <Input
                      type="text"
                      name="destination"
                      defaultValue={originDefault}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      aria-describedby="component-error-text"
                  />
              </FormControl><br />

              <Button onClick={onClick}
              type='submit' 
              style={{ marginTop: '30px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '30px', paddingRight: '30px' }} variant="contained" color="primary">
                  Route
              </Button>
          </form>

      </div>
  );
}

export default information;
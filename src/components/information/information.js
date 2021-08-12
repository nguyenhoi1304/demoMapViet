import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'font-awesome/css/font-awesome.min.css';
import '../information/information.css';
import { useDispatch } from 'react-redux';
import { Actions } from '../../redux/actions/actions';
import { Data } from '../../data';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},

})((props) => <Radio color="default" {...props} />);


function information() {
  const [selectedValue, setSelectedValue] = React.useState('');
  const dispatch = useDispatch();
  const [r, setR] = useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

    var checkbox = document.getElementsByName("radio-button-demo");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked === true) {
        var checkValue = checkbox[i].value;
      }
    }
    

  const handleOnclick = () => {
    var inputValueStart = document.querySelector('#standard-basic-start').value
    var inputValueEnd = document.querySelector('#standard-basic-end').value
    dispatch(Actions.setAddress
      (`https://maps.vietmap.vn/api/route?api-version=1.6&apikey=33a10ae857f9f0320e808d7a001c605f&vehicle=${checkValue}&point=${inputValueStart}&point=${inputValueEnd}`)
      )
      Data?.polygonRef?.message(r);
     
  }
  
 

  return (
    <div >
      <div className="instruction">
        <div className="tutorial">
          <div className="header-2">
            <h3>API Routing</h3>

          </div>
          <p className="marginTop">Tìm đường đi từ nhiều điểm cho nhiều loại phương tiện.</p>
          <p>Di chuyển các điểm trên map để thay đổi routing.</p>
        </div>
        <div className="marginTop">
          <Radio
            checked={selectedValue === 'car'}
            onChange={handleChange}
            value="car"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'XE OTO' }}
          />Xe ôtô
          <Radio
            checked={selectedValue === 'motorcyle'}
            onChange={handleChange}
            value="motorcyle"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'XE MAY' }}
          />Xe máy
          <GreenRadio
            checked={selectedValue === 'bike'}
            onChange={handleChange}
            value="bike"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'DI BO' }}
          />Đi bộ

          <Radio
            checked={selectedValue === 'truck_2500'}
            onChange={handleChange}
            value="truck_2500"
            color="default"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'XE TAI NHO' }}
          />Xe tải dưới 2.5t
          <br />
          <Radio
            checked={selectedValue === 'truck_5000'}
            onChange={handleChange}
            value="truck_5000"
            color="default"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'XE TAI LON' }}
          />Xe tải từ 2.5t - 5t
        </div>
        <div className="start-begin">
          <TextField id="standard-basic-start" label="Điểm bắt đầu" />
          <TextField id="standard-basic-end" label="Điểm kết thúc" />
        </div>
        <div className="submit">
          <Button onClick={handleOnclick} variant="contained" color="primary" component="span">
            ROUTE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default information;
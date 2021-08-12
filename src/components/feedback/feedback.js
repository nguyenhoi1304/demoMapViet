
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import '../feedback/feedback.css';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: '3px',
  },
}));

  const handleOnclick = () => {
    const iconfeedback=  document.querySelector('.feedback-icon');
    iconfeedback.style.display='none';
    document.querySelector('.centainer__feedback').style.display='block';

  }
  const handleOnclickBack = () => {
    document.querySelector('.centainer__feedback').style.display='none';
    document.querySelector('.feedback-icon').style.display='block'
  }


function feedback(props) {
  const classes = useStyles();
  return (
    <div>
      <div className="feedback">
        <i onClick={handleOnclick} className="feedback-icon far fa-comment-dots"></i>
       
        <div className="centainer__feedback">
          <p>Gửi góp ý về Maps API</p>
          <FormControl  className={classes.margin}>
          
            <InputLabel htmlFor="demo-customized-textbox">Email</InputLabel>
            
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel  htmlFor="demo-customized-textbox">Nội dung</InputLabel>
            <BootstrapInput  id="demo-customized-textbox" />
          </FormControl>
          <div>
          <Button onClick={handleOnclick} style={{margin:'15px 42px 20px 1px'}} variant="contained" color="primary" disableElevation>
            Gửi góp ý
          </Button>

          <Button onClick={handleOnclickBack} className='Back' style={{margin:'15px 0 20px 0'}} variant="contained" color="primary" disableElevation>
            Hủy
          </Button>
          </div>
          


        </div>
      </div>
    </div>
  );
}

export default feedback;
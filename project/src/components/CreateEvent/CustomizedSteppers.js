import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import Explore from '@material-ui/icons/Explore';
import Info from '@material-ui/icons/Info';
import Event from '@material-ui/icons/Event';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicInfo from './BasicInfo'
import DatePicker from './DatePicker'
import Location from './Location'
import Sponsoring from './Sponsoring'
// import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import { addEvents } from '../../actions/EventsActions'
import uuid from 'uuid'
import { MDBBtn } from 'mdbreact';
import {MDBNavLink} from 'mdbreact'


const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Info />,
    2: <Explore />,
    3: <Event />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Basic info', 'Location', 'Date and time'];
}

// function getStepContent(step, props) {
//   switch (step) {
//     case 0:
//       return  <BasicInfo /> ;
//     case 1:
//       return <Location/>;
//     case 2:
//       return <DatePicker/>;
//     default:
//       return 'Unknown step';
//   }
// }

class CustomizedSteppers extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            activeStep:0,
            tittle: '',
            description: '',
            price: 0,
            maxparticipent: '',
            date: [],
            adresse: '',
            city: '',
            startingHour:'',
            endingHour:'',
            img: '',
            sponsored: false
        }
    }
    //   const [activeStep, setActiveStep] = React.useState(1);
    step1Text = (name, value) => {
        this.setState({[`${name}`]: value})
    }
    handleNext = () => {
    // setActiveStep(prevActiveStep => prevActiveStep + 1);
    this.setState({activeStep: this.state.activeStep + 1})
};

handleBack = () => {
    // setActiveStep(prevActiveStep => prevActiveStep - 1);
    this.setState({activeStep: this.state.activeStep - 1})
};

handleReset = () => {
    // setActiveStep(0);
    this.setState({activeStep: 0})
};
 getStepContent(step, props) {
  switch (step) {
    case 0:
      return  <BasicInfo step1Text={(x,y) => this.step1Text(x,y)}/> ;
    case 1:
      return <Location step1Text={(x,y) => this.step1Text(x,y)}/>;
    case 2:
      return <DatePicker  step1Text={(x,y) => this.step1Text(x,y)}/>;
    default:
      return 'Unknown step';
  }
}
render(){
    const steps = getSteps();
  return (
    <div className={useStyles.root}>
      <Stepper alternativeLabel activeStep={this.state.activeStep} connector={<ColorlibConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {this.state.activeStep === steps.length ? (
          <div>
            <Typography className={useStyles.instructions}>
            <Sponsoring   step1Text={(x,y) => this.step1Text(x,y)}/>
            <MDBBtn href='/' id='submit' to='/' onClick={()=> this.props.addEvents({...this.state, id: uuid(), date :[...this.state.date, '1']})}>Submit your event</MDBBtn>
            </Typography>
            <Button onClick={this.handleReset} className={useStyles.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div >
            <Typography className={useStyles.instructions}>{this.getStepContent(this.state.activeStep)}</Typography>
            <div className="PriviousNext">
                
              <Button variant="contained"  gradient='black'  className={`${useStyles.button} backButton`} disabled={this.state.activeStep === 0} onClick={this.handleBack} >
                Back
              </Button>
              {/* <button className="nn">Back</button> */}
            
           
              <Button gradient="peach"
               variant="contained"
               onClick={this.handleNext}
               className={useStyles.button}
              >
                  {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
}
// const mapDispatchToProps = dispatch => {
//   return{
//     add : (x) => dispatch(addEvent(x))
//   }
// }


export default connect(null, {addEvents}) (CustomizedSteppers)

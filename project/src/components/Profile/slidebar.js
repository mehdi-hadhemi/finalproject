import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UsersProfile from './UsersProfile'
import Userstags from './userstags'
// import { MDBBtn } from "mdbreact"


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
    width: '50%',
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
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
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
    width: '80%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    width: '80%',
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Tell us who you are', 'Tell us what you love', 'Lets get started'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return   <UsersProfile/>  ;
    case 1:
      return <Userstags/>;
    case 2:
      return 'lets get started';
    default:
      return 'Unknown step';
  }
}

class CustomizedSteppers extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            activeStep:0
        }
    }
    //   const [activeStep, setActiveStep] = React.useState(1);

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
render(){
    const steps = getSteps();
  return (
    <div   className={useStyles.root}>
      <Stepper   alternativeLabel activeStep={this.state.activeStep} connector={<ColorlibConnector />}>
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
              All steps completed - you&apos;re finished
            </Typography>
            <button  className="btn btn-outline-primary" onClick={this.handleReset} 
            // className={useStyles.button}
            >
              Reset
            </button>
          </div>
        ) : (
          <div>
            <Typography className={`${useStyles.instructions} step`}>{getStepContent(this.state.activeStep)}</Typography>
            <div className="PriviousNext">
                
              {/* <Button variant="contained"  gradient='black'  className={`${useStyles.button} backButton`} disabled={this.state.activeStep === 0} onClick={this.handleBack} >
                Back


              </Button> */}
              <button  disabled={this.state.activeStep === 0} onClick={this.handleBack} type="button" className="btn btn-outline-primary">Back</button>
              <button className="btn btn-outline-primary"

               onClick={this.handleNext}
              //  className={useStyles.button}
              >
                  {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
           

          </div>
        )}
      </div>
    </div>
  );
}
}


export default CustomizedSteppers
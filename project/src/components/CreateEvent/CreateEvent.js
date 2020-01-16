import React,{ Component } from 'react';
import './CreateEvent.css'
import CustomizedSteppers from './CustomizedSteppers'
import {loadUser} from '../../actions/AuthActions'
import { connect } from 'react-redux';
  class CreateEvent extends Component{
    componentDidMount() {
      this.props.loadUser()
    }
    
    componentWillReceiveProps = (nextProps) => {
      this.setState(nextProps.auth.user)
    }
  render(){
  return (
    <div className='create-event'>
      <CustomizedSteppers/>
    </div>
  );
}
  }

  const mapStateToProps = state => ({
    auth: state.auth
  });
export default connect(mapStateToProps,{loadUser})(CreateEvent);

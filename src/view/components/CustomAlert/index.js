import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { clearSubmitErrors } from 'redux-form';
import { connect } from 'react-redux';

class CustomAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  onDismiss = () => {
    const { isValidationErrors, clearSubmitErrors } = this.props;
    this.setState({ visible: false });
    if (isValidationErrors) {
      clearSubmitErrors();
    }
  }
  render() {
    const { color, message } = this.props;
    return (
      <Alert 
        color={color} 
        isOpen={this.state.visible} 
        toggle={this.onDismiss}
        className="my-2"
      >
        {message}
      </Alert>
    );
  }
}

CustomAlert.defaultValues = {
  isValidationErrors: false
};

CustomAlert.propTypes = {
  clearSubmitErrors: PropTypes.func,
  isValidationErrors: PropTypes.bool,
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default connect(null, {clearSubmitErrors})(CustomAlert);
import React from 'react';
import { Alert } from 'reactstrap';

class CustomAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ visible: false });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.visible && nextProps.message) {
      return {
        visible: true
      };
    }
    return null;
  }
  render() {
    const { color, message } = this.props;
    return (
      <Alert 
        color={color} 
        isOpen={this.state.visible} 
        toggle={this.onDismiss}
        className="mt-4"
      >
        {message}
      </Alert>
    );
  }
}

export default CustomAlert;
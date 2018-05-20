import React from 'react';
import Heading from 'view/components/Heading';
import CustomAlert from 'view/components/CustomAlert';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from './LoginForm';
import { authThunks, authSelectors } from 'state/ducks/auth';
import { globalErrorSelectors } from 'state/ducks/globalError';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
  }
  handleChange = e => {
    let credentials = {...this.state.credentials};
    credentials[e.target.name] = e.target.value;
    this.setState({
      credentials
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  }
  render() {
    const { loading, authError, globalError } = this.props;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Heading text="Войдите в свой аккаунт" />
            {
              Boolean(authError) ? (
                <CustomAlert 
                  color="danger" 
                  message={authError}
                />
              ) : ( null ) 
            }
            {
              Boolean(globalError) ? (
                <CustomAlert 
                  color="danger" 
                  message={globalError}
                />
              ) : ( null ) 
            }
            <LoginForm 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              credentials={this.state.credentials}
              loading={loading}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: authSelectors.getLoading(state),
    authError: authSelectors.getError(state),
    globalError: globalErrorSelectors.getGlobalError(state)
  };
};

export default connect(mapStateToProps, {...authThunks})(LoginPage);


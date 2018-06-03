import React from 'react';
import Heading from 'view/components/Heading';
import CustomAlert from 'view/components/CustomAlert';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from './LoginForm';
import { authThunks } from 'state/ducks/auth';
import { globalErrorActions, globalErrorSelectors } from 'state/ducks/globalError';
import PropTypes from 'prop-types';

class LoginPage extends React.Component {
  componentWillMount() {
    this.props.resetGlobalError();
  }
  handleSubmit = values => {
    return this.props.login(values);
  }
  render() {
    const { globalError } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Heading text="Войдите в свой аккаунт"/>
            {
              Boolean(globalError) ? (
                  <CustomAlert
                      color={'danger'}
                      message={globalError}
                  />
              ) : ( null )
            }
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <LoginForm
              onSubmit={this.handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  globalError: globalErrorSelectors.getGlobalError(state)
});

export default connect(mapStateToProps, {...authThunks, ...globalErrorActions})(LoginPage);


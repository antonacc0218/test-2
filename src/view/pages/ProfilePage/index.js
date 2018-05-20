import React from 'react';
import Heading from 'view/components/Heading';
import CustomAlert from 'view/components/CustomAlert';
import Profile from './Profile';
import Loader from 'view/components/Loader';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { profileThunks, profileSelectors } from 'state/ducks/profile';
import { authSelectors } from 'state/ducks/auth';
import { globalErrorSelectors } from 'state/ducks/globalError';

class ProfilePage extends React.Component {
  componentDidMount() {
    const { userId, fetchProfileData } = this.props; 
    fetchProfileData(userId);
  }
  render() {
    const { profileData, globalError, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Heading text="Профиль" />
            {
              Boolean(globalError) ? (
                <CustomAlert 
                  color="danger"
                  message={globalError}
                />
              ) : ( 
                <Profile profileData={profileData} /> 
              )
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {getProfileData, getLoading} = profileSelectors;
  const {getUserId} = authSelectors;
  const {getGlobalError} = globalErrorSelectors;
  return {
    userId: getUserId(state),
    profileData: getProfileData(state),
    loading: getLoading(state),
    globalError: getGlobalError(state)
  };  
};

export default connect(mapStateToProps, {...profileThunks})(ProfilePage);
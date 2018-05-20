import React from 'react';
import { 
  Container, 
  Navbar, 
  NavbarToggler, 
  Collapse, 
  Nav, 
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Control from './Control';
import { authSelectors, authActions } from 'state/ducks/auth';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, logout } = this.props;
    return (
      <Navbar color="dark" dark expand="md" style={{ flexShrink: 0 }}>
        <Container>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto">
              <NavItem>
                <Link className="nav-link" to="/">Главная</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/news">Новости</Link>
              </NavItem>
              {
                isAuthenticated ? (
                  <NavItem>
                    <Link className="nav-link" to="/profile">Профиль</Link>
                  </NavItem>
                ) : ( null )
              }
            </Nav>
            <Control 
              isAuthenticated={isAuthenticated} 
              logout={logout}
            />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: Boolean(authSelectors.getUserId(state))
});

export default connect(mapStateToProps, {...authActions})(NavBar);
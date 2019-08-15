import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = async () => {
    localStorage.clear();
    await swal({
      title: `Logout Success`,
      icon: "success"
    }).then(function() {
      window.location = "/login";
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <div className="container">
            <NavbarBrand href="/">
              Welcome to <span style={{ color: "#03adfc" }}>Derum</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>{localStorage.fullname ? localStorage.fullname : ""}</NavLink>
                </NavItem>

                {localStorage.id_user ? (
                  <NavItem
                    onClick={this.logout}
                    style={{ cursor: "pointer", color: "white" }}
                    className="mt-2 mr-2 ml-2"
                  >
                    Log out
                  </NavItem>
                ) : (
                  <Link to="/login">
                    <NavItem>
                      <NavLink>Login</NavLink>
                    </NavItem>
                  </Link>
                )}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

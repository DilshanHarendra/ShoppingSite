import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';

const propTypes = {
    children: PropTypes.node,
  };
  
  const defaultProps = {};

class DefaultHeader extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <Nav>
            <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem>
            </Nav>

        </React.Fragment> );
    }

}
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
 
export default DefaultHeader;
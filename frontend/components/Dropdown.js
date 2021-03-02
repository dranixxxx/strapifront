import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Link from "next/link";

export default class Dropdownn extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret style={{backgroundColor: "white", color: "black", border: "white", padding:"0px"}}>
         <a className="navbar-brand">Solution</a>
        </DropdownToggle>
        <DropdownMenu>
             <Link href="/test">
                         <DropdownItem>
                 <a className="navbar-brand">test</a>
                             </DropdownItem>
             </Link>
             <Link href="/plan">
                         <DropdownItem>
                 <a className="navbar-brand">plan</a>
                             </DropdownItem>
             </Link>
             <Link href="/success">
                         <DropdownItem>
                 <a className="navbar-brand">success</a>
                             </DropdownItem>
             </Link>
       </DropdownMenu>
      </Dropdown>
    );
  }
}

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from "next/link";

const Dropdownn = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const onMouseEnter = () => setDropdownOpen(true);
  const onMouseLeave = () => setDropdownOpen(false);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>

      <DropdownToggle caret style={{backgroundColor: "white", color: "black", border: "white", padding:"0px",fontSize:"16px"}}>
         <a className="navbar-brand" style={{fontSize:"16px"}}>Solution</a>

        </DropdownToggle>
      <DropdownMenu >

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

export default Dropdownn;

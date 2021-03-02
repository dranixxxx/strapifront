import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from "next/link";

const Dropdownn = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} >

      <DropdownToggle caret style={{backgroundColor:"white",marginRight:"10px,backgroundcolor: white"}}>
       <div style={{fontSize:"16px", float:"left",color:"black",marginRight : '-1px'}}>
       Dropdown
       </div>

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

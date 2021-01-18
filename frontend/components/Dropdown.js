import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from "next/link";

const Dropdownn = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret color="light">
        Solution
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

        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Dropdownn;
/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

const Layout = (props) => {
    const title = "Welcome to Nextjs";
    const { user, setUser } = useContext(AppContext);

    return (
        <div>
        <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
        </Head>
        <header>
        <style jsx>
    {`
            a {
              color: red;
            }
            h5 {
              color: red;
              padding-top: 11px;
            }
          `}
</style>
    <Nav className="navbar navbar-light " style={{borderBottom:"1px solid"}}>
        <NavItem>
        <Link href="/">
        <a className="navbar-brand">EDUNET</a>
        </Link>
        </NavItem>
        <NavItem ><Dropdown/></NavItem>
        <NavItem>

        <Link href="/test">
        <a className="navbar-brand">Plan</a>
    </Link>
        <Link href="/MainPage">
        <a className="navbar-brand">Contact sale</a>
    </Link>
        </NavItem>


        <NavItem className="ml-auto">
        </NavItem>
        <NavItem>
        {user ? (
                //<h5>{user.username}</h5>
            <Link href="https://localhost:3001">
        <a className="nav-link"> {user.username}</a>
    </Link>
) : (
    <Link href="/register">
        <a className="nav-link"> Sign up</a>
    </Link>
)}

</NavItem>

    <NavItem>
    {user ? (
            <Link href="/">
            <a
        className="nav-link"
        onClick={() => {
        logout();
        setUser(null);
    }}
>
    Logout
    </a>
    </Link>
) : (
    <Link href="/login">
        <a className="nav-link">Sign in</a>
        </Link>
)}
</NavItem>
    </Nav>
    <div style={{backgroundColor:"#E4F7EB"}}>
        <Container><p style={{color:"#1C7E41"}}>special offer</p></Container>
        <br/>
    </div>
    </header>
    <body>{props.children}</body>
    <footer><Footer/></footer>
    </div>
);
};

export default Layout;
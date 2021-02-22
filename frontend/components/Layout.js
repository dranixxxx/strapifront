/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";
import Popoverr from "../components/Popover";
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
                        .navbar{
                            position: fixed!important;
                            z-index: 5;
                            width: 100%;
                            background: white;
                        }
                        a {
                             color: red;
                          }
                        h5{
                            color: red;
                            padding-top: 11px;
                          }
                    `}
                </style>
                <div  className="nav1" style={{backgroundColor:"#5a5a5a", position:"fixed",zIndex:"20",width:"100%"}}>

                   <Nav className="navbar navbar-light" style={{marginLeft:"67.241%",paddingBottom : "10px"}} >
                    <NavItem>

                        <Link href="/test">
                            <a className ="navbar-brand" style={{fontSize: "12px", color:'white'}}>REQUEST A DEMO</a>
                        </Link>
                          <Link href="/test">
                            <a className ="navbar-brand" style={{fontSize: "12px", color:'white'}}>1.888.799.9666</a>
                        </Link>
                         <Link href="/test">
                            <a className ="navbar-brand" style={{fontSize: "12px", color:'white'}}>HOW TO VIDEOS</a>
                        </Link>
                         <Link href="/test">
                            <a className ="navbar-brand" style={{fontSize: "12px", color:'white'}}>SUPPORT</a>
                        </Link>
                     </NavItem>

                    </Nav>
                </div>
                <Nav className="navbar navbar-light " style={{borderBottom:"1px solid",paddingLeft:"7%", position: 'fixed', backgroundColor: "white", width: "100%",zIndex:"55",top:"45px"}}>
                    <NavItem>
                        <Link href="/">
                        <img className="anh" src="https://hadtech.vn/wp-content/uploads/2020/08/HADTech_Logo-2-3.png" alt="" />
                        </Link>
                    </NavItem>

                        <NavItem ><Dropdown/></NavItem>
                    <NavItem>

                        <Link href="/test">
                            <a className="navbar-brand" style={{fontSize: "16px",marginLeft  : '32px'}}>Plan</a>
                        </Link>
                        <Link href="/MainPage">
                            <a className="navbar-brand" style={{fontSize: "16px",marginLeft : '17px'}}>Contact sale</a>
                        </Link>
                     </NavItem>
                     <NavItem className="ml-auto">
        </NavItem>
        <NavItem>
        {user ? (
                    <a href="http://45.64.126.93:3006" target="_blank" rel="noopener noreferrer" className="nav-link"> vào lớp học</a>

) : (null)}

</NavItem>
        <NavItem>
        {user ? (
                    <a href="http://45.64.126.93:3006" target="_blank" rel="noopener noreferrer" className="nav-link"> {user.username}</a>

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
    <div style={{backgroundColor:"#E4F7EB", zIndex :"10"}} className="hello">
        <Container><p style={{color:"#1C7E41", textAlign: "center"}}>special offer</p></Container>
        <br/>
    </div>
    <div className="hello1"></div>
    </header>
    <body>{props.children}</body>
    <footer><Footer/></footer>
    </div>
);
};

export default Layout;
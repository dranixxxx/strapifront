import { Row, Col, Container} from 'reactstrap'
import React from "react";
import  { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from "next/link";


  const Footer =(props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

        return (
            <div style={{color:"#ffff"}}>
                <div className="container-fluid" >
                    <div className="panel panel-default row justify-content-center" >

                            <div className = "col-lg-2">

                                        <div
                                            className="h4 text-center"
                                            role="heading"
                                            aria-level="2"
                                        >

                                        </div>
                                        <ul>
                                        <a  className="about" style={{fontSize: "12px" }}  href="https://explore.zoom.us/about?_ga=2.26202365.1138653978.1612319297-1500631459.1586308153">
                                                About
                                            </a>
                                            <li>
                                                <a  href="https://blog.zoom.us/" tracking-id="footerBlog" tracking-category="NavFooter">Zoom Blog</a>
                                            </li>
                                            <li>
                                                <a  href="https://explore.zoom.us/customer/all">Customers</a>
                                            </li>
                                            <li>
                                                <a  href="https://explore.zoom.us/team">Our Team</a>
                                            </li>
                                            <li>
                                                <a  href="https://explore.zoom.us/careers">Careers</a>
                                            </li>
                                            <li>
                                                <a href="https://explore.zoom.us/integrations">Integrations</a>
                                            </li>

                                            <li>
                                            <a  href="https://explore.zoom.us/partners">Partners</a>
                                            </li>
                                            <li>
                                                <a  href="https://investors.zoom.us/">Investors</a>
                                            </li>
                                            <li>
                                                <a  href="https://zoom.us/press">Press</a>
                                            </li>
                                            <li>
                                                <a  href="https://zoom.us/media-kit">Media Kit</a>
                                            </li>

                                            <li>
                                                <a  href="https://explore.zoom.us/resources">How to Videos</a>
                                            </li>

                                </ul>
                            </div>
                            <div className = "ft-Download col-lg-2">
                                <div
                                     className="h4 text-center"
                                     role="heading"
                                     aria-level="2">

                                </div>
                                <div className="d-flex flex-row d-lg-inline-flex flex-wrap justify-content-lg-start justify-content-around">

                                    <ul>
                                        <a className="dow"
                                            style={{fontSize: "12px" }}
                                            href="https://zoom.us/download"
                                    >Download
                                    </a>
                                        <li>
                                            <a href="https://zoom.us/download#client_4meeting" tracking-id="footerDownloadClient" tracking-category="NavFooter">Meetings Client</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/download#room_client" tracking-id="footerDownloadZR" tracking-category="NavFooter">Zoom Rooms Client</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/download#chrome_ext" tracking-id="footerDownloadExtension" tracking-category="NavFooter">Browser Extension</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/download#outlook_plugin" tracking-id="footerDownloadOPlugin" tracking-category="NavFooter">Outlook Plug-in</a>
                                        </li>

                                        <li>
                                            <a href="https://zoom.us/download#lync_plugin" tracking-id="footerDownloadLyncPlugin" tracking-category="NavFooter">Lync Plug-in</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/download#client_iphone" tracking-id="footerDownloadiOS" tracking-category="NavFooter">iPhone/iPad App</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/download#mobile_app" tracking-id="footerDownloadAndroid" tracking-category="NavFooter">Android App</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/virtual-backgrounds" tracking-category="NavFooter">Zoom Virtual Backgrounds</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="ft-sales col-lg-2">
                                <div className="h4 text-center" role="heading" aria-level="2">

                                </div>
                                <div className="d-flex flex-row d-lg-inline-flex flex-wrap justify-content-lg-start justify-content-around">
                                     <ul>
                                     <a  className="dow" style={{fontSize: "12px" }} href="https://explore.zoom.us/contactsales">Sales</a>
                                        <li>
                                            <a href="tel:1.888.799.9666" className="support-phone">1.888.799.9666</a>
                                        </li>
                                        <li>
                                            <a href="https://explore.zoom.us/contactsales">Contact Sales</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/pricing">Plans &amp; Pricing</a>
                                        </li>


                                        <li>
                                            <a href="https://explore.zoom.us/livedemo" tracking-id="footerRequestDemo" tracking-category="NavFooter">Request a Demo</a>
                                        </li>
                                        <li>
                                            <a href="https://zoom.us/events" tracking-id="footerWebinars" tracking-category="NavFooter">Webinars and Events</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ft-support col-lg-2">
                                <div className="h4" role="heading" aria-level="2">

                                </div>
                                <ul>
                                <a className="dow1" style={{fontSize: "12px" }} href="https://support.zoom.us/hc/en-us" tracking-id="footerSupport" tracking-category="NavFooter" target="_blank">
                                         Support
                                    </a>
                                    <li>
                                        <a href="https://zoom.us/test">Test Zoom</a>
                                    </li>
                                    <li><a href="https://zoom.us/account">Account</a></li>
                                    <li>
                                    <a href="https://support.zoom.us/hc/en-us" tracking-id="footerSupport2" tracking-category="NavFooter" target="_blank">
                                    Support Center</a>
                                    </li>
                                    <li><a href="https://explore.zoom.us/livetraining" tracking-id="footerTraining" tracking-category="NavFooter">Live Training</a></li>
                                    <li><a href="https://zoom.us/feed">Feedback</a></li>
                                    <li><a href="https://explore.zoom.us/contact">Contact Us</a></li>
                                    <li><a href="https://explore.zoom.us/accessibility">Accessibility</a></li>
                                    <li><a href="https://explore.zoom.us/privacy-and-security">Privacy and Security</a></li>
                                </ul>
                            </div>
                            <div className="cm-language col-lg-auto">
                                <div className="h4 mot" role="heading" aria-level="2">
                                    Language
                                </div>
                                <ul className="clearfix hanoi">
                                <span className="dow2" style={{color:"white",fontSize : "12px"}}>Language</span>
                                    <li className="language">
                                        <Dropdown isOpen={dropdownOpen} toggle={toggle} >

      <DropdownToggle caret style={{backgroundColor:"#5a5a5a",marginRight:"10px"}}>
       <div style={{fontSize:"12px", float:"left",color:"white",marginRight : '-1px'}}>
     English
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

        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
                                    </li>
                                </ul>
                                <input type="hidden" id="cookie_currency" value="USD"/>
                                <div className="h4" role="heading" aria-level="2">
                                      <span className="cur" style={{color:"#eaeaea"}}>Currency</span>
                                </div>
                                <ul className="clearfix">

                                    <li>
                                        <div style={{backgroundColor : "#5a5a5a"}} className="dropdown-currency  mot dropdown" role="presentation">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-haspopup="true">
                                                <span className="hai" style={{color:"white"}}>US Dollars $</span>
                                                <span className="caret"></span>
                                            </a>
                                            <ul style={{color:"white",fontSize : "12px"}} className="dropdown-menu pull-right">
                                                <li style={{color:"white",fontSize : "12px"}}  className="active"></li>

                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="info-icons">
                                    <a href="https://blog.zoom.us/" className="icon" target="_blank" tracking-id="footerBlogIcon" tracking-category="NavFooter">
                                        <span className="sr-only">Zoom on Blog</span>
                                        <span className="wordpress"></span>
                                    </a>
                                    <a href="http://www.linkedin.com/company/2532259" className="icon" target="_blank">
                                        <span className="sr-only">Zoom on LinkedIn</span>
                                        <span className="linkedin"></span>
                                    </a>
                                    <a href="http://www.twitter.com/zoom_us" className="icon" target="_blank">
                                        <span className="sr-only">Zoom on Twitter</span>
                                        <span className="twitter"></span>
                                    </a>
                                    <a href="http://www.youtube.com/zoommeetings" className="icon" target="_blank">
                                        <span className="sr-only">Zoom on Youtube</span>
                                        <span className="youtube-play"></span>
                                    </a>
                                    <a href="http://www.facebook.com/zoomvideocommunications" className="icon" target="_blank">
                                        <span className="sr-only">Zoom on Facebook</span>
                                        <span className="facebook"></span>
                                    </a>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    export default Footer;

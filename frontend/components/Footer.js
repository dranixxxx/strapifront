import { Row, Col, Container} from 'reactstrap'
import React from "react";
    const Footer =() => {
        return (
            <div style={{backgroundColor:"#666"}}>
                <Container>
                    <br/>
                <Row>
                    <Col md={3}>
                        About
                        <div>
                        <a className="down" href="https://blog.zoom.us/?_ga=2.209264470.531254848.1611128203-1500631459.1586308153"> Zoom Blog </a>
                        </div>
                        <div>
                         <a className="down" href="https://explore.zoom.us/customer/all?_ga=2.213211856.531254848.1611128203-1500631459.1586308153"> Customers </a>

                        </div>
                        <div>
                         <a className="down" href="https://explore.zoom.us/team"> Our Team </a>

                        </div>


                    </Col>
                    <Col md={3}>
                    Download
                        <div>
                        <a className="down" href="https://zoom.us/download#client_4meeting"> Meeting Client </a>
                        </div>
                        <div>
                         <a className="down" href="https://zoom.us/download#chrome_ext"> Browers Extention </a>

                        </div>
                        <div>
                         <a className="down" href="https://zoom.us/download#outlook_plugin="> Outlook Plug-in </a>

                        </div>
                    </Col>
                    <Col md={3}>Sale
                        <div>
                        <a className="down" href="https://explore.zoom.us/contactsales"> Contact sasles </a>
                        </div>
                        <div>
                         <a className="down" href="https://zoom.us/pricing"> Plan and Pricing </a>

                        </div>
                        <div>
                         <a className="down" href="https://explore.zoom.us/livedemo="> Request a Demo </a>

                        </div>
                    </Col>
                    <Col md={3}>Support
                        <div>
                        <a className="down" href="https://zoom.us/test"> test </a>
                        </div>
                        <div>
                         <a className="down" href="https://zoom.us/signin"> Account </a>

                        </div>
                        <div>
                         <a className="down" href="https://support.zoom.us/hc/fr"> Support </a>

                        </div>
                    </Col>
                    <style jsx>
                        {`
                        p{color:white;}
                        `}
                    </style>
                </Row>
                </Container>
            </div>

        );
    }
    export default Footer;
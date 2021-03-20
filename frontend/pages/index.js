/* /pages/index.js */
import React from 'react';
import {
    Container,
    Col,
    Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, InputGroup, InputGroupAddon, Input,
} from 'reactstrap';
import Carousell from "../components/Carouselindex";
import Solution from '../components/Solution.js';

const mystyle ={textAlign: "center", marginTop: "50px"}

function Home() {
  return (
  <>
    <div style={{backgroundColor:"#E4F7EB", zIndex :"10"}} className="hello">
        <Container><p style={{color:"#1C7E41", textAlign: "center"}}>special offer</p></Container>
        <br/>
    </div>
    <Carousell/>

    <Solution/>

    <div>
        <br/>
        {/* 3/3 */}
    <div className="container-fluid rrr">
    <Row>

            <Col md={4}>
            <div className="news clearfix">
<h3>Zoom is Ranked #1 in Customer Reviews</h3>
<div className="ngan"></div>
<div className="line"></div>
<p>See why customers love Zoom</p>
<a className="btn-cta cta-bg cta-bgwhite learn-more" href="https://zoom.us/customer/all" target="_blank">Why Zoom</a>
</div>
            </Col>
             <Col md={7}>
             <Row>
             <Col md={4}>
<div className="news-item swiper-slide swiper-slide-active" role="tabpanel" aria-roledescription="slide" >
<div className="gartner">
<div className="logo"><img className="img-responsive" src="https://us05st2.zoom.us/static/94159/image/new/home/Gartner.png" alt="gartner"/></div>
<div className="stars"><img src="https://us05st2.zoom.us/static/94159/image/new/home/Four_Stars.png" alt="Third_Stars"/></div>
<div className="details">
<p className="desc1">649K </p>
</div>
<a className="learn" aria-describedby="gartnerMore" href="https://www.gartner.com/reviews/market/meeting-solutions/vendor/zoom/product/zoom-meetings" target="_blank" data-on-event="send,event,misc,click-homepage-gartnerpeer-learnmore,Homepage Gartner Peer Learn More" tabIndex="0">Learn More</a>
</div>
</div>
             </Col>
              <Col md={4}>
<div className="news-item swiper-slide swiper-slide-active" role="tabpanel" aria-roledescription="slide" >
<div className="gartner">
<div className="logo"><img className="img-responsive" src="https://us05st2.zoom.us/static/94159/image/new/home/Gartner.png" alt="gartner"/></div>
<div className="stars"><img src="https://us05st2.zoom.us/static/94159/image/new/home/Four_Stars.png" alt="Third_Stars"/></div>
<div className="details">
<p className="desc1">649K </p>
</div>
<a className="learn" aria-describedby="gartnerMore" href="https://www.gartner.com/reviews/market/meeting-solutions/vendor/zoom/product/zoom-meetings" target="_blank" data-on-event="send,event,misc,click-homepage-gartnerpeer-learnmore,Homepage Gartner Peer Learn More" tabIndex="0">Learn More</a>
</div>
</div>
             </Col>
              <Col md={4}>
<div className="news-item swiper-slide swiper-slide-active" role="tabpanel" aria-roledescription="slide" >
<div className="gartner">
<div className="logo"><img className="img-responsive" src="https://us05st2.zoom.us/static/94159/image/new/home/Gartner.png" alt="gartner"/></div>
<div className="stars"><img src="https://us05st2.zoom.us/static/94159/image/new/home/Four_Stars.png" alt="Third_Stars"/></div>
<div className="details">
<p className="desc1">649K </p>
</div>
<a className="learn" aria-describedby="gartnerMore" href="https://www.gartner.com/reviews/market/meeting-solutions/vendor/zoom/product/zoom-meetings" target="_blank" data-on-event="send,event,misc,click-homepage-gartnerpeer-learnmore,Homepage Gartner Peer Learn More" tabIndex="0">Learn More</a>
</div>
</div>
             </Col>




             </Row>
            </Col>
            </Row>
    </div>


{/*3/3*/}

    </div>

      <div style={{backgroundColor:"#f4f4f8"}}>
        <br/>
<div className="container">
<Row>
<Col md={6} className="carousel-text1">
<h1 className="words" style={{paddingTop:"20px"}}>"The quality is amazing. We've had fantastic results all over the company."</h1>
<p className="locate">Rujul Pathak at Zendesk</p>
<a href="https://www.youtube.com/embed/pUKAOqtqY9U?rel=0&amp;autoplay=1&amp;showinfo=0" className="home-video-link" style={{display: "block",marginTop:"74px",tabindex:"0"}}>
<span className="sr-only">Play Video</span>
</a>
</Col>
<Col md={6} className="company-logo bg-solarcity">
<div></div>
<img className="img-responsive" src="https://us05st3.zoom.us/static/94159/image/new/home/logo-zendesk-wht.png" alt="" style={{background:"red", width:"100%"}} />
</Col>
</Row>
</div>
<div className="container anh42" >
<Row>

        <Col className="vip-item" data-active="2" md={1}>
        </Col>
          <Col className="vip-item" data-active="2" md={10}>
          <Row>
        <Col className="vip-item" data-active="2" md={3}>
        <div className="detail jelena" data-target="#myCarousel" data-slide-to="1">
        <div className="logo"><img src="https://us05st1.zoom.us/static/94159/image/new/home/logo-abinbev.png" alt=""/></div>
        </div>
        </Col>
        <Col className="vip-item" data-active="3" md={3}>
        <div className="detail rachel" data-target="#myCarousel" data-slide-to="2">
        <div className="logo"><img src="https://us05st1.zoom.us/static/94159/image/new/home/logo-uber.png" alt=""/></div>
        </div>
        </Col>
        <Col className="vip-item" data-active="4" md={3}>
        <div className="detail zendesk" data-target="#myCarousel" data-slide-to="3">
        <div className="logo"><img src="https://us05st3.zoom.us/static/94159/image/new/home/logo_zendesk_new.jpg" alt=""/></div>
        </div>
        </Col>
        <Col className="vip-item" data-active="5" md={3}>
        <div className="detail veeva active" data-target="#myCarousel" data-slide-to="4">
        <div className="logo"><img src="https://us05st3.zoom.us/static/94159/image/new/home/logo_veeva.png" alt=""/></div>
        </div>
        </Col>
        </Row>
        </Col>
         <Col className="vip-item" data-active="2" md={1}>
        </Col>
</Row>
</div>
        <div className="container-fluid anh43">
            <h1 style={mystyle}>Dạy học online</h1>
        <Row className="brand-list">

            <Col className="brand left-part" md={4} >
             <img className="brand--image" src="https://zoom.us/docs/image/new/home/logo-sn.png" alt="">
             </img>
          </Col>
           <Col className="brand" md={8} >
            <Row className="brand-list">
            <Col className="brand" md={4}>
             <img className="brand--image" src="https://us05st2.zoom.us/static/94159/image/new/home/logo-box.png" alt="Box">
             </img>
          </Col>
            <Col className="brand" md={4}>
             <img className="brand--image" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/rakuten.png" alt="">
             </img>
          </Col>
            <Col className="brand" md={4}>
             <img className="brand--image" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/logo-logitech.png" alt="">
             </img>
          </Col>
          </Row>
          </Col>
        </Row>

            <div className="btn-list" style={mystyle}>
            <Button color="primary" href="/register" className="btn fz-20px" >Dạy thử</Button>
            <Button color="warning" href="/register" className="btn mgleft-20 fz-20px">Đăng kí dạy học</Button>
            </div>
        </div>
      </div>

  </>
  );
};
export default Home;

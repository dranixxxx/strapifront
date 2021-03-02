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

const mystyle ={textAlign: "center", marginTop: "50px"}

function Home() {
  return (
  <>
    <Carousell/>
    <Container style={mystyle}>
      <p >Đăng kí khóa học ngay hôm nay
        <Button color="primary" href="/register" style={{marginLeft: "20px"}}>Đăng kí ngay</Button>
      </p>
        <h1 style={mystyle}>One Consistent Enterprise Experience.</h1>
      <Row>

      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>

      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

        </CardBody>
      </Card>
      </Col>
      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>

    </Row>
    </Container>

    <div style={{backgroundColor:"#f4f4f8"}}>
        <br/>
        <Container>
        <Row>

            <Col md={4}>
      <Card style={{backgroundColor:"transparent", border: "transparent"}}>
        <CardImg height="100px" top width="100%" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/Gartner.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
            <Col md={4}>
      <Card style={{backgroundColor:"transparent", border: "transparent"}}>
        <CardImg height="100px" top width="100%" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/trustradiusLogo.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
            <Col md={4}>
      <Card style={{backgroundColor:"transparent", border: "transparent"}}>
        <CardImg height="100px" top width="100%" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/g2crowd.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
        </Row>
        <br/>
      </Container>
    </div>
      <div>
          <h1 style={mystyle}>Why us?</h1>
          <Container style={mystyle}>
              <Row>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_1.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_2.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_3.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_4.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_5.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_1.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
              </Row>
          </Container>
      </div>
      <div style={{backgroundColor:"#f4f4f8"}}>
        <br/>
        <Container>
            <h1 style={mystyle}>Dạy học online</h1>
        <Row>
            <Col md={3}>
             <img src="https://zoom.us/docs/image/new/home/logo-sn.png" alt="">
             </img>
          </Col>
            <Col md={3}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/8LogoTrendMicro.jpg" alt="">
             </img>
          </Col>
            <Col md={3}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/rakuten.png" alt="">
             </img>
          </Col>
            <Col md={3}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/logo-logitech.png" alt="">
             </img>
          </Col>
        </Row>

            <div style={mystyle}>
            <Button color="primary" href="/register" style={{margin: "10px"}}>Dạy thử</Button>
            <Button color="warning" href="/register">Đăng kí dạy học</Button>
            </div>
        </Container>
      </div>

  </>
  );
};
export default Home;
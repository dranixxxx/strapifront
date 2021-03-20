
import React from "react";
import {Container, Col, Row } from "reactstrap";

export default function Solution() {
  const [state, setstate] = React.useState({
    icon: <img className="nholai" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"/>,
    text: "Conference Rooms",
    des: "Redesigning your conference rooms? Adding huddle spaces? Zoom Rooms has video-conferencing solutions to meet your needs.",
    image: "https://us05st2.zoom.us/static/94159/image/new/home/Group3.png"
  });

  var data = [
    {
      aa: {
        icons: <img className="nholai" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"/> ,
        texts: "Conference Rooms",
        dess: "Redesigning your conference rooms? Adding huddle spaces? Zoom Rooms has video-conferencing solutions to meet your needs.",
        images: "https://us05st2.zoom.us/static/94159/image/new/home/Group3.png"
      }
    },
    {
      aa: {
        icons: <img className="nholai" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"/> ,
        texts: "Meetings & Chat",
        dess: "Build better relationships, solve business challenges, and meet happy with the industry's best video meeting experience! Keep collaborating with team chat.",
        images: "https://us05st1.zoom.us/static/94159/image/new/home/Group2.png"
      }
    },
    {
      aa: {
        icons: <img className="nholai" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"/> ,
        texts: "Video Webinar",
        dess: "Reach and qualify more leads, have global company-wide meetings, and host large-scale trainings with these interactive webinars.",
        images: "https://us05st3.zoom.us/static/94159/image/new/home/Group1.png"
      }
    },
    {
      aa: {
        icons: <img className="nholai" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"/> ,
        texts: "Phone System",
        dess: "Powerful. Global. Enteprise cloud phone for secure call routing, call queuing, voicemail, switch to video and more.",
        images: "https://us05st1.zoom.us/static/94159/image/new/home/Group5.png"
      }
    }
  ];


  const onSetColor = (icons, texts, images, dess) => {
    setstate({
      icon: icons,
      text: texts,
      des: dess,
      image: images
    });
  };

  function setActiveColor(icon, text, dess, image) {
    onSetColor(icon, text, dess, image);
  }

  var elmColors = data.map((a, index) => {
    return (
      <span
        key={index}
        className="mothang"
        onClick={() => setActiveColor(a.aa.icons, a.aa.texts, a.aa.images, a.aa.dess)}
      >{a.aa.icons}</span>
    );
  });
  return (
    <>
    <div className="solution">
       <h1>One Consistent Enterprise Experience</h1>
       <div className="panel panel-primary">
         <div className="panel-body">{elmColors}</div>
            </div>
          </div>
    <Row style={{paddingLeft:"7%"}}>
            <Col xs={6} sm={6} md={6} lg={6}>
              <h3>{state.text}</h3>
              <p>{state.des}</p>
              <a href="https://www.youtube.com/embed/C0RUZri5moM?rel=0&autoplay=1&showinfo=0">
                Watch Video
              </a>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <img alt={state.text} src={state.image}></img>
            </Col>
        </Row>
    </>
  );
}

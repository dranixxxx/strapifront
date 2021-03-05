import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,Container,Table,Input } from 'reactstrap';
import classnames from 'classnames';
import Teacher from "../components/account/Teacher";
import Student from "../components/account/Student";
import Switch from "@material-ui/core/Switch";
import Grid from '@material-ui/core/Grid';
import { useBetween } from "use-between";
import Switchh from "../components/Switchh";
import { withStyles } from "@material-ui/core/styles";

function test()  {
  const [activeTab, setActiveTab] = useState('1');
  //switch
  const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 2,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#0e71eb",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#0e71eb",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 22,
    height: 22
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#0e71eb",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});
  const { check, setCheck } = useBetween(Switchh);
  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };
  //tab
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
    <div style={{margin: "50px"}}>
      <h1>Choose a Plan</h1>
      <p>Find the right solution for your needs.</p>
      <div className="switchstyle">
      <Row>
      <div className="bill1">
      <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item>Billed monthly</Grid>
      <Grid>
      <IOSSwitch
                checked={check.checked}
                onChange={handleChange}
                name="checked"
            />
      </Grid>
      <Grid item>Billed anually</Grid>
      </Grid>
      </div>
      <div className="bill2">
      <div className="billsect">
        <span className="billsecttext">CURRENCY</span>
        <Input type="select" name="select" id="exampleSelect" className="billsectinput">
          <option>VN</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </div>
      <div className="billsect">
        <span className="billsecttext">REGION</span>
        <Input type="select" name="select" id="exampleSelect" className="billsectinput">
          <option>VN</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </div>
      </div>
      </Row>
      </div>
      <Nav tabs>
        <NavItem>
          <NavLink
            style={{padding: "0.5rem 10rem", fontSize: "20px"}}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Student
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{padding: "0.5rem 10rem", fontSize: "20px"}}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Teacher
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" style={{marginTop: "50px"}}>
              <Student />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12" style={{marginTop: "50px"}}>
              <Teacher/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>

    <div style={{margin: "0 50px 50px 50px"}}>
      <h1>Plan comparision</h1>
      <Table striped bordered hover size="sm">
      <thead>
    <tr>
      <th> </th>
      <th>BASIC</th>
      <th>PRO</th>
      <th>BUISINESS</th>
      <th>ENTERPRISE</th>
    </tr>
  </thead>
      <tbody>
    <tr>
      <td>Participant Capacity</td>
      <td>100</td>
      <td>100</td>
      <td>300</td>
      <td>500</td>
    </tr>
    <tr>
      <td>License Count</td>
      <td>1</td>
      <td>1-9</td>
      <td>10-99</td>
      <td>100+</td>
    </tr>
    <tr>
      <td>Technical Support</td>
      <td >Help Center</td>
      <td>Ticket&Live Chat</td>
      <td>Ticket,Live Chat, & Phone</td>
      <td>Ticket,Live Chat, & Phone</td>
    </tr>
  </tbody>
      </Table>
    </div>

  </>
  );
}

export default test;
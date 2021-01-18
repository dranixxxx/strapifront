import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,Container,Table } from 'reactstrap';
import classnames from 'classnames';
import Teacher from "../components/account/Teacher";
import Student from "../components/account/Student";

function test()  {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
    <Container>
      <h1>Choose a Plan</h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Student
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
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
            <Col sm="12">
              <Student/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Teacher/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>

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
  </>
  );
}

export default test;
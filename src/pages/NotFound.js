import React from 'react';
import { Row, Button, Card, Typography } from "antd";
import { useMainContext } from '../context/MainContext';
const { Title } = Typography;

const NotFound = () => {
  const { onRedirect } = useMainContext();
  return (
    <Row className="center-container" align="middle" justify="center">
      <Card style={{ width: 500 }}>
        <Title level={2}>Page is not found</Title>
        <Button type="primary" htmlType="submit" onClick={() => onRedirect()}>
          Back to mainpage
        </Button>
      </Card>
    </Row>
  )
}

export default NotFound;

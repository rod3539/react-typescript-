import React from 'react';
import storeItems from '../data/items.json'
import { Col, Row } from 'react-bootstrap'
import StoreItem from '../Components/StoreItem';

function Store() {
  return (
    <>
    <div>
      Store
    </div>
    <Row md={2} xs={1} lg={3} className='g-3'>
      {storeItems.map(item => (
          <Col key={item.name}>
            <StoreItem {...item}/>
          </Col>
        ))}
    </Row>
    </>
  );
}

export default Store;
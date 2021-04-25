import React from 'react';

import ModalSelectedElement from "./Modals/ModalSelectedElement.js";

import {
  Row,
  Col,
} from "reactstrap";

const List = (props) => {
  const { establishments } = props;
  
 

  if (!establishments || establishments.length === undefined) return <p>No establishments, sorry</p>;
  return (

    <ul className="ul-flex">
      <h2 className='list-head text-center'>Establecimientos</h2>
      
      <Row className='list'>
        {establishments.map((establishment) => {
         
          return (
            <>
              <Col lg="4" md="6" xs="12" className="mb-4" >              
                  <ModalSelectedElement element={establishment} />
              </Col>
            </>
          );
        })}
      </Row>
    </ul>
  );
};
export default List;

import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
const Response = ({ response, index }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5"> {"Query No." + index}</CardTitle>

        <div className="row">
          <div className="col-3">Prompt:</div>
          <div className="col-9"> {response.query}</div>
        </div>

        <div className="row">
          <div className="col-3">Response:</div>
          <div className="col-9">{response.response}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Response;

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Form,
  Row,
} from "react-bootstrap";

const FormSelectType = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            <Row>
              <Col className="d-flex">
                <h6>Select Question Type :</h6>
                {props.formMode === 0 ? (
                  <h6 className="text-primary">
                    <strong> &nbsp; Add Mode</strong>
                  </h6>
                ) : (
                  <h6 className="text-success">
                    <strong> &nbsp; Edit Mode</strong>
                  </h6>
                )}
              </Col>
            </Row>
          </Form.Label>
          <Form.Control
            as="select"
            value={props.formType}
            onChange={(e) => props.setFormType(e.target.value)}
          >
            <option value="radio">radio</option>
            <option value="checkbox">checkbox</option>
            <option value="textarea">textarea</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormSelectType;

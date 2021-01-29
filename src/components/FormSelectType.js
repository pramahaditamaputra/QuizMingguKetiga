import { Form } from "react-bootstrap";

const FormSelectType = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Question Type :</Form.Label>
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

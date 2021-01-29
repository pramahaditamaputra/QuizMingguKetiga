import { Form } from "react-bootstrap";

const QuestionsCheckBox = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>
            {props.index + 1} {"."} {props.question.questionName}
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={props.question.a} />
          <Form.Check type="checkbox" label={props.question.b} />
          <Form.Check type="checkbox" label={props.question.c} />
          <Form.Check type="checkbox" label={props.question.d} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default QuestionsCheckBox;

import { Form } from "react-bootstrap";

const QuestionsRadio = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>
            {props.index + 1} {"."} {props.question.questionName}
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="radio"
            name={props.question.questionName}
            label={props.question.a}
          />
          <Form.Check
            type="radio"
            name={props.question.questionName}
            label={props.question.b}
          />
          <Form.Check
            type="radio"
            name={props.question.questionName}
            label={props.question.c}
          />
          <Form.Check
            type="radio"
            name={props.question.questionName}
            label={props.question.d}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default QuestionsRadio;

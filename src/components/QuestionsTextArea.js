import { Form } from "react-bootstrap";

const QuestionsTextArea = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>
            {props.index + 1} {"."} {props.question.questionName}
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default QuestionsTextArea;

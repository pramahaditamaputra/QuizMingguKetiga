import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormTextArea = (props) => {
  const [questionName, setQuestionName] = useState("");
  const [keyAnswer, setKeyAnswer] = useState([]);
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      questionType: `${props.formType}`,
      questionName,
      score,
      keyAnswer,
    };
    const newQuestion = props.questions;
    newQuestion.push(question);
    props.setQuestions(newQuestion);
    props.setButtonType(Math.random());
    console.log(props.questions);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicText">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input Question"
            required
            value={questionName}
            onChange={(e) => setQuestionName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Key Answer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input Key Answer"
            required
            value={keyAnswer}
            onChange={(e) => setKeyAnswer(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
          <Form.Label>Score</Form.Label>
          <Form.Control
            type="number"
            placeholder="Input Score"
            required
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </Form.Group>
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <Button className="btn btn-sm" variant="primary" type="submit">
              Submit New Question
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormTextArea;

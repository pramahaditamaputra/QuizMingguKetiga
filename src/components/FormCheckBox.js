import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormCheckBox = (props) => {
  const [questionName, setQuestionName] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [keyAnswer, setKeyAnswer] = useState([]);
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      questionType: `${props.formType}`,
      questionName,
      a,
      b,
      c,
      d,
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
          <Form.Label>Answer A</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input Answer A"
            required
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Answer B</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input Answer B"
            required
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Answer C</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input Answer C"
            required
            value={c}
            onChange={(e) => setC(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Answer D</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input Answer D"
            required
            value={d}
            onChange={(e) => setD(e.target.value)}
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormCheckBox;

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormRadio = (props) => {
  const [questionName, setQuestionName] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [keyAnswer, setKeyAnswer] = useState("");
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
    // const newQuestion = props.questions;
    // newQuestion.push(question);
    // props.setQuestions(newQuestion);
    // props.setButtonType(Math.random());
    // console.log(props.questions);

    if (props.formMode === 0) {
      props.addQuestion(question);
    } else if (props.formMode === 1) {
      console.log(e.target.value);
      if (e.target.value === "edit") {
        props.editQuestion(question);
      } else if (e.target.value === "cancel") {
        props.handleCancel();
      }
    }
  };

  return (
    <div>
      <Form>
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
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            {props.formMode === 0 ? (
              <Button
                className="btn btn-sm"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Submit New Question
              </Button>
            ) : (
              <>
                <Button
                  className="btn btn-sm mr-3"
                  variant="success"
                  type="submit"
                  value="edit"
                  onClick={handleSubmit}
                >
                  Submit Edit Question
                </Button>
                <Button
                  className="btn btn-sm"
                  variant="danger"
                  type="submit"
                  value="cancel"
                  onClick={handleSubmit}
                >
                  Cancel
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormRadio;

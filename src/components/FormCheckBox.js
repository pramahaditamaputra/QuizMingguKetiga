import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormCheckBox = (props) => {
  const [questionName, setQuestionName] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [keyAnswer, setKeyAnswer] = useState([]);
  const [score, setScore] = useState("");

  const resetAllFields = () => {
    setQuestionName("");
    setA("");
    setB("");
    setC("");
    setD("");
    setKeyAnswer("");
    setScore("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formattedKeyAnswer = keyAnswer.split(",");
    const question = {
      questionType: `${props.formType}`,
      questionName,
      a,
      b,
      c,
      d,
      score,
      keyAnswer: [formattedKeyAnswer],
    };

    if (props.formMode === 0) {
      if (props.addQuestion(question)) {
        resetAllFields();
      }
    } else if (props.formMode === 1) {
      if (e.target.value === "edit") {
        if (props.editQuestion(question)) {
          resetAllFields();
        }
      } else if (e.target.value === "cancel") {
        if (props.handleCancel()) {
          resetAllFields();
        }
      }
    }
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

export default FormCheckBox;

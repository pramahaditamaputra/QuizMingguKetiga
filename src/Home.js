import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FormCheckBox from "./components/FormCheckBox";
import FormRadio from "./components/FormRadio";
import FormSelectType from "./components/FormSelectType";
import FormTextArea from "./components/FormTextArea";
import QuestionsRadio from "./components/QuestionsRadio";
import QuestionsCheckBox from "./components/QuestionsCheckBox";
import QuestionsTextArea from "./components/QuestionsTextArea";

const Home = () => {
  const [buttonType, setButtonType] = useState(0);
  const [formType, setFormType] = useState("radio");
  const [questions, setQuestions] = useState([]);
  const [formMode, setFormMode] = useState(0);

  //DeleteSelectedQuestionAndChangeFormModeToAdd
  const handleRemove = (e) => {
    let filteredQuestions = questions.filter(
      (question) => question.questionName !== e.target.value
    );
    setQuestions(filteredQuestions);
    setFormMode(0);
  };

  //GetQuestionSelectedIndex
  let [selectedQuestion, setSelectedQuestion] = useState(null);

  //GetFormBasedOnQuestionTypeAndChangeFormModeToEdit
  const handleEdit = (e) => {
    setSelectedQuestion(e.target.value);
    let objQuestions = [...questions];
    let objQuestion = {
      ...objQuestions[e.target.value],
    };
    setFormMode(1);
    setFormType(objQuestion.questionType);
  };

  //EditQuestionAndChangeFormModeToAddQuestion
  const editQuestion = (question) => {
    //CloneCurrentStateValue
    let objQuestions = [...questions];
    //GetSelectedStateArrayIndexAndSetAllNewValueToAllKey
    let objQuestion = {
      ...objQuestions[selectedQuestion],
      ...question,
    };
    //ReInitCurrentSelectedIndexToNewOBJValue
    objQuestions[selectedQuestion] = objQuestion;
    //SetNewValueToState
    setFormMode(0);
    setQuestions(objQuestions);
    return true;
  };

  //AddQuestion
  const addQuestion = (question) => {
    //CloneCurrentStateValue
    let newQuestion = [...questions, question];
    //SetNewValueToState
    setFormMode(0);
    setQuestions(newQuestion);
    return true;
  };

  //ChangeFormModeFromEditToAdd
  const handleCancel = () => {
    //ChangeFormModeToAdd
    setFormMode(0);
    return true;
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col lg={6}>
          <div className="my-5" style={{}}>
            {questions.map((question, index) => {
              if (question.questionType === "radio") {
                return (
                  <Card key={question.questionName} className="mb-3 p-3">
                    <Card.Body>
                      <Row className="d-flex justify-content-end">
                        <Col lg={3} className="d-flex">
                          <Button
                            value={index}
                            onClick={handleEdit}
                            className="btn btn-sm btn-primary mr-2"
                          >
                            Edit
                          </Button>
                          <Button
                            value={question.questionName}
                            onClick={handleRemove}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                      <QuestionsRadio
                        key={question.questionName}
                        question={question}
                        index={index}
                      />
                    </Card.Body>
                  </Card>
                );
              } else if (question.questionType === "checkbox") {
                return (
                  <Card key={question.questionName} className="mb-3 p-3">
                    <Card.Body>
                      <Row className="d-flex justify-content-end">
                        <Col lg={3} className="d-flex">
                          <Button
                            value={index}
                            onClick={handleEdit}
                            className="btn btn-sm btn-primary mr-2"
                          >
                            Edit
                          </Button>
                          <Button
                            value={question.questionName}
                            onClick={handleRemove}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                      <QuestionsCheckBox question={question} index={index} />
                    </Card.Body>
                  </Card>
                );
              } else if (question.questionType === "textarea") {
                return (
                  <Card key={question.questionName} className="mb-3 p-3">
                    <Card.Body>
                      <Row className="d-flex justify-content-end">
                        <Col lg={3} className="d-flex">
                          <Button
                            value={index}
                            onClick={handleEdit}
                            className="btn btn-sm btn-primary mr-2"
                          >
                            Edit
                          </Button>
                          <Button
                            value={question.questionName}
                            onClick={handleRemove}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                      <QuestionsTextArea question={question} index={index} />
                    </Card.Body>
                  </Card>
                );
              } else {
              }
            })}
          </div>
        </Col>

        <Col lg={6}>
          <div
            className="border-box my-5"
            style={{
              border: "1px solid #EAEAEA",
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            <FormSelectType
              formType={formType}
              setFormType={setFormType}
              formMode={formMode}
            />

            {formType === "radio" && (
              <FormRadio
                formType={formType}
                questions={questions}
                setQuestions={setQuestions}
                buttonType={buttonType}
                setButtonType={setButtonType}
                addQuestion={addQuestion}
                editQuestion={editQuestion}
                formMode={formMode}
                handleCancel={handleCancel}
              />
            )}
            {formType === "checkbox" && (
              <FormCheckBox
                formType={formType}
                questions={questions}
                setQuestions={setQuestions}
                buttonType={buttonType}
                setButtonType={setButtonType}
                addQuestion={addQuestion}
                editQuestion={editQuestion}
                formMode={formMode}
                handleCancel={handleCancel}
              />
            )}
            {formType === "textarea" && (
              <FormTextArea
                formType={formType}
                questions={questions}
                setQuestions={setQuestions}
                buttonType={buttonType}
                setButtonType={setButtonType}
                addQuestion={addQuestion}
                editQuestion={editQuestion}
                formMode={formMode}
                handleCancel={handleCancel}
                handleEdit={handleEdit}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

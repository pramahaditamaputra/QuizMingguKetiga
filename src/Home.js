import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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

  useEffect(() => {
    console.log("Horray");
  }, [questions]);

  return (
    <Container className="mt-2">
      <Row>
        <Col lg={6}>
          <div
            className="border-box my-5"
            style={{
              border: "1px solid #EAEAEA",
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            {questions.map((question, index) => {
              if (question.questionType === "radio") {
                return (
                  <QuestionsRadio
                    key={question.questionName}
                    question={question}
                    index={index}
                  />
                );
              } else if (question.questionType === "checkbox") {
                return (
                  <QuestionsCheckBox
                    key={question.questionName}
                    question={question}
                    index={index}
                  />
                );
              } else if (question.questionType === "textarea") {
                return (
                  <QuestionsTextArea
                    key={question.questionName}
                    question={question}
                    index={index}
                  />
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
            <FormSelectType formType={formType} setFormType={setFormType} />
            {formType === "radio" && (
              <FormRadio
                formType={formType}
                questions={questions}
                setQuestions={setQuestions}
                buttonType={buttonType}
                setButtonType={setButtonType}
              />
            )}
            {formType === "checkbox" && (
              <FormCheckBox
                formType={formType}
                questions={questions}
                setQuestions={setQuestions}
                buttonType={buttonType}
                setButtonType={setButtonType}
              />
            )}
            {formType === "textarea" && (
              <FormTextArea
                formType={formType}
                questions={questions}
                setQuestions={setQuestions}
                buttonType={buttonType}
                setButtonType={setButtonType}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

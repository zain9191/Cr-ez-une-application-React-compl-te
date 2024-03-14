import React, { useContext } from "react";
import { SurveyContext } from "../../utils/context/index";

function Results() {
  const { answers } = useContext(SurveyContext);
  console.log(answers);

  return (
    <div>
      <h1>Résultats</h1>

      <ul>
        {Object.entries(answers).map(([question, answer], index) => (
          <li key={index}>
            Question {question}: {answer ? "Oui" : "Non"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;

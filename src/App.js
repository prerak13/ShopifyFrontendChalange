import axios from "axios";
import { useState } from "react";
import InputForm from "./Components/InputForm";
import Response from "./Components/Response";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [responses, setResponses] = useState(
    JSON.parse(localStorage.getItem("queries")) || []
  );
  const [query, setQuery] = useState("");
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env);
    var postData = {
      prompt: e.target.value,
      max_tokens: 2048,
      temperature: 0.5,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    let axiosConfig = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const { data } = await axios.post(
      `https://api.openai.com/v1/engines/text-curie-001/completions`,

      postData,
      axiosConfig
    );

    localStorage.setItem(
      "queries",
      JSON.stringify([{ query, response: data.choices[0].text }, ...responses])
    );
    setResponses([{ query, response: data.choices[0].text }, ...responses]);
  };

  return (
    <div className="container">
      <div className="row">
        <InputForm
          handleSubmit={handleSubmit}
          handleQueryChange={handleQueryChange}
        />
      </div>

      <div className="row">
        <div className="col-9  offset-md-2">
          {responses.length > 0 && <h3> Responses:</h3>}
          {responses.map((response, index) => {
            return (
              <Response
                response={response}
                key={index}
                index={responses.length - index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

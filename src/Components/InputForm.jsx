import React from "react";

function InputForm({ handleSubmit, handleQueryChange }) {
  return (
    <form onSubmit={handleSubmit} className="col-9  offset-md-2 ">
      <h3 className="col-7  offset-md-5 "> Fun with AI</h3>
      <hr />
      <div className="row">
        <h3> Please The Enter Prompt Below:</h3>

        <div className="col-9">
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={handleQueryChange}
          ></textarea>
        </div>

        <button type="submit" className="col-md-3 btn btn-primary mb-2">
          Submit
        </button>
      </div>
    </form>
  );
}

export default InputForm;

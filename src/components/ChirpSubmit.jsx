import React from "react";
const ChirpSubmit = props => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inputNameField" />
            <input
              className="form-control mb-2"
              type="text"
              id="inputNameField"
              placeholder="Name"
            />
          </div>

          <div className="col-auto">
            <label className="sr-only" htmlFor="inputHandleField" />
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                className="form-control"
                type="text"
                id="inputHandleField"
                placeholder="Handle"
              />
            </div>
          </div>

          <div className="col-auto">
            <label className="sr-only" htmlFor="inputBodyField" />
            <input
              className="form-control mb-2"
              type="text"
              id="inputBodyField"
              placeholder="Body"
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-dark mb-2"
              name="cardSubmitButton"
              onClick={event => props.handleClick(event)
            }
            >
              Chirp
            </button>
          </div>
        </div>
        </form>
    </div>
  );
};

export default ChirpSubmit;

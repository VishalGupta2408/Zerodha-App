import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{ backgroundColor: "#387ed1", color: "white" }}
    >
      <div
        className="p-5 d-flex justify-content-between align-items-center"
        id="supportWrapper"
      >
        <h4 className="">Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control p-3 mb-3"
            placeholder="Eg. how do I activate F&O"
          />
          <br />
          <div className="d-flex flex-wrap gap-3">
            <a href="" style={{ color: "white" }}>
              Track account opening
            </a>
            <a href="" style={{ color: "white" }}>
              Track segment activation
            </a>
            <a href="" style={{ color: "white" }}>
              Intraday margins
            </a>
            <a href="" style={{ color: "white" }}>
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol className="mt-3" style={{ lineHeight: "2" }}>
            <li>
              <a href="" style={{ color: "white" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

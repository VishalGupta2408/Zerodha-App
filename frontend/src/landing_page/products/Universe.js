import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <h2 style={{ color: "#424242" }}>The Zerodha Universe</h2>
        <p className="mt-3 text-muted" style={{ fontSize: "1.1em" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Row 1 */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/smallcaseLogo.png"
            style={{ width: "170px" }}
            alt="Smallcase"
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/streakLogo.png"
            style={{ width: "130px" }}
            alt="Streak"
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Algo & strategy platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/sensibullLogo.svg"
            style={{ width: "190px" }}
            alt="Sensibull"
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Options trading platform
          </p>
        </div>

        {/* Row 2 */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/zerodhaFundHouse.png"
            style={{ width: "150px" }}
            alt="Zerodha Fund House"
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Asset management
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/goldenpiLogo.png"
            style={{ width: "150px" }}
            alt="GoldenPi"
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Bonds trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/dittoLogo.png"
            style={{ width: "120px" }}
            alt="Ditto"
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Insurance
          </p>
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "200px", margin: "0 auto" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;

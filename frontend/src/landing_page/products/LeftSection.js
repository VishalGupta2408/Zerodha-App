import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3">
      <div className="row align-items-center py-3">
        <div className="col-6 text-center">
          <img src={imageURL} alt={productName} style={{ width: "85%" }} />
        </div>
        <div className="col-6 px-5">
          <h2 style={{ color: "#424242" }}>{productName}</h2>
          <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
            {productDescription}
          </p>
          <div className="mt-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo →
            </a>
            <a href={learnMore} style={{ textDecoration: "none", marginLeft: "40px" }}>
              Learn more →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" alt="Google Play" style={{ width: "130px" }} />
            </a>
            <a href={appStore} style={{ marginLeft: "15px" }}>
              <img src="/media/images/appstoreBadge.svg" alt="App Store" style={{ width: "130px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
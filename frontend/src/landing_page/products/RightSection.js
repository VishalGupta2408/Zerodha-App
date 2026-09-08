import React from "react";

function RightSection({
  productTitle,
  productDescription,
  learnMore,
  imageUrl,
}) {
  return (
    <div className="container mt-3">
      <div className="row align-items-center py-3">
        <div className="col-6 px-5">
          <h2 style={{ color: "#424242" }}>{productTitle}</h2>
          <p className="mt-3 text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
            {productDescription}
          </p>
          <div className="mt-3">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more →
            </a>
          </div>
        </div>
        <div className="col-6 text-center">
          <img src={imageUrl} alt={productTitle} style={{ width: "85%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
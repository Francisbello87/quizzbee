import React from "react";

const Blob = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/blobs.png`}
        alt=""
        className="blob-top blobs"
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/blobs_medium.png`}
        alt=""
        className="blob-bottom blobs"
      />
    </div>
  );
};

export default Blob;

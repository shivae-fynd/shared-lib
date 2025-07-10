import React from "react";

export const Banner = ({
  imageSrc,
  alt = "Banner Image",
  height = "200px",
  width = "100%",
}) => {
  return (
    <div style={{ width, height, overflow: "hidden" }}>
      <img
        src={imageSrc}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

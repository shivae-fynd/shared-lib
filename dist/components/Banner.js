import React from "react";
export var Banner = function Banner(_ref) {
  var imageSrc = _ref.imageSrc,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? "Banner Image" : _ref$alt,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "200px" : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? "100%" : _ref$width;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      height: height,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }));
};
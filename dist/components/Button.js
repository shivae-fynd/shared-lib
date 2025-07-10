import React from "react";
export var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, label);
};
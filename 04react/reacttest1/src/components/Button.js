import React from "react";

function Button({ children, textOnly, className, ...props }) {
  let cssClass = textOnly ? "text-button" : "btn";
  cssClass = cssClass + " " + className;

  return (
    <div className={cssClass} {...props}>
      {children}
    </div>
  );
}

export default Button;

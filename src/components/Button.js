import React from "react";

function Button({props}) {
  const {className, content} = props
  // console.log(style)
  // console.log(content)
  return (
    <button className={className}>
      {content}
    </button>
  );
}

export default Button;
import React from "react";

function PropsExap(props) {
  return (
    <div>
      <h2>This is Props Example Component</h2>
      <p>Message: {props.message}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

export default PropsExap;
import React from "react";

export default function Resource(props) {
  return (
    <div>
      <p>
        <span style={{ color: "#22c94f" }}>{props.title} - </span>
        <a href={props.link}>{props.link}</a>
      </p>
    </div>
  );
}

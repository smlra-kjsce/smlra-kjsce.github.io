import React from "react";

export default function Resource(props) {
  return (
    <div>
      <p>
        <li>
          <span><a style={{ color: "#22c94f" }} href={props.link}>{props.title}</a>{props.detail}</span>
          </li>
      </p>
    </div>
  );
}

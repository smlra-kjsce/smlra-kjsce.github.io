import React from "react";
import "../static/css/style.css";

export default function Blog(props) {
  return (
    <div
      className="card shadow c1 card-width"
      style={{
        borderWidth: "0px",
        width: "27rem",
        marginBottom: "5%",
        // maxWidth: "508px",
      }}
    >
      <a href={props.link}>
        <img className="card-img-top" src={props.photo} alt="blog" />
        <div className="card-body text-dark">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.body}</p>
          <p className="card-text">
            <small className="text-muted">{props.date}</small>
          </p>
        </div>
      </a>
    </div>
  );
}

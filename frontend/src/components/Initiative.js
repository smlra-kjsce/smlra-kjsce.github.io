import React from "react";

export default function Initiative(props) {
  return (
    <div className="card" style={{ maxWidth: "508px" }}>
      <img className="card-img-top" src={props.photo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text" style={{ textAlign: "justify" }}>
          {props.body}
        </p>
        <p className="card-text">
          {props.date}
          <small className="text-muted" />
        </p>
        <a
          className="card-text btn btn-dark text-light"
          href={props.github}
          role="button"
          target="_blank"
        >
          View on GitHub &nbsp;
          <i className="fab fa-github fa-1x"> </i>
        </a>
        <a
          className="card-text btn btn-dark text-light"
          href={props.youtube}
          role="button"
          target="_blank"
        >
          View on YouTube &nbsp;
          <i className="fab fa-youtube fa-1x"> </i>
        </a>
      </div>
    </div>
  );
}

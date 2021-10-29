import React from "react";
import "../static/css/style.css";

export default function Initiative(props) {
  return (
    <div className="col-lg-6">
      <div
        className="card mx-auto"
        style={{ marginBottom: "20px", height: "720px", maxWidth: "500px" }}
      >
        <img
          className="card-img-top"
          src={props.photo}
          alt="Card image cap"
          style={{ maxHeight: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text" style={{ textAlign: "justify" }}>
            {props.body}
          </p>
          <p className="card-text">
            {props.date}
            <small className="text-muted" />
          </p>

          {props.github && (
            <a
              className="card-text btn btn-dark text-light"
              href={props.github}
              role="button"
              target="_blank"
            >
              View on GitHub &nbsp;
              <i className="fab fa-github fa-1x"> </i>
            </a>
          )}

          {props.youtube && (
            <a
              className="card-text btn btn-dark text-light"
              href={props.youtube}
              role="button"
              target="_blank"
            >
              View on YouTube &nbsp;
              <i className="fab fa-youtube fa-1x"> </i>
            </a>
          )}

          {props.kaggle && (
            <a
              className="card-text btn btn-dark text-light"
              href="https://www.kaggle.com/c/kjsce-hack-d-covid20-track1"
              role="button"
              target="_blank"
            >
              View on Kaggle &nbsp;
              <i className="fab fa-kaggle fa-1x"> </i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

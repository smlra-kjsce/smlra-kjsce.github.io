import React from "react";

export default function MemberProfile(props) {
  return (
    <div
      className={props.coltype || "col-md-4"}
      style={{ textAlign: "center", marginBottom: "5%" }}
    >
      <img
        src={props.photo}
        className="mx-auto rounded-circle"
        style={{ width: "13rem", height: "13rem" }}
      />
      <h5 style={{ marginTop: "2%" }}>
        <b>{props.name}</b>
      </h5>
      {props.university && (
        <a href={props.university} target="_blank">
          <i className="fas fa-university fa-2x" style={{ color: "#330066" }} />
          &nbsp; &nbsp;
        </a>
      )}
      {props.github && (
        <a href={props.github} target="_blank">
          <i
            className="fab fa-github fa-2x"
            style={{ color: "#330066" }}
          />
          &nbsp; &nbsp;
        </a>
      )}
      {props.instagram && (
        <a href={props.instagram} target="_blank">
          <i className="fab fa-instagram fa-2x" style={{ color: "#330066" }} />
          &nbsp; &nbsp;
        </a>
      )}
      {props.linkedin && (
        <a href={props.linkedin} target="_blank">
          <i className="fab fa-linkedin fa-2x" style={{ color: "#330066" }} />
        </a>
      )}
    </div>
  );
}

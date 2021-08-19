import React from "react";

export default function Header(props) {
  return (
    <div className="row" style={{ margin: "10%", marginBottom: 0 }}>
      <div className="col-lg-6">
        <img
          src={props.photo}
          alt="blog"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="col-lg-6" style={{ padding: "7%", textAlign: "center" }}>
        <p style={{ paddingTop: "1%", fontSize: "xx-large" }}>{props.title}</p>
        {/* <hr style="background-color: black; width: 50%;"> */}
        <p style={{ fontSize: "large" }} className="ill-text-b">
          {props.body}
        </p>
        <p />
      </div>
    </div>
  );
}

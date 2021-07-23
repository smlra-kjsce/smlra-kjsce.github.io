import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import "../static/css/style.css";
import blog from "../static/Images/blog.svg";
import blog1 from "../static/Images/blog1_img.PNG";
import blog2 from "../static/Images/blog2_img.PNG";
import blog3 from "../static/Images/blog3_img.PNG";
import blog4 from "../static/Images/blog4_img.PNG";
import blog5 from "../static/Images/blog5_img.PNG";
import blog6 from "../static/Images/blog6_img.PNG";

export default function Blogs() {
  return (
    <div className="fonts">
      <Navbar />
      <div className="row" style={{ margin: "10%", marginBottom: 0 }}>
        <div className="col">
          <img
            src={blog}
            alt="blog"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col" style={{ padding: "7%", textAlign: "center" }}>
          <p style={{ paddingTop: "1%", fontSize: "xx-large" }}>BLOGS</p>
          {/* <hr style="background-color: black; width: 50%;"> */}
          <p style={{ fontSize: "large" }} className="ill-text-b">
            “Don’t focus on having a great blog. Focus on producing a blog
            that’s great for your readers.”
          </p>
          <p />
        </div>
      </div>
      <div className="blg" style={{ marginTop: "10%" }}>
        <h2 className="text-center" style={{ marginBottom: "4%" }}>
          BLOGS BY SMLRA
        </h2>
        <div
          className="card-deck "
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <Blog
            title="The Secrets of SVMs"
            body="This article is continuation of 2nd part in “ML-DL-101” series
                  - “Supporting SVMs (Support Vector Machines)”. You want to
                  give it a read before going through this one. In this 4th
                  blog, we will dive deeper into the intricacies of SVMs and
                  their working.It is one of the most widely used algorithms
                  today every ML Engineer should have it in it’s toolbox of ML
                  algorithms. You will also get to know about Quadratic
                  Programming which is widely used in solving optimization
                  problems. Without further ado, let’s get started in this
                  amazing journey to understand SVM's and explore it to the
                  fullest. Let's begin this journey."
            link="https://smlra-kjsce.medium.com/vectorized-view-of-svms-6a85dae8ca72"
            date="30th April 2020"
            photo={blog4}
          ></Blog>
          <Blog></Blog>
        </div>
        <div
          className="card-deck "
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <div
            className="card shadow c1"
            style={{ borderWidth: "0px", width: "27rem", marginBottom: "5%" }}
          >
            <a href="https://smlra-kjsce.medium.com/vectorized-view-of-svms-6a85dae8ca72">
              <img className="card-img-top" src={blog4} alt="blog" />
              <div className="card-body text-dark">
                <h5 className="card-title">The Secrets of SVMs </h5>
                <p className="card-text">
                  This article is continuation of 2nd part in “ML-DL-101” series
                  - “Supporting SVMs (Support Vector Machines)”. You want to
                  give it a read before going through this one. In this 4th
                  blog, we will dive deeper into the intricacies of SVMs and
                  their working.It is one of the most widely used algorithms
                  today every ML Engineer should have it in it’s toolbox of ML
                  algorithms. You will also get to know about Quadratic
                  Programming which is widely used in solving optimization
                  problems. Without further ado, let’s get started in this
                  amazing journey to understand SVM's and explore it to the
                  fullest. Let's begin this journey.{" "}
                </p>
                <p className="card-text">
                  <small className="text-muted">30th April 2020</small>
                </p>
              </div>
            </a>
          </div>
          <div
            className="card shadow c1"
            style={{
              height: "max-content",
              borderWidth: "0px",
              width: "27rem",
              marginBottom: "5%",
            }}
          >
            <a href="https://smlra-kjsce.medium.com/back-to-basics-with-linear-regression-78dd7106f7bd">
              <img className="card-img-top" src={blog3} alt="blog" />
              <div className="card-body text-dark">
                <h5 className="card-title">
                  Back to Basics with Linear Regression
                </h5>
                <p className="card-text">
                  In this 3rd article of the “ML-DL-101” series we introduce you
                  to the most basic and simple yet powerful machine learning
                  algorithm that almost every newbie to ML starts off with -
                  “Linear Regression”. We will cover linear regression with one
                  variable and also show how linear regression can be extended
                  to accommodate multiple input variables, namely “Multivariate
                  Linear Regression”. Let’s Begin.
                </p>
                <p className="card-text">
                  <small className="text-muted">25th March 2020</small>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className="card-deck"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <div
            className="card shadow c1"
            style={{
              height: "max-content",
              borderWidth: "0px",
              width: "27rem",
              marginBottom: "5%",
            }}
          >
            <a href="https://smlra-kjsce.medium.com/supporting-svms-support-vector-machines-bf5bfba88a0b">
              <img className="card-img-top" src={blog2} alt="blog" />
              <div className="card-body text-dark">
                <h5 className="card-title">
                  Supporting SVMs (Support Vector Machines)
                </h5>
                <p className="card-text">
                  Welcome back to the 2nd part of “ML-DL-101” series. In this
                  article we will uncover the details of one of the most
                  powerful “black-box” learning algorithm - “Support Vector
                  Machines”. It is one of the most widely used algorithms today
                  and every ML Engineer should have it in it’s toolbox. But
                  before getting started, make sure you have a fine grasp of
                  these 2 ML models - Linear and Logistic Regression.
                </p>
                <p className="card-text ">
                  <small className="text-muted">20th March 2020</small>
                </p>
              </div>
            </a>
          </div>
          <div
            className="card shadow c1"
            style={{ borderWidth: "0px", width: "27rem", marginBottom: "5%" }}
          >
            <a href="https://smlra-kjsce.medium.com/understanding-decision-trees-8a3a78494836">
              <img className="card-img-top" src={blog1} alt="blog" />
              <div className="card-body text-dark">
                <h5 className="card-title">Understanding Decision Trees</h5>
                <p className="card-text">
                  In this first article of “ML-DL-101” series we introduce you
                  to one of most common and easy to use/interpret machine
                  learning algorithm called “Decision Trees”. We will look under
                  the hood and understand it’s working and gain insight on the
                  math involved . We will also touch upon “Random Forests” which
                  will involve creating a forest of multiple decision trees. So,
                  let’s get started.
                </p>
                <p className="card-text">
                  <small className="text-muted">10th Feb 2020</small>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className="card-deck "
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <div
            className="card shadow c1"
            style={{
              height: "max-content",
              borderWidth: "0px",
              width: "27rem",
              marginBottom: "5%",
            }}
          >
            <a href="https://smlra-kjsce.medium.com/whats-the-res-in-resnet-part-ii-96612490cb8e">
              <img className="card-img-top" src={blog6} alt="blog" />
              <div className="card-body text-dark">
                <h5 className="card-title">
                  What’s the “Res” in “ResNet”? [Part II]
                </h5>
                <p className="card-text">
                  Welcome back to the 2nd and last part of the blog - What’s the
                  “Res” in “ResNet”? In this blog we will mainly talk about how
                  the issue of degradation is addressed by ResNet and how
                  Residual Learning eases the training of deep networks which
                  are easier to optimize and can gain accuracy from considerably
                  increased depth.
                </p>
                <p className="card-text">
                  <small className="text-muted">16th December 2019</small>
                </p>
              </div>
            </a>
          </div>
          <div
            className="card shadow c1"
            style={{ borderWidth: "0px", width: "27rem", marginBottom: "5%" }}
          >
            <a href="https://smlra-kjsce.medium.com/whats-the-res-in-resnet-part-i-389116531796">
              <img className="card-img-top" src={blog5} alt="blog" />
              <div className="card-body text-dark">
                <h5 className="card-title">
                  What’s the “Res” in “ResNet”? [Part I]
                </h5>
                <p className="card-text">
                  This blog talks about ResNet - A Deep Residual learning
                  framework inspired from the research paper: “Deep Residual
                  Learning for Image Recognition”. In this 1st Part, you will
                  get to know about ResNet’s success story and the “Degradation
                  problem” - A common issue when dealing with deep neural
                  networks having hundreds of layers. Do give a brief read to
                  the research paper before you begin.
                </p>
                <p className="card-text">
                  <small className="text-muted">6th September 2019</small>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

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
          <Blog
            title="Back to Basics with Linear Regression"
            body="In this 3rd article of the “ML-DL-101” series we introduce you
            to the most basic and simple yet powerful machine learning
            algorithm that almost every newbie to ML starts off with -
            “Linear Regression”. We will cover linear regression with one
            variable and also show how linear regression can be extended
            to accommodate multiple input variables, namely “Multivariate
            Linear Regression”. Let’s Begin."
            link="https://smlra-kjsce.medium.com/back-to-basics-with-linear-regression-78dd7106f7bd"
            date="25th March 2020"
            photo={blog3}
          ></Blog>
        </div>
        <div
          className="card-deck "
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <Blog
            title="Supporting SVMs (Support Vector Machines)"
            body="Welcome back to the 2nd part of “ML-DL-101” series. In this
            article we will uncover the details of one of the most
            powerful “black-box” learning algorithm - “Support Vector
            Machines”. It is one of the most widely used algorithms today
            and every ML Engineer should have it in it’s toolbox. But
            before getting started, make sure you have a fine grasp of
            these 2 ML models - Linear and Logistic Regression."
            link="https://smlra-kjsce.medium.com/supporting-svms-support-vector-machines-bf5bfba88a0b"
            date="20th March 2020"
            photo={blog2}
          ></Blog>
          <Blog
            title="Understanding Decision Trees"
            body="In this first article of “ML-DL-101” series we introduce you
            to one of most common and easy to use/interpret machine
            learning algorithm called “Decision Trees”. We will look under
            the hood and understand it’s working and gain insight on the
            math involved . We will also touch upon “Random Forests” which
            will involve creating a forest of multiple decision trees. So,
            let’s get started."
            link="https://smlra-kjsce.medium.com/understanding-decision-trees-8a3a78494836"
            date="10th Feb 2020"
            photo={blog1}
          ></Blog>
        </div>
        <div
          className="card-deck "
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <Blog
            title="What’s the “Res” in “ResNet”? [Part II]"
            body="Welcome back to the 2nd and last part of the blog - What’s the
            “Res” in “ResNet”? In this blog we will mainly talk about how
            the issue of degradation is addressed by ResNet and how
            Residual Learning eases the training of deep networks which
            are easier to optimize and can gain accuracy from considerably
            increased depth."
            link="https://smlra-kjsce.medium.com/whats-the-res-in-resnet-part-ii-96612490cb8e"
            date="16th December 2019"
            photo={blog6}
          ></Blog>
          <Blog
            title="What’s the “Res” in “ResNet”? [Part I]"
            body="This blog talks about ResNet - A Deep Residual learning
            framework inspired from the research paper: “Deep Residual
            Learning for Image Recognition”. In this 1st Part, you will
            get to know about ResNet’s success story and the “Degradation
            problem” - A common issue when dealing with deep neural
            networks having hundreds of layers. Do give a brief read to
            the research paper before you begin."
            link="https://smlra-kjsce.medium.com/whats-the-res-in-resnet-part-i-389116531796"
            date="6th September 2019"
            photo={blog5}
          ></Blog>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Resource from "../components/Resource";

import "../static/css/style.css";
import teach from "../static/Images/resources.svg";

export default function Resources() {
  return (
    <div className="fonts">
      <Navbar />
      <div className="row" style={{ margin: "10%", marginBottom: 0 }}>
        <div className="col">
          <img
            src={teach}
            alt="blog"
            style={{ width: "100%" }}
            className="ini-img"
          />
        </div>
        <div className="col" style={{ padding: "7%", textAlign: "center" }}>
          <p style={{ paddingTop: "1%", fontSize: "xx-large" }}>RESOURCES</p>
          {/* <hr style="background-color: black; width: 50%;"> */}
          <p style={{ fontSize: "large" }} className="ill-text-ini">
            The quotidian question that we always encounter is: Where do I start in ML?
            Therefore, we have collected some resources that are periodically updated from time-to-time
            to cover a variety of aspects of ML including blogs and people to follow, courses to take and 
            papers to read!
          </p>
          <p />
        </div>
      </div>
      <div id="Skills" style={{ paddingTop: "5px", marginBottom: "3%" }}>
        <div className=" p-5  container">
          <h2 className="display-4 pb-5 text-center ini-us">LIST OF RESOURCES</h2>
          <ul
            className="nav nav-tabs nav-fill bg-dark rounded"
            id="myTab"
            role="tablist"
            style={{ marginBottom: "5%" }}
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="tutorials-tab"
                data-toggle="tab"
                href="#tutorials"
                role="tab"
                aria-controls="tutorials"
                aria-selected="true"
              >
                Tutorials | Courses | Playlist
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="people-tab"
                data-toggle="tab"
                href="#people"
                role="tab"
                aria-controls="people"
                aria-selected="false"
              >
                Blogs | People To Follow
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="libraries-tab"
                data-toggle="tab"
                href="#libraries"
                role="tab"
                aria-controls="libraries"
                aria-selected="false"
              >
                Cool Libraries | Websites
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="papers-tab"
                data-toggle="tab"
                href="#papers"
                role="tab"
                aria-controls="papers"
                aria-selected="false"
              >
                Research Papers to Read
              </a>
            </li>
          </ul>

          {/* Tutorials | Courses | Playlist */}
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tutorials"
              role="tabpanel"
              aria-labelledby="tutorials-tab"
            >
              <Resource
                title="Machine Learning on Coursera"
                link="https://www.coursera.org/learn/machine-learning"
                detail=" by Andrew Ng, Stanford University"
              ></Resource>

              <Resource
                title="Deep Learning Specialization"
                link="https://www.coursera.org/specializations/deep-learning"
                detail=" by deeplearning.ai on Coursera"
              ></Resource>

              <Resource
                title="Natural Language Processing Specialization"
                link="https://www.coursera.org/specializations/natural-language-processing"
                detail=" by deeplearning.ai on Coursera"
              ></Resource>

              <Resource
                title="Generative Adversarial Networks (GANs) Specialization"
                link="https://www.coursera.org/specializations/generative-adversarial-networks-gans"
                detail=" by deeplearning.ai on Coursera"
              ></Resource>

              <Resource
                title="Machine Learning Engineering for Production (MLOps) Specialization"
                link="https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops"
                detail=" by deeplearning.ai on Coursera"
              ></Resource>
              <Resource
                title="AI for Medicine Specialization"
                link="https://www.coursera.org/specializations/ai-for-medicine"
                detail=" by deeplearning.ai on Coursera"
              ></Resource>
            </div>

            {/* Blogs | People to Follow */}
            <div
              className="tab-pane fade"
              id="people"
              role="tabpanel"
              aria-labelledby="people-tab"
            >
              <Resource
                title="Jeremy Jordan's blog"
                link="https://jeremyjordan.me"
                detail=" - ML Engineer at Duo Security"
              ></Resource>

              <Resource
                title="Lilian Weng's Lil'Log"
                link="https://lilianweng.github.io/lil-log/"
                detail=" - Applied AI Researcher at OpenAI"
              ></Resource>

              <Resource
                title="elvis on Twitter"
                link="https://twitter.com/omarsar0"
                detail=" - shares new resources / papers / tips on Twitter daily"
              ></Resource>

              <Resource
                title="Santiago on Twitter"
                link="https://twitter.com/svpino"
                detail=" - shares ML threads / advice / interesting problems  on Twitter daily"
              ></Resource>

              <Resource
                title="Illustrated Guide to LSTMs and GRUs: A step by step explanation"
                link="https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21"
                detail=" by Michael Phi on Towards Data Science"
              ></Resource>
            </div>

            {/* Cool Libraries | Websites */}
            <div
              className="tab-pane fade"
              id="libraries"
              role="tabpanel"
              aria-labelledby="libraries-tab"
            >
              <Resource
                title="Weights and Biases"
                link="https://wandb.ai"
                detail=" - allows us to monitor our training in real-time, in Pytorch, TF, Keras, etc."
              ></Resource>
              
              <Resource
              title="Hugging Face"
              link="https://huggingface.co"
              detail=" - build, train and deploy state-of-the-art models powered by the reference open-source in NLP."
            ></Resource>
            
            <Resource
            title="Made With ML"
            link="https://madewithml.com"
            detail=" - learn basics of ML and MLOps through intuitive explanations and clean code to deliver quality-grade product."
          ></Resource>
            </div>

            {/* Research Papers to Read */}
            <div
              className="tab-pane fade"
              id="papers"
              role="tabpanel"
              aria-labelledby="papers-tab"
            >
              <Resource
                title="MLP-Mixer: An all-MLP Architecture for Vision"
                link="https://arxiv.org/pdf/2105.01601.pdf"
                detail=" by Tolstikhin et al. of Google Brain, 2021"
              ></Resource>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

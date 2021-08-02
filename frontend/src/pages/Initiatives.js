import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Initiative from "../components/Initiative";
import "../static/css/style.css";
import pic from "../static/Images/pic.png";

import meme from "../static/Images/Events/meme.png";
import teach from "../static/Images/teach.svg";
import hackdcovid from "../static/Images/Events/hack-d-covid.jpeg";
import pytorch from "../static/Images/Events/pytorch.jpeg";
import ML101 from "../static/Images/Events/ML101.PNG";
import pieandai from "../static/Images/Events/pie-and-ai-1.jpeg";
import NLP101 from "../static/Images/Events/NLP-101.jpg";

export default function Initiatives() {
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
          <p style={{ paddingTop: "1%", fontSize: "xx-large" }}>INITIATIVES</p>
          {/* <hr style="background-color: black; width: 50%;"> */}
          <p style={{ fontSize: "large" }} className="ill-text-ini">
            SMLRA has conducted various student-led symposiums, workshops,
            seminars, research paper reading groups and industrial presentation
            since its inception back in 2018. Here's a glimpse of the events we
            have conducted so far!
          </p>
          <p />
        </div>
      </div>
      <div id="Skills" style={{ paddingTop: "5px", marginBottom: "3%" }}>
        <div className=" p-5  container">
          <h2 className="display-4 pb-5 text-center ini-us">
            INITIATIVES BY US
          </h2>
          <ul
            className="nav nav-tabs nav-fill bg-dark rounded"
            id="myTab"
            role="tablist"
            style={{ marginBottom: "5%" }}
          >
            <li className="nav-item">
              <a
                className="nav-link"
                id="skills-2021-tab"
                data-toggle="tab"
                href="#skills-2021"
                role="tab"
                aria-controls="skills-2021"
                aria-selected="false"
              >
                2021-22
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                id="skills-2020-tab"
                data-toggle="tab"
                href="#skills-2020"
                role="tab"
                aria-controls="skills-2020"
                aria-selected="true"
              >
                2020-21
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="skills-2019-tab"
                data-toggle="tab"
                href="#skills-2019"
                role="tab"
                aria-controls="skills-2019"
                aria-selected="false"
              >
                2019-20
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="skills-2018-tab"
                data-toggle="tab"
                href="#skills-2018"
                role="tab"
                aria-controls="skills-2018"
                aria-selected="false"
              >
                2018-19
              </a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            {/* <div
              className="tab-pane fade"
              id="skills-2021"
              role="tabpanel"
              aria-labelledby="skills-2021-tab"
            >
              <div className="card-deck">
                <Initiative />
                <Initiative />
              </div>
              <br />
              <div className="card-deck">
                <Initiative />
              </div>
            </div> */}
            <div
              className="tab-pane fade show active"
              id="skills-2020"
              role="tabpanel"
              aria-labelledby="skills-2020-tab"
            >
              <div className="card-deck">
                <Initiative
                  title="PyTorch-101: Introduction to PyTorch"
                  body="SMLRA conducted a hands-on workshop on PyTorch, a
                      rapidly-growing deep learning framework by Facebook AI
                      Research (FAIR) lab. PyTorch owes its popularity to its
                      Pythonic nature of coding and its latest mobile support,
                      which makes it a stiff competitor to TensorFlow. We taught
                      about tensor basics and operations, linear and logistic
                      regression, AutoGrad, neural networks and TensorBoard
                      usage in PyTorch. The event was concluded with a doubt
                      clearing session."
                  photo={pytorch}
                  date="1st March, 2021"
                  github="https://github.com/smlra-kjsce/PyTorch-101"
                  youtube="https://www.youtube.com/watch?v=RXLH7B6CcIM"
                ></Initiative>
                <Initiative
                  title="Paper Reading and Implementation of “Dank Learning:
                  Generating Memes using Deep Neural Networks”"
                  body="SMLRA conducted Research Paper Reading and Implementation
                  Session on “Dank Learning: Generating Memes using Deep Neural Networks”
                  , where the authors present novel techniques to generate
                  memes using LSTMs, Inception model, and Attention
                  Mechanism. We discussed the important concepts of the
                  paper and finally went on to demonstrate our
                  implementation of the paper in PyTorch."
                  photo={meme}
                  date="30th January, 2021"
                  youtube="https://youtu.be/cWVyb2JBWgk"
                ></Initiative>
              </div>
              <br />
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={hackdcovid}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hack-D-Covid</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Hack-D-Covid was a two-track competition hosted on Kaggle:
                      the first track dealt with working with the X-Ray dataset
                      to detect Covid-19 and the other track was an open-ended
                      hackathon, with CORD-19 dataset.
                    </p>
                    <p className="card-text">
                      23rd-24th October, 2020
                      <small className="text-muted" />
                    </p>
                    <a
                      className="card-text btn btn-dark text-light"
                      href="https://www.kaggle.com/c/kjsce-hack-d-covid20-track1"
                      role="button"
                      target="_blank"
                    >
                      View on Kaggle &nbsp;
                      <i className="fab fa-kaggle fa-1x"> </i>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={ML101}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">ML-101</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      In our first online student-led symposium on Microsoft
                      Teams, an introduction to Machine Learning Algorithms like
                      Linear Regression, Logistic Regression, Naive Bayes
                      Algorithm, SVMs, Decision Trees and Neural Networks was
                      given. Both mathemetical explanation and logical intuition
                      was provided for every algorithm with proper visualization
                      and implementation and relevant examples.
                    </p>
                    <p className="card-text">
                      15th-16th August, 2020
                      <small className="text-muted" />
                    </p>
                    <a
                      className="card-text btn btn-dark text-light"
                      href="https://github.com/smlra-kjsce/ML-101"
                      role="button"
                      target="_blank"
                    >
                      View on GitHub &nbsp;
                      <i className="fab fa-github fa-1x"> </i>
                    </a>
                    <a
                      className="card-text btn btn-dark text-light"
                      href="https://www.youtube.com/playlist?list=PLNyf6p4HkSL9bMZlD8x9P1KC_rxmVW3zg"
                      role="button"
                      target="_blank"
                    >
                      View on YouTube &nbsp;
                      <i className="fab fa-youtube fa-1x"> </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="skills-2019"
              role="tabpanel"
              aria-labelledby="skills-2019-tab"
            >
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={pieandai}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Pie &amp; AI - Navi Mumbai: The Past &amp; Future of AI
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      SMLRA's first "Pie &amp; AI session" in collaboration with
                      deeplearning.ai with guest speaker{" "}
                      <a
                        href="https://www.linkedin.com/in/s-dsouza/?originalSubdomain=in"
                        target="_blank"
                      >
                        Mr. Shaun D'Souza
                      </a>
                      .
                    </p>
                    <p className="card-text">
                      6th June, 2020
                      <small className="text-muted" />
                    </p>
                    <a
                      className=" card-text btn btn-dark text-light"
                      href="https://www.youtube.com/watch?v=QPPc8V-Zg4w"
                      role="button"
                      target="_blank"
                    >
                      View on YouTube &nbsp;
                      <i className="fab fa-youtube fa-1x"> </i>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={NLP101}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Deep Learning in NLP-101</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      In this student-led symposium, an introduction to
                      word2vec, GloVe, RNNs, LSTMs, and ULMFiT was given.
                    </p>
                    <p className="card-text">
                      7th March, 2020
                      <small className="text-muted" />
                    </p>
                    <a
                      className="btn btn-dark card-text text-light"
                      href="https://github.com/smlra-kjsce/DL-in-NLP-101"
                      role="button"
                      target="_blank"
                    >
                      View on GitHub &nbsp;
                      <i className="fab fa-github fa-1x"> </i>
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/ML-Cyber.jpeg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Industry Session on “Machine Learning in Cybersecurity”
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      This industrial session was held by SMLRA for Network
                      Intelligence (NIIC), Mumbai. In this session, we presented
                      the applications of Machine Learning in the Cybersecurity
                      field to help the company tackle their daily challenges in
                      a more automated fashion.
                    </p>
                    <p className="card-text">
                      11th December, 2019
                      <small className="text-muted" />
                    </p>
                    <a
                      className=" card-text btn btn-dark text-light"
                      href="https://github.com/smlra-kjsce/Cyber-ML-DL-101"
                      role="button"
                      target="_blank"
                    >
                      View on GitHub &nbsp;
                      <i className="fab fa-github fa-1x"> </i>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/GANs.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Introduction to Generative Architectures: GANs and VAEs
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      In this session, we explored Game Theory, Generative
                      Models and explored GANs and VAEs. The audience was later
                      shown a demonstration of using WGANs for generating their
                      own fake Pokémons!
                    </p>
                    <p className="card-text">
                      3rd-4th October, 2019
                      <small className="text-muted" />
                    </p>
                    <a
                      className=" card-text btn btn-dark text-light"
                      href="https://github.com/smlra-kjsce/Introduction-to-VAEs-and-GANs"
                      role="button"
                      target="_blank"
                    >
                      View on GitHub &nbsp;
                      <i className="fab fa-github fa-1x"> </i>
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/mldl101.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">ML-DL-101</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Introduction to Machine Learning and Deep Learning through
                      algorithms like linear regression, logistic regression,
                      SVMs, Decision Trees, Neural Networks, CNNs and FGSM
                      Attack!
                    </p>
                    <p className="card-text">
                      7th September, 2019
                      <small className="text-muted" />
                    </p>
                    <a
                      className=" card-text btn btn-dark text-light"
                      href="https://github.com/smlra-kjsce/ML-101"
                      role="button"
                      target="_blank"
                    >
                      View on GitHub &nbsp;
                      <i className="fab fa-github fa-1x"> </i>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/resnet.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "justify" }}>
                      Research Paper Analysis of ResNet: Deep Residual Learning
                      for Image Recognition
                    </h5>
                    <p className="card-text">
                      In this paper reading session, we explored the ResNet
                      research paper and saw the marvelous concept of Residual
                      Learning that revolutionized the Computer Vision sector.
                    </p>
                    <p className="card-text">
                      3rd and 9th August, 2019
                      <small className="text-muted" />
                    </p>
                    {/* <a class=" card-text btn btn-dark text-light href="#" role="button">View on GitHub</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="skills-2018"
              role="tabpanel"
              aria-labelledby="skills-2018-tab"
            >
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/rnn.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Implementation of Recurrent Neural Networks
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      The speaker for this session was{" "}
                      <a
                        href="https://www.cse.iitb.ac.in/~kevin.patel/"
                        target="_blank"
                      >
                        Mr. Kevin Patel
                      </a>
                      , a Ph.D. scholar from IIT Bombay, working in Center for
                      Indian Language Technology (CFILT), IIT Bombay, one of the
                      finest research labs for NLP in India. Mr. Patel discussed
                      PyTorch, a deep learning framework by Facebook, and why it
                      is so research-friendly. The concept of Recurrent Neural
                      Networks (RNNs) was explained in detail with practical
                      demonstration.{" "}
                    </p>
                    <p className="card-text">
                      7th April, 2019
                      <small className="text-muted" />
                    </p>
                    {/* <a class=" card-text btn btn-dark text-light href="#" role="button">View on GitHub</a> */}
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/nlp.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Speaker session on “Introduction to Natural Language
                      Processing”
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      The speaker for our third spekaer session was{" "}
                      <a
                        href="https://www.cse.iitb.ac.in/~kevin.patel/"
                        target="_blank"
                      >
                        Mr. Kevin Patel
                      </a>
                      , a Ph.D. scholar from IIT Bombay, working in Center for
                      Indian Language Technology (CFILT), IIT Bombay, one of the
                      finest research labs for NLP in India. Mr. Patel covered
                      various details pertaining to natural language processing
                      from sentiment analysis to text summarisation and
                      chatbots. Topics like geographic profiling, SkipGram
                      model, greedy unsupervised pre-training, and model
                      explainability were also covered.{" "}
                    </p>
                    <p className="card-text">
                      26th February, 2019
                      <small className="text-muted" />
                    </p>
                    {/* <a class=" card-text btn btn-dark text-light href="#" role="button">View on GitHub</a> */}
                  </div>
                </div>
              </div>
              <br />
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/rishabh.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Research paper demonstration on “3D Human Pose Estimation
                      Using Videos”
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      The speaker for the second SMLRA speaker session was{" "}
                      <a
                        href="https://www.cse.iitb.ac.in/~rdabral/"
                        target="_blank"
                      >
                        Mr. Rishabh Dabral
                      </a>
                      , a Ph.D. scholar from IIT Bombay. Mr. Dabral presented
                      his research paper that mentions a novel technique for 3D
                      human pose estimation, which was selected for the European
                      Conference on Computer Vision (ECCV 2018).{" "}
                    </p>
                    <p className="card-text">
                      20th October, 2018
                      <small className="text-muted" />
                    </p>
                    {/* <a class=" card-text btn btn-dark text-light href="#" role="button">View on GitHub</a> */}
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./Images/Events/alexnet.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Seminar on “AlexNet: Introduction to CNN”
                    </h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      {" "}
                      The first SMLRA speaker session. The speaker for this
                      session was{" "}
                      <a
                        href="https://deepai.org/profile/rohan-mahadev"
                        target="_blank"
                      >
                        Mr. Rohan Mahadev
                      </a>{" "}
                      from AiToeLabs, Mumbai with its headquarters in Seattle,
                      USA. The speaker went through the research paper along
                      with its implementation, explained rudimentary concepts
                      and helped developed foundation for the understanding of
                      the AlexNet architecture and its application in Computer
                      Vision. Detailed analysis of the AlexNet paper with
                      implementation details was performed.
                    </p>
                    <p className="card-text">
                      22nd September, 2018
                      <small className="text-muted" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

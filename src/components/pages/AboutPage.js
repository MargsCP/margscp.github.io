import React from "react";
import aboutMePageImage from "../../images/about-me-image-2.jpeg";
import outdoorImage from "../../images/outdoor-img.jpg";

export default function AboutPage() {
  return (
    <div className="wrapper">
      <div className="row pt-4 px-3">

        {/* About Me Page Upper Image */}
        <div className="col-lg-6 mb-5 mt-5">
          <img
            id="about-me-img"
            src={aboutMePageImage}
            alt="Margie Clarke"
            height="450"
            width="100%"
            className="mx-auto"
            style={{ objectFit: "cover" }}
          ></img>
        </div>

        {/* About Me Page Upper Text */}
        <div className="col-lg-6 about-me-col">
          <div className="about-me-bio">
            <h2 className="mb-3 text-secondary">Margie Clarke</h2>
            <h5 className="text-secondary">
              Practicing 10+ years <i className="bi bi-dot"></i> BSc
              Physiotherapy (UCT) <i className="bi bi-dot"></i> 1086235
            </h5>
            <div className="fs-6 fw-medium">
              I'm Margie Clarke (BSc Physiotherapy (UCT) ), the proud owner of
              Clarke Physiotherapy, with over a decade of expertise and a
              passion for holistic healing. <br></br>
              <br></br> As a dedicated physiotherapist, I thrive on
              problem-solving and having a deep understanding of each patient's
              unique journey. I believe that everyone's healing journey is a
              personalized process and may not be linear. I aim to educate and
              guide you through your healing and rehabilitation process with
              empathy and compassion.<br></br>
              <br></br> I believe in looking at the body as a whole,
              understanding that everything is connected and influences how we
              feel and move. My goal is to empower individuals, helping them
              live their best life and enjoy activities they love. By
              considering the body's interconnectedness, I aim to improve
              overall function and promote a sense of well-being.<br></br>
              <br></br>
              Beyond the walls of the practice, you'll often find me enjoying
              the perks of Cape Town, whether it's exploring scenic hiking
              trails, swinging a racket on the tennis court, or engaging in a
              game of padel. Moreover, my passions extend beyond physical
              activities – I am an enthusiastic food and travel lover, finding
              immense joy in discovering new culinary experiences and exploring
              different cultures.<br></br>
              <br></br>
            </div>
          </div>
        </div>
        <div className="row ms-1"></div>
      </div>

      <div className="row">

        {/* About Me Page Lower Text */}
        <div className="col-lg-5 about-me-2-col">
          <div className="fs-6 fw-medium">
            At Clarke Physiotherapy, expect exceptional care, customized
            treatment plans, and a welcoming environment. Together, we'll embark
            on a healing journey that combines clinical expertise with your
            overall well-being. Collaboration and communication are important in
            my management. I work closely with patients and other practitioners
            to ensure a comprehensive and integrated approach to treatment.
            <br></br>
            <br></br>
            Some of my special interests include, but are not limited to:
            <br></br>
            <ul>
              <li>Pre and post-operative rehabilitation</li>
              <li>
                Orthopedic and Musculoskeletal conditions or injuries,
                specifically foot, ankle or knees
              </li>
              <li>Lower back pain</li>
              <li>Injury prevention</li>
            </ul>
          </div>
        </div>

        {/* About Me Page Lower Image */}
        <div className="col-lg-5 col-img">
          <img
            src={outdoorImage}
            alt="#"
            height="450"
            width="100%"
            className="outdoorImg mb-3"
          ></img>
        </div>
      </div>
    </div>
  );
}

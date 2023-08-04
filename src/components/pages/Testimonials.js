import React from "react";
import testimonialEx1 from "../../images/testimonial-profiles/testimonial-ex-1.jpg";
import testimonialEx2 from "../../images/testimonial-profiles/testimonial-ex-2.jpg";
import testimonialEx3 from "../../images/testimonial-profiles/testimonial-ex-3.jpg";

export default function Testimonials() {
  return (
    // Code for Testimonial Carousel on Bottom of Page
    <div className="carousel-holder row">
      <div className="carousel-title h1">
        Hear from recent patients
        <hr className="testimonial-hr mx-auto"></hr>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-dark testimonial-carousel mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators mb-4">
          {/* Indicator Button #1 */}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          {/* Indicator Button #2 */}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          {/* Indicator Button #3 */}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Code for Autoscrolling Carousel; Autoscrolls every 10 seconds */}
        <div className="carousel-inner text-center">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-text text-center mx-auto fs-4 fw-medium text-black-50">
              <i className="bi bi-quote me-1 fs-2"></i>
              Such an amazing 6 weeks, highly recommend the program to anyone
              interested in traveling abroad while also developing multiple hard
              and soft skills that will really make you stand out to recruiters.
              So happy I chose to apply!
            </div>
            <div className="mt-3">
              {/* Testimonial Profile Image */}
              <img
                src={testimonialEx1}
                alt="review"
                className="testimonial-profile"
              ></img>
            </div>
            {/* Testimonial Profile Name */}
            <div className="fs-4 mt-3">Cristiano Ronaldo</div>
            <div className="fs-3 testimonial-rating">
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="10000">
            <div className="carousel-text text-center mx-auto fs-4 fw-medium text-black-50">
              <i className="bi bi-quote me-1 fs-2"></i>iXperience was the best
              summer I've had. Not only was it tremendous being taught a
              management consulting course by industry professionals, completing
              an internship with Portugal's largest sports broadcasting company,
              or exploring a new city, but it was the future-thinking and
              amazing people on the program that made iXperience the best.
            </div>
            <div className="mt-3">
              {/* Testimonial Profile Image */}
              <img
                src={testimonialEx2}
                alt="review"
                className="testimonial-profile"
              ></img>
            </div>
            {/* Testimonial Profile Name */}
            <div className="fs-4 mt-3">Michael Jordan</div>
            <div className="fs-3 testimonial-rating">
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="10000">
            <div className="carousel-text text-center mx-auto fs-4 fw-medium text-black-50">
              <i className="bi bi-quote me-1 fs-2"></i>From genuinely loving and
              enthusiastic instructors to incredibly supportive teaching
              assistants and staff, my experience with iXperience was amazing. I
              learnt so much about Management Consulting and had an internship
              with an edge computing company. This was the catalyst in helping
              me secure a position at Deloitte for this upcoming January. I
              highly recommend iX to everyone who wants to reach their limitless
              potential.
            </div>
            <div className="mt-3">
              {/* Testimonial Profile Image */}
              <img
                src={testimonialEx3}
                alt="review"
                className="testimonial-profile"
              ></img>
            </div>
            {/* Testimonial Profile Name */}
            <div className="fs-4 mt-3">Lionel Messi</div>
            <div className="fs-3 testimonial-rating">
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
              <i className="bi bi-star-fill me-1"></i>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

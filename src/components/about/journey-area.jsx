import React, { useState, useEffect } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};
// journey_data
const journey_data = [
  {
    id: "01",
    date: "OCT 2019",
    title: (
      <>
        Intelligent <br /> Keyword Integration
      </>
    ),
    description: (
      <>
       Seamlessly embeds targeted SEO keywords into your content <br />
       to enhance search engine rankings and  <br /> visibility.
      </>
    ),
  },
  {
    id: "02",
    date: "OCT 2020",
    title: (
      <>
        Content <br /> Optimization
      </>
    ),
    description: (
      <>
       Analyzes and optimizes content structure and readability <br />
       for improved SEO performance and user <br /> engagement.
      </>
    ),
  },
  {
    id: "03",
    date: "OCT 2021",
    title: (
      <>
        Competitive <br /> Analysis
      </>
    ),
    description: (
      <>
        Provides insights into competitors' SEO strategies to <br />
        identify opportunities for improvement and <br /> differentiation.
      </>
    ),
  },
  {
    id: "04",
    date: "OCT 2022",
    title: (
      <>
        Automated <br />
        SEO Recommendations
      </>
    ),
    description: (
      <>
        Generates automated suggestions for optimizing <br />
        meta tags, headings, and other critical SEO <br /> elements.
      </>
    ),
  },
  {
    id: "05",
    date: "Present",
    title: (
      <>
        Performance <br /> Tracking
      </>
    ),
    description: (
      <>
       Monitors and reports on SEO performance metrics, <br />
       allowing you to track progress and adjust strategies <br /> accordingly.
      </>
    ),
  },
  {
    id: "06",
    date: "OCT 2020",
    title: (
      <>
        Continuous <br /> Improvement
      </>
    ),
    description: (
      <>
       Utilizes machine learning to adapt SEO strategies based on <br />
       real-time data, ensuring ongoing effectiveness and <br /> relevance.
      </>
    ),
  },
];

const JourneyArea = () => {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };

  return (
    <>
      <div className="journey-area p-relative fix">
        <div className="journey-grey-bg grey-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="journey-section-box">
                <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                <h3 className="ab-brand-title pb-0 mb-0">
                  How Our AI Assistant works
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="journey-slider-wrapper">
                <Swiper
                  {...setting}
                  onSliderMove={handleSlideChange}
                  onTransitionEnd={handleTransitionEnd}
                  modules={[Navigation, Scrollbar]}
                  className={`swiper-container journey-slider-active ${
                    isDragged ? "dragged" : ""
                  }`}>
                  {journey_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="journey-slider-item p-relative">
                      <div className="journey-stroke-text">
                        <h2>{item.id}</h2>
                      </div>
                      {/* <div className="journey-slider-meta">
                        <span>{item.date}</span>
                      </div> */}
                      <div className="journey-slider-content">
                        <h4 className="journey-slider-title">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyArea;

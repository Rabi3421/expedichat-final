import React from "react";
import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";
import Image from "next/image";
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/sv-details-1.jpg";
import { paid_tools_data } from "@/data/service-data";
const ServiceDetailsArea = ({ finalContent }) => {
  const {
    category_title,
    categorys,
    sidebar,
    bg_img,
    overview_title,
    overview_des,
    features_title,
    overview_list,
    challange_titel,
    challange_des,
    faqs_data,
    main_img 
  } = finalContent;


  // useIsomorphicLayoutEffect(() => {
  //    ScrollTrigger.create({
  //       trigger: ".sv-details-widget",
  //       start: "top 5%",
  //       end: "bottom 70%",
  //       pin: ".sv-details-widget",
  //       pinSpacing: false
  //      });
  // },[])


  return (
    <>
      <div className="sv-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="sv-details-widget">
                <div className="sv-details-category mb-30">
                  <div className="sv-details-category-title">
                    <h4 className="sv-details-title-sm">{category_title}</h4>
                  </div>
                  <div className="sv-details-category-list">
                    <ul>
                      {categorys.map((item, i) => (
                        <li key={i} className={item.cls}>
                          <Link href={item.slug}>
                            <span>{item.category}</span>
                            <i className="fal fa-angle-right"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="tp-service__dashboard mb-30"
                  style={{ backgroundImage: `url(${bg_img})` }}>
                  <div className="tp-service__top-content">
                    <h3 className="tp-service__title-white">
                      {sidebar.heading}
                    </h3>
                    <p>
                      {sidebar.desc}
                    </p>
                    <Link
                      className="tp-btn-orange tp-btn-hover alt-color-white"
                      href={sidebar.ctaLink}>
                      <span>Try now</span>
                      <b></b>
                    </Link>
                  </div>
                  <div className="tp-service__dashdboard-sm-img">
                    <Image
                      src={dashbord}
                      className="wow tpfadeRight"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                      alt="theme-pure"
                    />
                  </div>
                </div>

                <div className="sv-details-social-box mb-30">
                  <h4 className="sv-details-title-sm">Share it.</h4>
                  <div className="sv-details-social-link">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="sv-details-wrapper">
                <div className="sv-details-thumb mb-45">
                  <Image className="w-100" src={main_img} alt="theme-pure" />
                </div>
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">{overview_title}</h4>
                  <p>{overview_des}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    {features_title}
                  </h4>
                  <ul>
                    {overview_list.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Expedichat provides efficient communication services for all
                    your conversation requirements designed to respond to all
                    inquiries instantaneously and accurately
                  </p>
                </div>
                <div className="sv-details-text-2">
                  <h4 className="sv-details-text-title">{challange_titel}</h4>
                  <p>{challange_des}</p>
                </div>
                <div className="tp-faq-area pt-50">
                  <div className="container p-0">
                    <div className="row g-0">
                      <div className="col-xl-12">
                        <h4 className="sv-details-title">
                          Any Questions find here.
                        </h4>
                        <AnswerQuestion style={true} faqs_data={faqs_data} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;

import useTitleAnimation from "@/hooks/useTitleAnimation";
// import service_data from "@/data/service-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import img from "../../../../public/assets/img/service/sv-dashbord.png";
import { paid_tools_data } from "@/data/service-data";

const service_content = {
  title: "Get Extraordinary output with top-tier tools",
  sub_title: (
    <>
      Create, optimize, and convert complex tasks with our advanced AI premium
      tools.
    </>
  ),

  bg_img: "/assets/img/service/sv-bg.jpg",
  title_2: (
    <>
      Explore More
      <br /> Paid & Free Tools
    </>
  ),
  des: (
    <>
      Lorem Ipsum is simply dummy text <br /> of the printing
    </>
  ),
  btn_text: "Explore Now",
};
const { title, sub_title, bg_img, title_2, des, btn_text } = service_content;

const PaidTools = () => {
  let titleRef = useRef(null);

  useTitleAnimation(titleRef);
  return (
    <>
      <div className="tp-service__area p-relative fix mt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                ref={titleRef}
                className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim">
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {paid_tools_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}>
                <div className="tp-service__item mb-30">
                  <div className="tp-service__icon">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="tp-service__content">
                    <h3 className="tp-service__title-sm tp-yellow-color">
                      <Link href={`/ai-tools/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="tp-service__link">
                    <Link href={`/ai-tools/${item.slug}`}>
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaidTools;

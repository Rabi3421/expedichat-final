import React from "react";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import Link from "next/link";
import Image from "next/image";

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";

const BreadcrumbEight = ({ finalContent }) => {
  const { animeRef } = useBreadcrumbTitleAnime();
  return (
    <>
      <div className="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="breadcrumb__content-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="breadcrumb__content z-index-3 mb-60">
                  <div
                    className="breadcrumb__text wow tpfadeIn"
                    data-wow-duration=".9s"
                    data-wow-delay=".6s">
                    <span>{finalContent.category}</span>
                  </div>
                  <h3 ref={animeRef} className="breadcrumb__title anime_text">
                    {finalContent.sub_category}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row g-0 z-index-3">
              {finalContent.our_service.map((item, i) => (
                <div
                  key={i}
                  className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                  <div className={`breadcrumb__client-info ${item.cls}`}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
              <div className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                <div className="breadcrumb__client-info space-left-4">
                  <span>CLICK</span>
                  <div className="breadcrumb__live-btn">
                    <Link className="tp-btn-inner-border" target="_blank" href={`http://localhost:3030/ai-assistant/${finalContent.slug}`}>
                      Try out
                      <i className="fal fa-arrow-up"></i>
                    </Link>
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

export default BreadcrumbEight;

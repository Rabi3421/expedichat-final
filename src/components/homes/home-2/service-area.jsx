import LinearGradientLine from "@/svg/linear-gradient-line";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import bg_img from "../../../../public/assets/img/service/sv-bg-2-1.jpg";
// service img import
import pdf_to_jpg from "../../../../public/assets/img/service/pdf_to_jpg.webp";
import Image_to_pdf from "../../../../public/assets/img/service/Image_to_pdf.webp";
import word_count from "../../../../public/assets/img/service/word_count.webp";
import barcode_scanner from "../../../../public/assets/img/service/barcode_scanner.webp";
import base_64_to_pdf from "../../../../public/assets/img/service/base_64_to_pdf.webp";
import compress_pdf from "../../../../public/assets/img/service/compress_pdf.webp";
import doc_to_pdf from "../../../../public/assets/img/service/doc_to_pdf.webp";
import merge_pdf from "../../../../public/assets/img/service/merge_pdf.webp";
import pdf_splitter from "../../../../public/assets/img/service/pdf_splitter.webp";
import pdf_to_base64 from "../../../../public/assets/img/service/pdf_to_base64.webp";
import text_to_pdf from "../../../../public/assets/img/service/text_to_pdf.webp";
import zip_extractor from "../../../../public/assets/img/service/zip_extractor.webp";
const service_content = {
  title: (
    <>
      Try Our No-Cost Tools for Your Daily Tasks!
    </>
  ),
  des: (
    <>
      Our best free tools is designed to help you tackle everyday tasks
      effortlessly
    </>
  ),

  users_data: [
    {
      id: 1,
      users_count: (
        <>
          12
        </>
      ),
      users_status: <>Free Tools</>,
    },
    {
      id: 2,
      users_count: (
        <>
          100<i>+</i>
        </>
      ),
      users_status: <>Writing Tools</>,
    },
    {
      id: 3,
      users_count: (
        <>
          6
        </>
      ),
      users_status: <>AI Premium tools</>,
    },
  ],
  service_data: [
    {
      id: 1,
      color: "",
      title: "PDF to JPG",
      img: pdf_to_jpg,
      url: "pdf-to-jpg",
    },
    {
      id: 2,
      color: "2",
      title: "Image to PDF",
      img: Image_to_pdf,
      url: "image-to-pdf",
    },
    {
      id: 3,
      color: "3",
      title: "Word Count",
      img: word_count,
      url: "word-count",
    },
    {
      id: 4,
      color: "4",
      title: "Merge PDF",
      img: merge_pdf,
      url: "merge-pdf",
    },
    {
      id: 5,
      color: "4",
      title: "Text to PDF",
      img: text_to_pdf,
      url: "text-to-pdf",
    },
    {
      id: 6,
      color: "1",
      title: "Compress PDF",
      img: compress_pdf,
      url: "compress-pdf",
    },
    {
      id: 7,
      color: "2",
      title: "Docs to PDF",
      img: doc_to_pdf,
      url: "docs-to-pdf",
    },
    {
      id: 8,
      color: "3",
      title: "PDF Splitter",
      img: pdf_splitter,
      url: "split-pdf",
    },
    {
      id: 9,
      color: "3",
      title: "Barcode Scanner",
      img: barcode_scanner,
      url: "barcode-scanner",
    },
    {
      id: 10,
      color: "4",
      title: "Base64 to PDF",
      img:  base_64_to_pdf,
      url: "base64-to-pdf",
    },
    {
      id: 11,
      color: "1",
      title: "PDF to Base64",
      img:  pdf_to_base64,
      url: "pdf-to-base64",
    },
    {
      id: 12,
      color: "2",
      title: "ZIP Extractor",
      img:  zip_extractor,
      url: "zip-extractor",
    },
  ],

  free_tools_title: "More free tools than you can handle",
  free_tools: [
    <>Invoicing</>,
    <>Online Checkout</>,
    <>Point-of-Sale</>,
    <>Online Food Ordering</>,
    <>ICard Vault</>,
    <>Customer Portal</>,
    <>Inventory</>,
    <>Virtual Terminal</>,
    <>Recurring Plans</>,
    <>Payment Links</>,
    <>SMS Payments</>,
    <>QR Codes</>,
  ],
};
const { title, des, users_data, service_data, free_tools_title, free_tools } =
  service_content;

const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-2__area p-relative pt-70 pb-160 mt-200">
        <div className="tp-service-2__shape">
          <Image src={bg_img} alt="theme-pure" />
        </div>
        <div className="container z-index-5">
          <div className="row align-items-center mb-50">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-2__section-box">
                <h3 className="tp-section-title-lg pb-20">{title}</h3>
                <p>{des}</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".3s">
              <div className="tp-service-2__user-box p-relative d-flex justify-content-lg-start justify-content-lg-end align-items-center">
                <div className="tp-service-2__user-shape">
                  <LinearGradientLine />
                </div>
                {users_data.map((item, i) => (
                  <div key={i} className="tp-service-2__user ">
                    <span>{item.users_count}</span>
                    <p>{item.users_status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row gx-60">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp mt-50"
                data-wow-duration=".9s"
                data-wow-delay=".8s">
                <div className="tp-service-2__item-wrapper p-relative">
                  <div className="tp-service-2__item d-flex justify-content-between flex-column">
                    <div className="tp-service-2__icon">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="tp-service-2__text">
                      <h4 className="tp-service-2__title-sm">
                        <Link href={`/ai-tools/${item.url}`}>{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-service-2__link"
                        href={`/ai-tools/${item.url}`}>
                        Explore
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-xl-10 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s">
              <div className="tp-service-2__bottom-wrapper p-relative mt-110">
                <div className="tp-service-2__feature-item">
                  <h4 className="tp-service-2__feature-title">
                    {free_tools_title}
                  </h4>
                  <div className="tp-service-2__feature-box d-flex justify-content-between">
                    <div className="tp-service-2__feature-list">
                      <ul>
                        {free_tools.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
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

export default ServiceArea;

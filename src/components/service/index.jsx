import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "./service-area";
import { ai_chat_answer_question } from "@/data/answer-question-data";
import ServiceDetailsArea from "../service-details/service-details-area";

const overview_list = [
  "Instant Query Resolution: the best AI chatbots are designed to respond to your inquiries instantly.",
  "Enhanced Communication: the chat system is designed with a better way of interaction and makes the system experience more practical.",
  "User-Friendly Interface: Using the chat system is as easy as chatting with your friends",
];

const Service = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title_top={"The smartest"}
              title_bottom={"AI chat systems"}
            />
            <HeroBanner
              title="The smartest"
              subtitle="AI chat systems"
              bg_img="/assets/img/breadcrumb/The-smartest-AI-chat-system-4.jpg"
            />
            <ServiceArea />
            <div className="tp-card-area tp-card-space pt-10 pb-10">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-8">
                    <div className="sv-details-wrapper">
                      <div className="sv-details-title-box mb-5">
                        <h4 className="sv-details-title">
                          Why It is Considered the Best Chat System of the
                          Decade
                        </h4>
                        <p>
                          An advanced AI-powered chat system is crafted to meet
                          the needs of businesses, professionals, and
                          individuals that offers seamless, intelligent
                          interactions to enhance productivity and engagement.
                        </p>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Key Features of Our Leading AI Chatbot
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
                          Expedichat provides efficient communication services
                          for all your conversation requirements designed to
                          respond to all inquiries instantaneously and
                          accurately.
                        </p>
                      </div>
                      <div className="sv-details-text-2">
                        <h4 className="sv-details-text-title">
                          Experience Excellence with AI Chat system
                        </h4>
                        <p>
                          Expedichat provides efficient communication services
                          for all your conversation requirements designed to
                          respond to all inquiries instantaneously and
                          accurately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CardArea style_service={true} />
            <SalesArea style_service={true} />
            {/* <TestimonialArea /> */}
            <FaqArea style_service={true} faqs_data={ai_chat_answer_question} />
            <CtaArea link="https://dashboard.expedicaht.com" />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Service;

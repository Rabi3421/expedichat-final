import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/common/testimonial-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import { useParams } from "next/navigation";
import { paid_tools_details } from "@/data/service-data";

const ServiceDetails = () => {
  const params = useParams();

  if (!params?.tool_name) {
    return null; // or a loading spinner, or any placeholder content
  }

  const finalContent = paid_tools_details.find(
    (list) => list.slug === params.tool_name
  );
  
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo
              title={finalContent?.tool_title || "Service Details"}
              innertitle={finalContent?.tool_title || "Service Details"}
            />
            <ServiceDetailsArea finalContent={finalContent} />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;

import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import ProjectArea from "../homes/home/project-area";
import ProjectDetailsArea from "./project-details-area";
import ThumbArea from "./thumb-area";
import { useParams } from "next/navigation";
import { ai_assistant_details } from "@/data/project-data";

const ProjectDetails = () => {
  const params = useParams();

  console.log("params:",params)


  if (!params?.assistant_name) {
    return null; // or a loading spinner, or any placeholder content
  }

  const finalContent = ai_assistant_details.find(
    (list) => list.slug === params.assistant_name
  );

  console.log("finalContent:",finalContent)
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight finalContent={finalContent}/>
            <ThumbArea finalContent={finalContent}/>
            <ProjectDetailsArea finalContent={finalContent}/>
            <ProjectArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

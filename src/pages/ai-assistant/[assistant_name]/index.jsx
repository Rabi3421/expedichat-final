import SEO from "@/common/seo";
import ProjectDetails from "@/components/project-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <ProjectDetails />
    </Wrapper>
  );
};

export default index;
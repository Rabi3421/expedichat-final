import React from "react";
import SEO from "../common/seo";
import BlogDetailsTwo from "../components/blog-details-2";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <BlogDetailsTwo />
    </Wrapper>
  );
};

export default index;

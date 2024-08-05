import React, { useState } from "react";
import { Box, Typography, TextField, Stack } from "@mui/material";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import { word_count_content } from "@/data/service-data";


const {
  feature_list,
  membur_about_title,
  about_info_1,
  about_info_2,
  about_info_3,
  faqs_data
} = word_count_content;

const WordCount = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo
              title={"Word Count"}
              innertitle={" Team Member "}
              team_details={true}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "450px",
                backgroundColor: "white",
                textAlign: "center",
                margin: "10px 0px",
                width: "100%",
              }}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80%",
                  height: "400px",
                  backgroundColor: "white",
                  textAlign: "center",
                  borderRadius: 10,
                }}>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  fontWeight={800}>
                  Word Count
                </Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label={`Type here Words: ${wordCount}`}
                  multiline
                  fullWidth
                  rows={12}
                  value={text}
                  onChange={handleTextChange}
                  variant="outlined"
                  style={{
                    marginBottom: "10px",
                    width: "90%",
                    backgroundColor: "#fff",
                  }}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ padding: "5px 0" }}>
                  Words: {wordCount}
                </Typography>
              </Stack>
            </Box>

            
            {/* Content */}
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="team-details-text-wrapper pt-80">
                  <div className="team-details-text">
                    <h4 className="team-details-title">{membur_about_title}</h4>
                    <p>{about_info_1}</p>
                  </div>
                  <div className="team-details-feature-list">
                    <ul>
                      {feature_list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p>{about_info_2}</p>
                    <p>{about_info_3}</p>
                  </div>
                </div>
              </div>
            </div>

            <FaqArea style_service={true} faqs_data={faqs_data} />
            <CtaArea link="https://dashboard.expedichat.com/" />

          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default WordCount;

import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import { text_to_pdf_content } from "@/data/service-data";
import ReCAPTCHA from "react-google-recaptcha";
import { useFileDownload } from "../../hooks/useFileDownloader";


const {
  feature_list,
  membur_about_title,
  about_info_1,
  about_info_2,
  about_info_3,
  faqs_data,
} = text_to_pdf_content;

// Import ReactQuill dynamically to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextToPdf = () => {
  const [content, setContent] = useState("");
  const [conversionComplete, setConversionComplete] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken]=useState();

  const quillRef = useRef(null);

  const API_KEY = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const handleContentUpload = async () => {
    if (!content.trim()) {
      toast.error("Please write something to generate PDF");
      return;
    }
    setShowCaptcha(true); // Show CAPTCHA instead of generating PDF
  };

  const handleCaptcha = async (value) => {
    if (value) {
      setCaptchaVerified(true);
      setShowCaptcha(false); // Hide CAPTCHA
      setLoading(true);

      console.log("check/l:", value)

      const finalContentHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body style="padding:40px">
          ${content}
      </body>
      </html>
      `;

      const payload = {
        html_content: finalContentHtml,
        recaptcha_response: captchaToken,
      };

      try {
        const response = await axios.post(`${API_KEY}text/pdf/`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("File uploaded successfully:", response.data);
        toast.success(response.data.msg);
        setRes(response.data);
        setConversionComplete(true);
      } catch (error) {
        console.error("Error uploading content:", error);
        toast.error("Error uploading content");
      } finally {
        setLoading(false);
      }
    }
  };

  const downloadResponse = () => {
    useFileDownload(res.res_blob_url)

    // console.log("Download response triggered");
    // const url = res.res_blob_url;
    // window.open(url, "_blank");
  };

  const handleContentChange = (value) => {
    setContent(value);
    setCaptchaToken(value)
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      [{ align: [] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      ["clean"],
      ["font", "size"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "link",
    "image",
    "video",
    "color",
    "background",
  ];

  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo
              title={"Text to PDF"}
              innertitle={" Team Member "}
              team_details={true}
            />
            {conversionComplete ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "450px",
                  backgroundColor: "white",
                  textAlign: "center",
                  margin: "50px 0px",
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
                    backgroundColor: "grey.300",
                    textAlign: "center",
                    borderRadius: 10,
                  }}>
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    fontWeight={800}>
                    "Text has been converted to PDF"
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={downloadResponse}
                    sx={{
                      backgroundColor: "#549AC9",
                      width: "250px",
                      height: "70px",
                      fontWeight: "600",
                      fontSize: "18px",
                      borderRadius: 3,
                      "&:hover": { backgroundColor: "#36a89e" },
                    }}>
                    Download
                  </Button>
                </Stack>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                  backgroundColor: "white",
                  textAlign: "center",
                  margin: "50px 0px",
                  width: "100%",
                }}>
                <Stack
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: "80%",
                  }}>
                  <ReactQuill
                    style={{ height: "55vh", width: "100%" }}
                    ref={quillRef}
                    value={content}
                    placeholder="Start writing"
                    onChange={handleContentChange}
                    modules={modules}
                    formats={formats}
                  />
                  <div style={{paddingTop:'50px'}}>
                    {loading ? (
                      <CircularProgress
                        sx={{ alignSelf: "center", marginTop: 2 }}
                      />
                    ) : showCaptcha ? (
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptcha}
                        style={{ marginTop: 2 }}
                      />
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleContentUpload}
                        startIcon={<UploadFileIcon />}
                        sx={{
                          backgroundColor: "#42ccb4",
                          width: "250px",
                          margin: "auto",
                          height: "50px",
                          fontWeight: "600",
                          fontSize: "18px",
                          borderRadius: 3,
                          "&:hover": { backgroundColor: "#36a89e" },
                        }}>
                        Generate PDF
                      </Button>
                    )}
                  </div>
                </Stack>
              </Box>
            )}

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

export default TextToPdf;

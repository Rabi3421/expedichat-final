import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography, CircularProgress } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA
import { base64_to_pdf_content } from "@/data/service-data";
import { toast } from "sonner";
import { useFileDownload } from "../../hooks/useFileDownloader";
const { feature_list, membur_about_title, about_info_1, about_info_2, about_info_3, faqs_data } = base64_to_pdf_content;

const Base64ToPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState({});
  const [conversionComplete, setConversionComplete] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false); // Captcha state
  const [loading, setLoading] = useState(false); // Loading state
  const [captchaToken, setCaptchaToken]=useState();

  // const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const API_KEY = process.env.NEXT_PUBLIC_API_ENDPOINT;

  
  useEffect(() => {
    console.log("Check::", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
    if (selectedFile && captchaVerified) {
      handleUpload();
    }
  }, [selectedFile, captchaVerified]);

  const handleFileChange = async (event) => {
    try {
      setSelectedFile(event.target.files[0]);
      setConversionComplete(false); // Reset conversion state when selecting a new file
      setCaptchaVerified(false); // Reset captcha verification state
    } catch (err) {
      console.log(err);
    }
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setCaptchaToken(value)
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !captchaVerified) {
      return;
    }

    setLoading(true); // Start loading
    const formData = new FormData();
    formData.append("files", selectedFile);
    formData.append("recaptcha_response", captchaToken);


    try {
      const response = await axios.post(`${API_KEY}base64/pdf/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
      setRes(response.data);
      setConversionComplete(true);
      toast.success("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file");
    } finally {
      setLoading(false); // Stop loading
      setSelectedFile(null);
    }
  };

  const downloadResponse = () => {
    useFileDownload(res.res_blob_url)

    // console.log("Download response triggered");
    // const url = res.res_blob_url; // Replace with your actual download URL
    // window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo
              title={"Base64 to PDF"}
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
                  {conversionComplete
                    ? "Base64 has been converted to PDF"
                    : "Base64 to PDF"}
                </Typography>
                {conversionComplete ? null : (
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ padding: "15px 0" }}>
                    Separate one page or a whole set for easy conversion into
                    independent PDF files.
                  </Typography>
                )}
                {loading ? (
                  <CircularProgress />
                ) : conversionComplete ? (
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
                ) : (
                  <>
                    {!selectedFile ? (
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<UploadFileIcon />}
                        sx={{
                          backgroundColor: "#42ccb4",
                          width: "250px",
                          height: "70px",
                          fontWeight: "600",
                          fontSize: "18px",
                          borderRadius: 3,
                          "&:hover": { backgroundColor: "#36a89e" },
                        }}>
                        Upload File
                        <input type="file" hidden onChange={handleFileChange} />
                      </Button>
                    ) : (
                      <Box mt={2}>
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                          onChange={handleCaptcha}
                        />
                      </Box>
                    )}
                  </>
                )}
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

export default Base64ToPdf;
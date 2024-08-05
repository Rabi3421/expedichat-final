import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Card,
  CardContent,
  Link,
  CircularProgress,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import axios from "axios";
import { CopyAllRounded } from "@mui/icons-material";
import { toast } from "sonner";
import { barcode_scanner_content } from "@/data/service-data";
import ReCAPTCHA from "react-google-recaptcha";

const {
  feature_list,
  membur_about_title,
  about_info_1,
  about_info_2,
  about_info_3,
  faqs_data
} = barcode_scanner_content;

const BarcodeScanner = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState({});
  const [conversionComplete, setConversionComplete] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken]=useState();
  // const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const API_KEY = process.env.NEXT_PUBLIC_API_ENDPOINT;

  useEffect(() => {
    if (selectedFile && captchaVerified) {
      handleUpload();
    }
  }, [captchaVerified]);

  const handleCopy = () => {
    if (res.path && res.path[0] && res.path[0].text) {
      navigator.clipboard
        .writeText(res.path[0].text)
        .then(() => {
          toast.success("Response copied");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      toast.error("No text available to copy");
    }
  };

  const handleFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);
    setConversionComplete(false); // Reset conversion state when selecting a new file
    setCaptchaVerified(false); // Reset captcha verification state when selecting a new file
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setCaptchaToken(value)
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("files", selectedFile);
    formData.append("recaptcha_response", captchaToken);

    console.log("captchaToken:", captchaToken)

    try {
      const response = await axios.post(`${API_KEY}barcode/reader/`, formData, {
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
      setLoading(false);
      setSelectedFile(null);
    }
  };

  const renderPathData = (path) => {
    return path.map((item, index) => (
      <Card
        key={index}
        sx={{ minWidth: 275, margin: "10px", backgroundColor: "#f5f5f5" }}>
        <CardContent>
          {item.type === "QRCODE" ? (
            <Link
              href={item.text}
              target="_blank"
              rel="noopener"
              underline="none">
              <Typography variant="h6" component="div" color="primary">
                {item.text}
              </Typography>
            </Link>
          ) : (
            <Typography variant="h6" component="div">
              {item.text}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            Type: {item.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Coordinates: ({item.x1}, {item.y1}) to ({item.x2}, {item.y2})
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo
              title={"Barcode Scanner"}
              innertitle={"AI Tools"}
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
                    ? "Barcode Scanned Successfully"
                    : "Barcode Scanner"}
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
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}>
                      {renderPathData(res.path)}
                    </Box>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<CopyAllRounded />}
                      onClick={handleCopy}
                      sx={{
                        backgroundColor: "#549AC9",
                        width: "250px",
                        height: "70px",
                        fontWeight: "600",
                        fontSize: "18px",
                        borderRadius: 3,
                        "&:hover": { backgroundColor: "#36a89e" },
                      }}>
                      Copy Response
                    </Button>
                  </>
                ) : selectedFile && !captchaVerified ? (
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptcha}
                  />
                ) : (
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

export default BarcodeScanner;

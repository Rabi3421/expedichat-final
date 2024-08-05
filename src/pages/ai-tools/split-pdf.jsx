import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  CircularProgress,
  Drawer,
  IconButton,
  TextField,
} from "@mui/material";
import {
  ArrowBackIosNew as ArrowBackIosNewIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  UploadFile as UploadFileIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import axios from "axios";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import DisplayThumbnailExample from "@/components/displayThumbnailExample/DisplayThumbnailEample";
import style from "./SplitPdf.module.css";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

const SplitPdf = () => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [conversionComplete, setConversionComplete] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaVisible, setCaptchaVisible] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const [response, setResponse] = useState(null);
  const [menuIconPosition, setMenuIconPosition] = useState({
    top: 10,
    right: 10,
  });
  const [ranges, setRanges] = useState([{ fromPage: 1, toPage: 1 }]);
  const btnRef = useRef();
  const API_KEY = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setPdfFiles(files);
    setDrawerOpen(true);
    setMenuIconPosition({ top: "auto", right: "auto" });
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaToken(value);
      handleSplitPdf(value); // API call when captcha is verified
    }
  };

  // const handleSplitPdf = async (captchaValue) => {
  //   setLoading(true);
  //   const formData = new FormData();
  //   formData.append("files", pdfFiles[0]);
  //   formData.append("list_of_pageno", JSON.stringify(formattedSections));
  //   formData.append("list_of_skip_page_no", JSON.stringify([[]]));
  //   formData.append("recaptcha_response", captchaValue);

  //   const options = {
  //     method: "POST",
  //     url: `${API_KEY}split/pdf/`,
  //     data: formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   try {
  //     const response = await axios(options);
  //     setResponse(response.data.zip_res);
  //     setConversionComplete(true);
  //     toast.success("File uploaded successfully");
  //     setRanges([{ fromPage: 1, toPage: 1 }]);
  //   } catch (err) {
  //     console.error("error:", err);
  //     toast.error("Error uploading file");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const downloadResponse = () => {
    const url = response;
    window.open(url, "_blank");
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
    setMenuIconPosition(open ? { top: 10, right: 0 } : { top: 10, right: 10 });
  };

  const removePdfFile = (index) => {
    const updatedFiles = pdfFiles.filter((_, i) => i !== index);
    setPdfFiles(updatedFiles);
  };

  const handleRangeChange = (index, field, value) => {
    const newRanges = [...ranges];
    newRanges[index][field] = value;
    setRanges(newRanges);
  };

  const addRange = () => {
    setRanges([...ranges, { fromPage: 1, toPage: 1 }]);
  };

  const formattedSections = ranges.map(({ fromPage, toPage }) => [
    parseInt(fromPage),
    parseInt(toPage),
  ]);

  const handleSplitPdf = async () => {
    const formData = new FormData();
    formData.append("files", pdfFiles[0]);
    formData.append("list_of_pageno", JSON.stringify(formattedSections));
    formData.append("list_of_skip_page_no", JSON.stringify([[]]));

    const options = {
      method: "POST",
      url: `${API_KEY}split/pdf/`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const response = await axios(options);
      setResponse(response.data.zip_res);
      setConversionComplete(true);

      setRanges([{ fromPage: 1, toPage: 1 }]);
    } catch (err) {
      console.error("error:", err);
    }
  };

  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo
              title={"Split PDF"}
              innertitle={"Team Member"}
              team_details={true}
            />
            {conversionComplete &&
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  ref={btnRef}
                  color="inherit"
                  onClick={toggleDrawer(true)}
                  sx={{
                    // position: "absolute",
                    top: menuIconPosition.top,
                    right: menuIconPosition.right,
                    transition: "top 0.3s, right 0.3s",
                    backgroundColor: "rgba(66, 204, 180, 0.9)",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(54, 168, 158, 0.9)",
                    },
                  }}
                >
                  {drawerOpen ? (
                    <ArrowForwardIosIcon />
                  ) : (
                    <ArrowBackIosNewIcon />
                  )}
                </IconButton>
              </Box>
            }
            {pdfFiles.length === 0 && !conversionComplete ? (
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
                }}
              >
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
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    fontWeight={800}
                  >
                    {conversionComplete
                      ? "Zip has been Extracted"
                      : "Split PDF"}
                  </Typography>
                  {!conversionComplete && (
                    <Typography
                      variant="body1"
                      gutterBottom
                      style={{ padding: "15px 0" }}
                    >
                      Separate one page or a whole set for easy conversion into
                      independent PDF files.
                    </Typography>
                  )}
                  {loading ? (
                    <CircularProgress />
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
                      }}
                    >
                      Upload File
                      <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                  )}
                </Stack>
              </Box>
            ) : (
              <div className={style.previewContainer}>
                {ranges.map((section, index) => (
                  <div className={style.eachBox} key={index}>
                    <button
                      className={style.closeButton}
                      onClick={() => removePdfFile(index)}
                    >
                      <CloseIcon />
                    </button>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                      <div className={style.thumbnailWrapper}>
                        <DisplayThumbnailExample
                          fileUrl={URL.createObjectURL(pdfFiles[0])}
                          pageIndex={section.fromPage - 1}
                        />
                        <p>From Page No: {section.fromPage}</p>
                      </div>
                      <div className={style.thumbnailWrapper}>
                        <DisplayThumbnailExample
                          fileUrl={URL.createObjectURL(pdfFiles[0])}
                          pageIndex={section.toPage - 1}
                        />
                        <p>To Page No: {section.toPage}</p>
                      </div>
                    </Worker>
                  </div>
                ))}
                {/* <IconButton
                  ref={btnRef}
                  color="inherit"
                  className={style.drawerOpen}
                  onClick={toggleDrawer(true)}
                  sx={{
                    position: "absolute",
                    top: menuIconPosition.top,
                    right: menuIconPosition.right,
                    transition: "top 0.3s, right 0.3s",
                    backgroundColor: "rgba(66, 204, 180, 0.9)",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(54, 168, 158, 0.9)",
                    },
                  }}
                >
                  {drawerOpen ? (
                    <ArrowForwardIosIcon />
                  ) : (
                    <ArrowBackIosNewIcon />
                  )}
                </IconButton> */}
              </div>
            )}
            <FaqArea style_service={true} />
            <CtaArea link="dashboard.expedichat.com" />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          hideBackdrop: true,
        }}
      >
        <Box
          sx={{
            width: 300,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between", // Align items between top and bottom
            height: "100%", // Ensure it takes the full height of the drawer
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {/* Top Section */}
            <Typography variant="h6" gutterBottom>
              SPLIT PDF
            </Typography>
            {pdfFiles.length > 0 && (
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                File Name: {pdfFiles.map((file) => file.name).join(", ")}
              </Typography>
            )}
            <Box border={'1px solid #ccc'} borderRadius={"8px"} overflow={'auto'} sx={{ maxHeight: '500px', p: 1, pt: 2 }}>
              {ranges.map((range, index) => (
                <Box key={index} sx={{ display: "flex", gap: 1, mb: 2 }}>
                  <TextField
                    label="From"
                    variant="outlined"
                    value={range.fromPage}
                    onChange={(e) =>
                      handleRangeChange(index, "fromPage", e.target.value)
                    }
                    sx={{ width: "50%" }}
                  />
                  <TextField
                    label="To"
                    variant="outlined"
                    value={range.toPage}
                    onChange={(e) => handleRangeChange(index, "toPage", e.target.value)}
                    sx={{ width: "50%" }}
                  />
                </Box>
              ))}
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
              <Button
                variant="contained"
                onClick={addRange}
                
                sx={{
                  backgroundColor: "#42ccb4",
                  width: "200px",
                  height: "40px",
                  fontWeight: "600",
                  fontSize: "16px",
                  borderRadius: 3,
                  "&:hover": { backgroundColor: "#36a89e" },
                  marginBottom: 2,
                  marginTop: 2
                }}
              >
                Add Range
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Bottom Section */}
            {conversionComplete ? (
              <>
                <Typography variant="body1" gutterBottom>
                  Your file is ready to download.
                </Typography>
                <Button
                  variant="contained"
                  onClick={downloadResponse}
                  sx={{
                    backgroundColor: "#549AC9",
                    width: "200px",
                    height: "40px",
                    fontWeight: "600",
                    fontSize: "16px",
                    borderRadius: 3,
                    "&:hover": { backgroundColor: "#36a89e" },
                  }}
                >
                  Download
                </Button>
              </>
            ) : (
              <>
                {captchaVisible ? (
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptcha}
                  />
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => setCaptchaVisible(true)}
                    sx={{
                      backgroundColor: "#42ccb4",
                      width: "200px",
                      height: "40px",
                      fontWeight: "600",
                      fontSize: "16px",
                      borderRadius: 3,
                    }}
                  >
                    Split PDF
                  </Button>
                )}
                {loading && <CircularProgress />}
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </Wrapper>
  );
};

export default SplitPdf;

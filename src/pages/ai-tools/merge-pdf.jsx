import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  CircularProgress,
  Drawer,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloseIcon from "@mui/icons-material/Close";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import axios from "axios";
import { toast } from "sonner";
import style from "./mergePdfStyle.module.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { merge_pdf_content } from "@/data/service-data";
import ReCAPTCHA from "react-google-recaptcha";
import { useFileDownload } from "../../hooks/useFileDownloader";


const {
  feature_list,
  membur_about_title,
  about_info_1,
  about_info_2,
  about_info_3,
  faqs_data,
} = merge_pdf_content;

const MergePdf = () => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [res, setRes] = useState({});
  const [conversionComplete, setConversionComplete] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [response, setResponse] = useState(null);
  const [menuIconPosition, setMenuIconPosition] = useState({
    top: 10,
    right: 10,
  });

  useEffect(() => {
    setMenuIconPosition({
      top: drawerOpen ? 10 : 10,
      right: drawerOpen ? 0 : 10,
    });
  }, [drawerOpen]);

  const btnRef = useRef();
  const API_KEY = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const handleFileChange = async (event) => {
    try {
      const files = Array.from(event.target.files);
      setPdfFiles((prevFiles) => [...prevFiles, ...files]);
      setDrawerOpen(true);
      setMenuIconPosition(
        open ? { top: 10, right: 0 } : { top: 10, right: 10 }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = async () => {
    setLoading(true);

    if (!captchaVerified) {
      setLoading(false);
      setSnackbarMessage("Please complete CAPTCHA verification");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    if (pdfFiles.length < 2) {
      setLoading(false);
      setSnackbarMessage("Upload at least two files");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    } else if (pdfFiles.length > 5) {
      setLoading(false);
      setSnackbarMessage("Maximum 5 PDF files allowed to merge");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    const formData = new FormData();
    pdfFiles.forEach((file) => {
      formData.append("files", file);
      formData.append("recaptcha_response", captchaToken);
    });

    const options = {
      method: "POST",
      url: `${API_KEY}merge/pdf/`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios(options);
      console.log("response:", res);
      setResponse(res.data.res_blob_url);
      setConversionComplete(true);
    } catch (err) {
      console.log("error:", err);
    } finally {
      setLoading(false);
    }
  };

  const downloadResponse = () => {
    useFileDownload(response)

    // console.log("Download response triggered");
    // const url = response;
    // window.open(url, "_blank");
  };
3
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
    setMenuIconPosition(open ? { top: 10, right: 0 } : { top: 10, right: 10 });
  };

  const removePdfFile = (index) => {
    const updatedFiles = pdfFiles.filter((_, i) => i !== index);
    setPdfFiles(updatedFiles);
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setCaptchaToken(value);
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
              title={"Merge PDF"}
              innertitle={" Team Member "}
              team_details={true}
            />
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
                      ? "Zip has been Extracted"
                      : "Merge PDF"}
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
                    <CircularProgress size={70} />
                  ) : conversionComplete ? (
                    <Button
                      variant="contained"
                      onClick={downloadResponse}
                      sx={{
                        backgroundColor: "#42ccb4",
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
            ) : (
              <div className={style.previewContainer}>
                {pdfFiles.map((pdfFile, index) => (
                  <div key={index} className={style.preview}>
                    <button
                      className={style.closeButton}
                      onClick={() => removePdfFile(index)}>
                      <CloseIcon />
                    </button>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                      <Viewer fileUrl={URL.createObjectURL(pdfFile)} />
                    </Worker>
                  </div>
                ))}
                <IconButton
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
                  }}>
                  {drawerOpen ? (
                    <ArrowForwardIosIcon />
                  ) : (
                    <ArrowBackIosNewIcon />
                  )}
                </IconButton>
              </div>
            )}
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
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          hideBackdrop: true,
        }}>
        <Box
          sx={{
            width: 300,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ alignSelf: "flex-end" }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            MERGE PDF
          </Typography>
          {pdfFiles.length > 0 && (
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              File Name: {pdfFiles.map((file) => file.name).join(", ")}
            </Typography>
          )}
          <Button
            variant="contained"
            component="label"
            onClick={handleFileChange}
            sx={{
              backgroundColor: "#42ccb4",
              width: "200px",
              height: "40px",
              fontWeight: "600",
              fontSize: "16px",
              borderRadius: 3,
              "&:hover": { backgroundColor: "#36a89e" },
              marginBottom: 2,
            }}>
            Upload Another
            <input
              type="file"
              hidden
              accept=".pdf"
              multiple
              onChange={handleFileChange}
            />
          </Button>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleCaptcha}
          />
          {loading ? (
            <CircularProgress size={60} sx={{ marginTop: 2 }} />
          ) : conversionComplete ? (
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
              }}>
              Download
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleUpload}
              disabled={!captchaVerified}
              sx={{
                backgroundColor: "#42ccb4",
                width: "200px",
                height: "40px",
                fontWeight: "600",
                fontSize: "16px",
                borderRadius: 3,
                "&:hover": { backgroundColor: "#36a89e" },
              }}>
              Merge PDF
            </Button>
          )}
        </Box>
      </Drawer>
    </Wrapper>
  );
};

export default MergePdf;

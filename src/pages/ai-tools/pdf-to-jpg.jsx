import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FaqArea from "@/components/homes/home-2/faq-area";
import CtaArea from "@/components/contact/cta-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import axios from "axios";
import { pdf_to_jpg_content } from "@/data/service-data";
import GetAppIcon from '@mui/icons-material/GetApp';

const {
  feature_list,
  membur_about_title,
  about_info_1,
  about_info_2,
  about_info_3,
  faqs_data
} = pdf_to_jpg_content;

const PdfToJpg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState({});
  const [conversionComplete, setConversionComplete] = useState(false);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNTkxNDQzLCJpYXQiOjE3MjI1ODQyNDMsImp0aSI6ImExZWVmZjVlMGRlOTQ5Njg4YWM0Y2U4YjgyMGQxMjkzIiwidXNlcl9pZCI6MzB9.YcVPdJ6fmbKXijSG3sci-f663XDzZrRGoxqE7NQ790g";
  const API_KEY = "http://20.163.239.30:9033/expedichat/v0/";

  useEffect(() => {
    if (selectedFile) {
      handleUpload();
    }
  }, [selectedFile]);

  const handleFileChange = async (event) => {
    try {
      setSelectedFile(event.target.files[0]);
      setConversionComplete(false); // Reset conversion state when selecting a new file
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("files", selectedFile);

    try {
      const response = await axios.post(`${API_KEY}pdf/jpg/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
      setRes(response.data);
      setConversionComplete(true);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setSelectedFile(null);
    }
  };
  const downloadFile = async (url, fileName) => {
    console.log("url", url.res_blob_url);
    const downloadUrl = url.res_blob_url;
    try {
      const response = await fetch(downloadUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const downloadResponse = () => {
    console.log("Download response triggered");
    const url = res.zip_res; // Replace with your actual download URL
    window.open(url, "_blank");
  };
  const [downloadUrl, setDownloadUrl] = useState("");

  console.log("res", res?.final_result)
  let final_result = res?.final_result
  return (
    <Wrapper>
      <SEO pageTitle={"ExpediChat - Data analytics"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo
              title={"PDF to JPG"}
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
                    ? ""
                    : "PDF to JPG"}
                </Typography>
                <Box display={'flex'} >
                  <Box>
                    {conversionComplete ? null : (
                      <Typography
                        variant="body1"
                        gutterBottom
                        style={{ padding: "15px 0" }}>
                        Separate one page or a whole set for easy conversion into
                        independent PDF files.
                      </Typography>
                    )}
                    {conversionComplete ? (
                      <>
                        <Typography variant="h6"
                        >PDF has been converted to Image</Typography>

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
                            mt: 2,
                            "&:hover": { backgroundColor: "#36a89e" },
                          }}>
                          Download All
                        </Button>
                      </>
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
                  </Box >
                  {conversionComplete && <Box height={'40vh'} overflow={'auto'}>
                    {final_result.map((item, i) => (
                      console.log("item", item),
                      <Box mt={1} ml={3} backgroundColor="#fff" display={'flex'} border={'1px solid #ccc'} width={'300px'} borderRadius={'8px'} height={'55px'} alignItems={'center'} padding={1} justifyContent={'space-around'}>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1255_158091)">
                            <path d="M23.172 0C23.7022 0 24.2107 0.210507 24.5857 0.585255L36.4137 12.4044C36.7891 12.7795 37 13.2884 37 13.8191V35.3333C37 37.9107 34.8689 40 32.24 40H7.76C5.13112 40 3 37.9107 3 35.3333V4.66667C3 2.08934 5.13112 0 7.76 0H23.172Z" fill="#22C55E" />
                            <g filter="url(#filter0_d_1255_158091)">
                              <path d="M35.1548 12.1381C35.4678 12.4537 35.2443 12.9902 34.7998 12.9902H29C26.4227 12.9902 24.0976 10.7233 24.0976 8.21031V2.20435C24.0976 1.75791 24.6382 1.53528 24.9526 1.85224L35.1548 12.1381Z" fill="white" fill-opacity="0.24" shape-rendering="crispEdges" />
                            </g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9629 16H17.0371C18.5407 16 19.7186 16 20.638 16.1237C21.5783 16.25 22.3207 16.5144 22.9034 17.0966C23.4862 17.6793 23.75 18.4217 23.8763 19.3626C24 20.2814 24 21.4593 24 22.9629V23.0202C24 24.2633 24 25.2804 23.9323 26.1087C23.8646 26.9421 23.7259 27.6369 23.4146 28.2152C23.2779 28.4698 23.1086 28.6983 22.9034 28.9034C22.3207 29.4862 21.5783 29.75 20.6374 29.8763C19.7186 30 18.5407 30 17.0371 30H16.9629C15.4593 30 14.2814 30 13.362 29.8763C12.4217 29.75 11.6793 29.4856 11.0966 28.9034C10.5802 28.3871 10.3132 27.7444 10.1719 26.946C10.0319 26.1627 10.0065 25.1879 10.0013 23.978C10 23.67 10 23.3445 10 23.0007V22.9629C10 21.4593 10 20.2814 10.1237 19.362C10.25 18.4217 10.5144 17.6793 11.0966 17.0966C11.6793 16.5138 12.4217 16.25 13.3626 16.1237C14.2814 16 15.4593 16 16.9629 16ZM13.4922 17.0913C12.66 17.2033 12.158 17.4169 11.7874 17.7874C11.4163 18.1586 11.2033 18.66 11.0913 19.4928C10.978 20.3393 10.9767 21.4515 10.9767 23C10.9767 23.3445 10.9767 23.6681 10.978 23.9735C10.9833 25.1938 11.0106 26.0872 11.133 26.7754C11.2528 27.4494 11.4573 27.8824 11.7874 28.2126C12.1586 28.5837 12.66 28.7967 13.4928 28.9087C14.3393 29.022 15.4515 29.0233 17 29.0233C18.5485 29.0233 19.6607 29.022 20.5072 28.9087C21.34 28.7967 21.842 28.5831 22.2132 28.2126C22.35 28.0758 22.4613 27.9247 22.5544 27.7522C22.7706 27.3511 22.895 26.8145 22.9588 26.0299C23.0226 25.2452 23.0233 24.2672 23.0233 23C23.0233 21.4515 23.022 20.3393 22.9087 19.4928C22.7967 18.66 22.5831 18.158 22.2126 17.7868C21.8414 17.4163 21.34 17.2033 20.5072 17.0913C19.6607 16.978 18.5485 16.9767 17 16.9767C15.4515 16.9767 14.3387 16.978 13.4922 17.0913Z" fill="white" />
                            <path d="M23.0226 23.8334L22.878 23.8139C21.0261 23.5573 19.3312 24.5198 18.4684 25.9712C17.3549 23.1549 14.4136 21.234 11.1272 21.7061L10.98 21.7269C10.9767 22.1157 10.9767 22.5383 10.9767 23C10.9767 23.3445 10.9767 23.6681 10.978 23.9735C10.9833 25.1938 11.0106 26.0872 11.133 26.7754C11.2528 27.4494 11.4573 27.8824 11.7874 28.2126C12.1586 28.5837 12.66 28.7967 13.4928 28.9087C14.3393 29.022 15.4515 29.0233 17 29.0233C18.5485 29.0233 19.6607 29.022 20.5072 28.9087C21.34 28.7967 21.842 28.5831 22.2132 28.2126C22.35 28.0758 22.4613 27.9247 22.5544 27.7522C22.7706 27.3511 22.895 26.8145 22.9588 26.0299C23.0083 25.4269 23.0193 24.7092 23.0226 23.8334Z" fill="white" />
                            <path d="M20.907 20.3953C20.907 20.7407 20.7698 21.072 20.5255 21.3162C20.2813 21.5605 19.95 21.6977 19.6047 21.6977C19.2593 21.6977 18.928 21.5605 18.6838 21.3162C18.4395 21.072 18.3023 20.7407 18.3023 20.3953C18.3023 20.05 18.4395 19.7187 18.6838 19.4745C18.928 19.2302 19.2593 19.093 19.6047 19.093C19.95 19.093 20.2813 19.2302 20.5255 19.4745C20.7698 19.7187 20.907 20.05 20.907 20.3953Z" fill="white" />
                          </g>
                          <defs>
                            <filter id="filter0_d_1255_158091" x="22.0977" y="1.70337" width="15.2031" height="15.2869" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1255_158091" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1255_158091" result="shape" />
                            </filter>
                            <clipPath id="clip0_1255_158091">
                              <rect width="40" height="40" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <Typography ml={1}>{item?.file_name}</Typography>
                        <IconButton onClick={() => downloadFile(item, `page-${i + 1}.jpg`)}>
                          <GetAppIcon />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>}
                </Box>
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

export default PdfToJpg;

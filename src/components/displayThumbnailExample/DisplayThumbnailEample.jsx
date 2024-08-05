// DisplayThumbnailExample.js
import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import "@react-pdf-viewer/core/lib/styles/index.css";
import PageThumbnailPlugin from "../pageThumbnailPlugin/PageThumbnailPlugin";

const DisplayThumbnailExample = ({ fileUrl, pageIndex }) => {
  const thumbnailPluginInstance = thumbnailPlugin();
  const { Cover } = thumbnailPluginInstance;
  const pageThumbnailPluginInstance = PageThumbnailPlugin({
    PageThumbnail: <Cover getPageIndex={() => pageIndex} />,
  });

  return (
    <Viewer
      fileUrl={fileUrl}
      plugins={[pageThumbnailPluginInstance, thumbnailPluginInstance]}
    />
  );
};

export default DisplayThumbnailExample;

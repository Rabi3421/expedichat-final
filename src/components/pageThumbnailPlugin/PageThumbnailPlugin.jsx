import * as React from "react";

const PageThumbnailPlugin = ({ PageThumbnail }) => {
  return {
    renderViewer: ({ slot }) => {
      slot.children = PageThumbnail;

      // Reset the sub slot
      slot.subSlot.attrs = {};
      slot.subSlot.children = <></>;

      return slot;
    },
  };
};

export default PageThumbnailPlugin;

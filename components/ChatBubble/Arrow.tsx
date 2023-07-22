"use client";

import React from "react";
import { SxProps, useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

export interface ArrowProps extends BoxProps {
  arrowColor?: string;
  placement?: "top-left" | "top-right";
  size?: number;
}

export const Arrow = ({
  arrowColor,
  placement = "top-left",
  size = 14,
  sx,
}: ArrowProps) => {
  const theme = useTheme();
  let placementSx: SxProps;
  switch (placement) {
    case "top-right": {
      placementSx = { top: 0, right: `-${size - 2}px` };
      break;
    }
    default: {
      placementSx = { top: 0, left: `-${size - 2}px` };
      break;
    }
  }

  return (
    <Box
      sx={{
        position: "absolute",
        width: 0,
        height: 0,
        border: `${size}px solid`,
        borderColor: `${
          arrowColor ? arrowColor : theme.palette.background.default
        } transparent transparent transparent`,
        ...placementSx,
        ...sx,
      }}
    ></Box>
  );
};

export default Arrow;

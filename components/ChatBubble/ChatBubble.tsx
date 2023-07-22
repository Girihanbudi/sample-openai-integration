"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Arrow from "./Arrow";

export interface ChatBubbleProps extends BoxProps {
  bubbleColor?: string;
  showArrow?: boolean;
  arrowPlacement?: "top-left" | "top-right";
  arrowSize?: number;
}

export const ChatBubble = ({
  bubbleColor,
  showArrow,
  arrowPlacement,
  arrowSize,
  children,
  sx,
}: ChatBubbleProps) => {
  const theme = useTheme();

  const color = bubbleColor ? bubbleColor : theme.palette.background.default;
  const borderRadius = showArrow
    ? {
        borderRadius: `${arrowPlacement === "top-left" ? 0 : 10}px ${
          arrowPlacement === "top-right" ? 0 : 10
        }px 10px 10px`,
      }
    : { borderRadius: "10px" };

  return (
    <Box
      sx={{
        p: 1,
        display: "inline-block",
        position: "relative",
        ...borderRadius,
        ...sx,
        backgroundColor: `${color}`,
      }}
    >
      {showArrow && (
        <Arrow placement={arrowPlacement} size={arrowSize} arrowColor={color} />
      )}

      {children}
    </Box>
  );
};

export default ChatBubble;

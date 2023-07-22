"use client";

import React from "react";
import Image from "next/image";
import { SxProps, useTheme } from "@mui/material/styles";
import Stack, { StackProps } from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import ChatBubble from "../ChatBubble";

export interface ChatMessageProps extends StackProps {
  chatOwner: "self" | "other";
  avatarUrl?: string;
  avatarSize?: number;
  bubbleColor?: string;
  placement?: "top-left" | "top-right";
  size?: number;
}

export const ChatMessage = ({
  chatOwner,
  avatarUrl,
  avatarSize = 32,
  bubbleColor,
  placement = "top-left",
  size = 14,
  children,
  ...props
}: ChatMessageProps) => {
  const showArrow: boolean = avatarUrl ? true : false;

  return (
    <Stack
      direction={chatOwner === "other" ? "row" : "row-reverse"}
      spacing={1}
      sx={{ width: "100%" }}
      {...props}
    >
      <Box width={avatarSize}>
        {avatarUrl && (
          <Image
            src={avatarUrl}
            width={avatarSize}
            height={avatarSize}
            alt=""
          />
        )}
      </Box>
      {chatOwner === "self" ? (
        <ChatBubble
          bubbleColor={bubbleColor}
          showArrow={showArrow}
          arrowPlacement="top-right"
        >
          {children}
        </ChatBubble>
      ) : (
        <ChatBubble
          bubbleColor={bubbleColor}
          showArrow={showArrow}
          arrowPlacement="top-left"
        >
          {children}
        </ChatBubble>
      )}
      <Box width={avatarSize} />
    </Stack>
  );
};

export default ChatMessage;

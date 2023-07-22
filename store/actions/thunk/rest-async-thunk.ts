import { createAsyncThunk } from "@reduxjs/toolkit";
import { openaiChatCompletion } from "../rest";

export const chatCompletionThunk = createAsyncThunk(
  "openai/chatCompletion",
  openaiChatCompletion
);

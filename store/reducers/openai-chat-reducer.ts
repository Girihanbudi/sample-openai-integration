import { IOpenaiChat } from "@/types";
import { DefaultError } from "@/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { chatCompletionThunk } from "../actions/thunk/rest-async-thunk";
import { CreateChatCompletionResponse } from "openai";

const openaiChatKey = "openai-chat";

const getChatHistory = (): IOpenaiChat[] => {
  let chats: IOpenaiChat[] = [];
  if (typeof window !== "undefined") {
    const items = localStorage.getItem(openaiChatKey);
    if (items) chats = JSON.parse(items);
  }
  return chats;
};

const setChatHistory = (chats: IOpenaiChat[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(openaiChatKey, JSON.stringify(chats));
  }
};

export interface IOpenaiChatStore {
  loading: boolean;
  data: IOpenaiChat[];
  error?: string;
  errorCode?: string;
  rejected: boolean;
  maxStored: number;
}

const initialOpenaiChatStore: IOpenaiChatStore = {
  loading: false,
  data: [],
  rejected: false,
  maxStored: 10,
};

export const openaiChatSlice = createSlice({
  name: "openaiChat",
  initialState: initialOpenaiChatStore,
  reducers: {
    hydrateOpenaiChat: (state) => {
      // do not do state = action.payload it will not update the store
      state.data = getChatHistory();
    },
    // standard reducer logic, with auto-generated action types per reducer
    newOpenaiChat: (state, action: PayloadAction<string>) => {
      const newChat: IOpenaiChat = {
        role: "user",
        createdAt: new Date().toISOString(),
        content: action.payload,
      };
      state.data.push(newChat);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(chatCompletionThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(chatCompletionThunk.fulfilled, (state, action) => {
      state.loading = false;
      const data = action.payload.data.data as CreateChatCompletionResponse;
      if (data && data.choices) {
        const newChat: IOpenaiChat = {
          role: "assistant",
          createdAt: new Date().toISOString(),
          content: data ? String(data.choices[0].message?.content) : undefined,
        };
        state.data.push(newChat);
        setChatHistory(state.data.slice(-state.maxStored));
      }
    });
    builder.addCase(chatCompletionThunk.rejected, (state) => {
      state.loading = false;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export const openaiChatSelector = (state: RootState) => state.openaiChat;
export default openaiChatSlice.reducer;
export const { hydrateOpenaiChat, newOpenaiChat } = openaiChatSlice.actions;

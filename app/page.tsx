"use client";

import { useEffect } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  OutlinedInput,
  InputAdornment,
  Stack,
  Paper,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ChatMessage } from "@/components";
import { useTheme } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import { useFormik } from "formik";

import {
  useAppDispatch,
  useAppSelector,
  openaiChatSelector,
  newOpenaiChat,
  hydrateOpenaiChat,
} from "@/store";
import { chatCompletionThunk } from "@/store/actions/thunk";

export default function Home() {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  // Redux
  const chats = useAppSelector(openaiChatSelector);
  useEffect(() => {
    dispatch(hydrateOpenaiChat());
  }, []);

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      await dispatch(newOpenaiChat(values.message));
      await dispatch(chatCompletionThunk(values.message));
    },
  });

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Stack justifyContent="space-between" sx={{ m: 2 }}>
          <Box />
          <Box>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Stack> */}

        <Paper
          elevation={0}
          sx={{
            flexGrow: 1,
            height: "100vh",
            borderRadius: "15px 0px 0px 15px",
          }}
        >
          <Stack height="100%" spacing={1} justifyContent="space-between">
            <Box
              style={{
                overflow: "auto",
              }}
              sx={{
                p: 2,
              }}
            >
              {chats.data && (
                <Stack spacing={1}>
                  {chats.data.map((chat, i) => (
                    <ChatMessage
                      key={i}
                      chatOwner={chat.role === "user" ? "self" : "other"}
                      avatarUrl={
                        chat.role === "user"
                          ? "/icon-user.png"
                          : "/icon-bot.png"
                      }
                      bubbleColor={
                        chat.role === "user"
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main
                      }
                    >
                      <Typography sx={{ sx: 1 }}>{chat.content}</Typography>
                    </ChatMessage>
                  ))}
                </Stack>
              )}
            </Box>
            <Box>
              <Stack alignItems="center" sx={{ p: 2 }}>
                <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                  <OutlinedInput
                    color="info"
                    fullWidth
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Send a message"
                    multiline
                    maxRows={4}
                    sx={{ borderRadius: 50 }}
                    disabled={chats.loading}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="send-message"
                          type="submit"
                          disabled={chats.loading}
                        >
                          {chats.loading ? (
                            <CircularProgress size={20} />
                          ) : (
                            <SendIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </form>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}

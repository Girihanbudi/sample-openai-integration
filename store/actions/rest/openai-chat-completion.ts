import { axiosFetch, ResponseProps } from "@/libs/axios";

export const openaiChatCompletion = async (
  message: string
): Promise<ResponseProps> => {
  return axiosFetch({
    method: "post",
    url: "/api/openai/chat-completion",
    data: { message: message },
    timeout: 1000 * 60 * 1, // abort in 1 minute
  });
};

export default openaiChatCompletion;

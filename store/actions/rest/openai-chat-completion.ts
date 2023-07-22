import { axiosFetch, ResponseProps } from "@/libs/axios";

export const openaiChatCompletion = async (
  message: string
): Promise<ResponseProps> => {
  return axiosFetch({
    method: "post",
    url: "/api/openai/chat-completion",
    data: { message: message },
    timeout: 1000 * 60 * 10, // abort in 10 minute
  });
};

export default openaiChatCompletion;

import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { AxiosResponse } from "axios";

export const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openaiClient = new OpenAIApi(openaiConfig);

export const chatCompletion = async (
  content: string
): Promise<AxiosResponse<CreateChatCompletionResponse, any>> => {
  return await openaiClient.createChatCompletion({
    model: process.env.OPENAI_API_MODEL,
    messages: [{ role: "user", content: content }],
  });
};

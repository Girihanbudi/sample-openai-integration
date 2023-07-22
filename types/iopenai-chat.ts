export interface IOpenaiChat {
  role: "user" | "assistant";
  createdAt: string | null;
  content?: string;
}

export const defaultOpenaiChat: IOpenaiChat = {
  role: "user",
  createdAt: null,
  content: "",
};

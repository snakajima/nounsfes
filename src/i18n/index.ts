import en from "@/i18n/en";
import ja from "@/i18n/ja";

const messages = {
  en,
  ja,
};

const config = {
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages,
};

export const languages = Object.keys(messages);

export default config;

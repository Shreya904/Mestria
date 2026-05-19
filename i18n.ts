import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const localeString = locale || "en";
  return {
    locale: localeString,
    messages: (await import(`./messages/${localeString}.json`)).default,
  };
});

export const AppConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Nawah Platform",
  env: process.env.NEXT_PUBLIC_APP_ENV ?? "development",
  isProd: process.env.NODE_ENV === "production",
};

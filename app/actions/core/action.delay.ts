export async function actionDelay(ms = 800) {
  if (process.env.NODE_ENV === "production") return;

  await new Promise(resolve => setTimeout(resolve, ms));
}

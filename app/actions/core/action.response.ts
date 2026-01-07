export type ActionResponse<T = unknown> = {
  ok: boolean;
  message?: string;
  data?: T;
  error?: string;
};

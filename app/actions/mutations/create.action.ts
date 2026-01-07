"use server";

import { actionDelay } from "../core/action.delay";
import type { ActionResponse } from "../core/action.response";

export async function createAction(
  prevState: any,
  formData: FormData
): Promise<ActionResponse> {

  const entity = formData.get("entity");
  const payload = formData.get("payload");

  await actionDelay();

  if (!entity) {
    return {
      ok: false,
      error: "Missing entity"
    };
  }

  return {
    ok: true,
    message: `${entity} created successfully`,
    data: payload
  };
}

import { getConfig } from "../utils/config";

/** Payload for the backend contact (email) API */
export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  tenantId?: string;
}

/** Response when the backend accepts the request */
export interface ContactResponse {
  ok: boolean;
}

/** Error response from the backend (NestJS validation / SendGrid errors) */
export interface ContactErrorResponse {
  message?: string | string[];
  error?: string;
  statusCode?: number;
}

/**
 * Submit the contact form to the backend. The backend sends the email via SendGrid
 * to the owner inbox (CONTACT_EMAIL).
 * Requires VITE_API_BASE_URL to be set (e.g. http://localhost:3000).
 */
export async function submitContact(
  payload: ContactPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const { apiBaseUrl } = getConfig();
  const base = apiBaseUrl?.trim();
  if (!base) {
    return {
      ok: false,
      error: "Contact form is not configured. Set VITE_API_BASE_URL to your backend URL.",
    };
  }
  const url = `${base.replace(/\/$/, "")}/contact`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json().catch(() => ({}))) as
    | ContactResponse
    | ContactErrorResponse;

  if (!res.ok) {
    const msg = (data as ContactErrorResponse).message ?? (data as ContactErrorResponse).error ?? "Something went wrong";
    const err = Array.isArray(msg) ? msg[0] : String(msg);
    return { ok: false, error: err };
  }

  return { ok: true };
}

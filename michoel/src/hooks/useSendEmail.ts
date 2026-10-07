import { useState } from "react";
import axios from "axios";

type EmailPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  cfTurnstileToken: string;
};

type UseSendEmailResult = {
  send: (payload: EmailPayload) => Promise<boolean>;
  loading: boolean;
  error: string | null;
};

export function useSendEmail(): UseSendEmailResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send(payload: EmailPayload): Promise<boolean> {
    setLoading(true);
    setError(null);

    try {
      await axios.post(
        "https://api.dannymoss.com/sendEmail",
        { site: "michaelMayerfeld", ...payload },
        { headers: { "Content-Type": "application/json" } },
      );
      return true;
    } catch {
      setError(
        "Something went wrong. Please try again or email me directly.",
      );
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { send, loading, error };
}

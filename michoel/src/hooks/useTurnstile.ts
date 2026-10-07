import { useEffect, useRef, useState } from "react";
import { TURNSTILE_SITE_KEY } from "../constants/Turnstile";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const SCRIPT_POLL_INTERVAL_MS = 100;
const SCRIPT_LOAD_TIMEOUT_MS = 10_000;

type UseTurnstileResult = {
  containerRef: React.RefObject<HTMLDivElement>;
  token: string | null;
  loadError: boolean;
  reset: () => void;
};

export function useTurnstile(): UseTurnstileResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let pollId: ReturnType<typeof setInterval> | undefined;

    function render() {
      if (!window.turnstile || !container) return;
      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (t) => setToken(t),
        "expired-callback": () => setToken(null),
        "error-callback": () => setToken(null),
      });
    }

    if (window.turnstile) {
      render();
    } else {
      const deadline = Date.now() + SCRIPT_LOAD_TIMEOUT_MS;
      pollId = setInterval(() => {
        if (window.turnstile) {
          clearInterval(pollId);
          render();
        } else if (Date.now() >= deadline) {
          clearInterval(pollId);
          setLoadError(true);
        }
      }, SCRIPT_POLL_INTERVAL_MS);
    }

    return () => {
      if (pollId) clearInterval(pollId);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  function reset() {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setToken(null);
  }

  return { containerRef, token, loadError, reset };
}

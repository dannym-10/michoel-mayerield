import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url,
  height = 400,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.Calendly && containerRef.current) {
      containerRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
};

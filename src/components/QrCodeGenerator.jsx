"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator({ text }) {
  const canvasRef = useRef(null);
  const [hasQR, setHasQR] = useState(false);

  useEffect(() => {
    if (!text) return;

    QRCode.toCanvas(canvasRef.current, text, (error) => {
      if (error) {
        console.error(error);
        setHasQR(false);
      } else {
        setHasQR(true);
      }
    });
  }, [text]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = url;
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      {hasQR && (
        <button
          className="mt-2 border rounded-lg p-2 cursor-pointer"
          onClick={handleDownload}
        >
          Download QR
        </button>
      )}
    </div>
  );
}

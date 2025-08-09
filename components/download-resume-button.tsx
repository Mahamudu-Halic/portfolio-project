"use client";

import { downloadResume } from "@/lib/api/download";
import { Download } from "lucide-react";

const DownloadResumeButton = ({
  text,
  className,
  showIcon,
}: {
  text: string;
  className?: string;
  showIcon?: boolean;
}) => {
  return (
    <button
      className={`cursor-pointer ${className}`}
      onClick={downloadResume}
    >
      {text}
      {showIcon && <Download />}
    </button>
  );
};

export default DownloadResumeButton;

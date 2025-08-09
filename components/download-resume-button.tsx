"use client";

import { downloadResume } from "@/lib/api/download";
import { Download } from "lucide-react";
import { toast } from "sonner";

const DownloadResumeButton = ({
  text,
  className,
  showIcon,
}: {
  text: string;
  className?: string;
  showIcon?: boolean;
}) => {
  const handleDownload = async () => {
    try {
      const blob = await downloadResume();
      if (!blob) throw new Error("Failed to download resume");
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Halic Mahamudu CV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success("Resume downloaded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to download resume");
    }
  };
  return (
    <button className={`cursor-pointer ${className}`} onClick={handleDownload}>
      {text}
      {showIcon && <Download />}
    </button>
  );
};

export default DownloadResumeButton;

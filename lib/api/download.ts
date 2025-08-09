export async function downloadResume() {
  try {
    const response = await fetch("/api/resume");
    if (!response.ok) throw new Error("Download failed");

    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error("Download error:", error);
  }
}

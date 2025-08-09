// app/api/resume/route.ts
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "uploads",
    "cv.pdf"
  );

  try {
    const fileBuffer = fs.readFileSync(filePath);
    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", 'attachment; filename="cv.pdf"');

    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error("Error downloading resume:", error);
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }
}

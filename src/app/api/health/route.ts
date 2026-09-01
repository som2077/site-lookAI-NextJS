import { NextResponse } from "next/server";\n\nexport async function GET() {\n  return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });\n}

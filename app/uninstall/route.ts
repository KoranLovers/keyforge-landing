import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    return NextResponse.json({ error: "UUID is required" }, { status: 400 });
  }

  const response = await fetch(
    `${process.env.API_URL}/m/uninstall?${new URLSearchParams({
      uuid,
    }).toString()}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to send metrics to the server" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

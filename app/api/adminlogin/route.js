import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
  if (username === "admin" && password === "root") {
    return NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }
}

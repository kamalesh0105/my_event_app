import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { username, password } = await request.json();
  try {
    console.log("api got called");

    // Replace the following URL with your actual API endpoint
    const apiUrl = "http://localhost:5000/auth/login";
    const response = await axios.post(apiUrl, { username, password });

    if (response.status === 200 && response.data.isLogin == true) {
      const { access_token, refresh_token } = response.data;
      // const data = response.data;
      return NextResponse.json({
        status: 200,
        success: true,
        access_token: access_token,
        refresh_token: refresh_token,
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error fetching API:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching API" },
      { status: 500 }
    );
  }
}

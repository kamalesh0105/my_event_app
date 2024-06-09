import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { username, password } = await request.json();
  try {
    console.log("Frontend login Route api");

    // Replace the following URL with your actual API endpoint
    const apiUrl = `${process.env.backend}auth/login`;
    const response = await axios.post(apiUrl, { username, password });

    if (response.status === 200 && response.data.isLogin == true) {
      const { access_token, refresh_token } = response.data;
      return NextResponse.json({
        status: 200,
        success: true,
        access_token: access_token,
        refresh_token: refresh_token,
        message: "Login Success",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Email not verified" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error fetching API:", error);
    return NextResponse.json(
      { success: false, message: "Invalid username or password" },
      { status: 500 }
    );
  }
}

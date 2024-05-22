import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  try {
    const apiUrl = "http://localhost:5000/event/get?event_type=tech";
    const response = await axios.get(apiUrl);

    if (response.status === 200 && response.data.status == true) {
      const { data } = response.data;

      return NextResponse.json({
        status: 200,
        res: true,
        data: data,
      });
    } else {
      return NextResponse.json({ res: false }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching API:", error);
    return NextResponse.json({ res: false }, { status: 500 });
  }
}

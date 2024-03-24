import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  const user = await User.findById(userId).select("-password");
  return NextResponse.json(user);
}

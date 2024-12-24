import { NextResponse } from "next/server";
import db from "@/db.js";
export async function POST(req) {
  db.update(({ result }) => result.unshift(req.json()));
  return NextResponse.json({ status: "success" });
}

import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Missing fields.", { status: 400 });
  }

  const exists = await db.user.findUnique({ where: { email } });

  if (exists) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}

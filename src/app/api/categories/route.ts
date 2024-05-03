import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

// FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
export const POST = () => {
  return new NextResponse("Hello World!", { status: 200 });
};

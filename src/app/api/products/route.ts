import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";

// FETCH ALL products
export const GET = async (req: NextRequest) => {
  // get SearchParams from URL
  const { searchParams } = new URL(req.url);
  // get "cat" value from URL
  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
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

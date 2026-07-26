import { NextResponse } from "next/server";
import { findPostById } from "@/lib/posts";

type Context = {
  params: Promise<{ post_id: string }>;
};

export async function GET(request: Request, { params }: Context) {
  const { post_id } = await params;

  const post = findPostById(post_id);

  if (!post) {
    return NextResponse.json({ message: "Post não encontrado" }, { status: 404 });
  }

  return NextResponse.json(post);
}

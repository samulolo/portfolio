import { NextResponse } from "next/server";
import { findProjectById } from "@/lib/projects";

type Context = {
  params: Promise<{ project_id: string }>;
};

export async function GET(request: Request, { params }: Context) {
  const { project_id } = await params;

  const project = findProjectById(project_id);

  if (!project) {
    return NextResponse.json({ message: "Projeto não encontrado" }, { status: 404 });
  }

  return NextResponse.json(project);
}

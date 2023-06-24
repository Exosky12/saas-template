import { NextRequest, NextResponse } from "next/server";
import { articleService } from "@/services/article-example.service";

export async function GET(request: NextRequest) {
  const articles = await articleService.getAll();

  return NextResponse.json({ articles });
}

export async function POST(request: NextRequest) {
  const { title, content } = await request.json();

  const newArticle = await articleService.create(title, content, false);

  return NextResponse.json(newArticle);
}

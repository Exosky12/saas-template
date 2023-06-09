import { ArticleExample } from "@prisma/client";
import prisma from "../prisma/prisma-client";

class ArticleExampleService {
  async createArticle(
    title: string,
    content: string,
    published: boolean
  ): Promise<ArticleExample> {
    const article = await prisma.articleExample.create({
      data: {
        title,
        content,
        published,
      },
    });
    return article;
  }

  async getArticle(id: string): Promise<ArticleExample | null> {
    const article = await prisma.articleExample.findUnique({
      where: {
        id,
      },
    });
    return article;
  }

  async getAllArticles(): Promise<ArticleExample[]> {
    const articles = await prisma.articleExample.findMany();
    return articles;
  }

  async updateArticle(
    id: string,
    title?: string,
    content?: string,
    published?: boolean
  ): Promise<ArticleExample | null> {
    const article = await prisma.articleExample.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        published,
      },
    });
    return article;
  }

  async deleteArticle(id: string): Promise<ArticleExample | null> {
    const article = await prisma.articleExample.delete({
      where: {
        id,
      },
    });
    return article;
  }
}

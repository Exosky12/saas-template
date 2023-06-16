"use client";
import { CreateExampleForm } from "@/components/CRUD.example/create_form.example";
import { ArticleExample } from "@prisma/client";
import { useEffect, useState } from "react";
import { ArticleExampleSchema } from "../../zod/schema.example";

export default function Home() {
  const [articlesExample, setArticlesExample] = useState<ArticleExample[]>([]);

  async function getArticles() {
    const response = await fetch("api/crud.example");
    if (response.ok) {
      const rawArticles = await response.json();

      const articles = ArticleExampleSchema.array().parse(rawArticles.article);
      console.log(articles);
      setArticlesExample(articles);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <CreateExampleForm />
      {articlesExample.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </>
  );
}

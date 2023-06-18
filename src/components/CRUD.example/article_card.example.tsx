import { ArticleExample } from "@prisma/client";

interface ArticleCardProps {
  article: ArticleExample;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600">{article.content}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Publié le {new Date(article.createdAt).toLocaleDateString()}
        </p>
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            article.published
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {article.published ? "Publié" : "Non publié"}
        </span>
      </div>
    </div>
  );
};

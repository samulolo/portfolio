'use client'
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ContentBlock } from "@/lib/posts";

type Item = {
  title: string;
  description: string;
  technologies?: string[];
  date?: string;
  url?: string;
  author?: string;
  content?: ContentBlock[];
};

type Props = {
  id: string;
  apiPath: string;
  isOpenModal: boolean;
  onClick: () => void;
};

export default function ReadItemModal({ onClick, isOpenModal, id, apiPath }: Props) {
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    if (!id) return;

    async function get() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${apiPath}/${id}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          },
        })

        if (!response.ok) {
          throw new Error("Não foi possível carregar o conteúdo");
        }

        const data = await response.json()
        setItem(data)
      } catch (err) {
        console.log("Houve um erro ao obter dados: ", err)
        setError("Não foi possível carregar o conteúdo")
      } finally {
        setLoading(false)
      }
    }
    get()

  }, [id, apiPath])


  return (
    <section className="w-full h-full flex flex-col justify-end">
      <div
        className={`bg-white w-full h-[90dvh] p-4 rounded-t-3xl overflow-y-auto transition-transform duration-500 ease-in-out ${
          isOpenModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-2 pb-3 border-b border-gray-100">
          <button
            type="button"
            className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer active:opacity-60"
            onClick={onClick}
          >
            <ArrowLeft /> Voltar
          </button>
        </div>

        <div className="mt-4 p-2">
          {loading && <p className="text-gray-500">Carregando...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && item && (
            <div className="flex flex-col gap-4">
              {(item.date || item.author) && (
                <span className="text-xs text-gray-400 text-center">
                  {item.author}
                  {item.author && item.date && " · "}
                  {item.date &&
                    new Date(item.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" })}
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900 text-center">{item.title}</h3>

              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 text-center">Tecnologias</span>
                  <ul className="flex justify-center flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <li
                        className="text-xs font-medium text-[#4169E1] bg-[#4169E1]/10 px-2 py-1 rounded-full"
                        key={tech}
                      >
                        #{tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <hr className="border-gray-100" />

              {item.content && item.content.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {item.content.map((block, index) =>
                    block.type === "code" ? (
                      <pre
                        key={index}
                        className="bg-gray-900 text-gray-100 text-xs leading-relaxed rounded-xl p-4 overflow-x-auto"
                      >
                        <code>{block.code}</code>
                      </pre>
                    ) : (
                      <p key={index} className="text-base text-gray-600 leading-relaxed">
                        {block.text}
                      </p>
                    )
                  )}
                </div>
              ) : (
                <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
              )}

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-[#4169E1] px-4 py-3 rounded-xl"
                >
                  Visitar projeto <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

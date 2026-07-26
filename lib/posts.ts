export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Meu primeiro post",
    description: "My first ever blog post",
    date: "2026-01-05",
  },
  {
    id: "post-2",
    title: "Por que escolhi Next.js para meus projetos",
    description: "Comparando Next.js com outras opções e o que me fez optar por ele.",
    date: "2026-02-14",
  },
  {
    id: "post-3",
    title: "Integrando FastAPI com modelos de IA",
    description: "Notas práticas sobre como estruturei uma API para servir modelos de machine learning.",
    date: "2026-04-02",
  },
  {
    id: "post-4",
    title: "Lições aprendidas construindo este portfólio",
    description: "Decisões de design, desafios técnicos e o que eu faria diferente da próxima vez.",
    date: "2026-06-30",
  },
];

export function findPostById(post_id: string): Post | undefined {
  return posts.find((p) => p.id === post_id);
}

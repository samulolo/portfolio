export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
};

export type ProjectSection = {
  category: string;
  projects: Project[];
};

export const projectSections: ProjectSection[] = [
  {
    category: "Web development",
    projects: [
      {
        id: "kutanga",
        title: "Kutanga",
        description: "Marketplace em Angola para encontrar técnicos prestadores de serviço.",
        technologies: ["nextjs", "firebase"],
      },
      {
        id: "kukalakala",
        title: "Kukalakala",
        description: "Plataforma de recrutamento que utiliza IA para encontrar o melhor candidato para uma vaga e aconselha o candidato com dicas de melhoria no currículo.",
        technologies: ["nextjs", "supabase", "tailwind"],
      },
    ],
  },
  {
    category: "IA and Machine Learning",
    projects: [],
  },
];

export function findProjectById(project_id: string): Project | undefined {
  for (const section of projectSections) {
    const project = section.projects.find((p) => p.id === project_id);
    if (project) return project;
  }
  return undefined;
}

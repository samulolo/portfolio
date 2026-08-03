export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
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
        description: "Marketplace mobile-first em Angola que conecta clientes a técnicos prestadores de serviço verificados, com contacto direto por chat ou WhatsApp. Cadastro e uso são gratuitos, sem comissão da plataforma — o pagamento é feito diretamente entre cliente e técnico, e o contacto direto por WhatsApp é liberado após o técnico concluir 10 serviços. Já opera em Luanda, Huambo e Benguela, com planos de expansão para outras províncias.",
        technologies: ["nextjs", "firebase"],
        url: "https://www.kutanga.ao/",
      },
      {
        id: "kukalakala",
        title: "Kukalakala",
        description: "Plataforma de recrutamento que usa IA para conectar candidatos a vagas em Angola. O fluxo vai da candidatura à análise de compatibilidade por IA, passa por mensagens diretas entre candidato e empresa, agendamento de entrevista e decisão final. Além do score de compatibilidade, o candidato recebe feedback com pontos fortes, pontos a melhorar e recomendações práticas para o currículo.",
        technologies: ["nextjs", "supabase", "tailwind"],
        url: "https://kukalakala.com/",
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

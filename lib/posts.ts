export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "code"; language?: string; code: string };

export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  content?: ContentBlock[];
};

export const posts: Post[] = [
  {
    id: "ats-antigos",
    title: "Por que os ATS antigos falham na triagem de candidatos",
    description:
      "Como os sistemas antigos de triagem de currículos (ATS) comparam texto de forma literal — e por que isso penaliza bons candidatos mesmo quando o histórico é compatível com a vaga.",
    date: "2026-08-03",
    author: "Eliseu Samulolo",
    content: [
      {
        type: "paragraph",
        text: "Os sistemas antigos de ATS falham bastante naquilo que é a triagem do candidato: a análise de compatibilidade entre a vaga e o currículo é feita através da comparação direta entre os requisitos da vaga e o conteúdo do currículo do candidato.",
      },
      {
        type: "paragraph",
        text: "Quando a busca é por correspondência exata entre o texto do currículo e os requisitos da vaga, o candidato acaba penalizado — o resultado fica refém do texto do currículo estar escrito exatamente como o recrutador definiu.",
      },
      {
        type: "paragraph",
        text: "Um exemplo de código muito próximo daquilo que os algoritmos de ATS antigos fazem é o seguinte. Dado um conjunto de dados que representa os requisitos de uma vaga e os dados do candidato, temos o seguinte algoritmo:",
      },
      {
        type: "code",
        language: "python",
        code: `def extract_skills(data: list) -> set:
    """Recebe uma lista e retorna um set com apenas as skills únicas não repetidas"""
    return {skill.lower() for skill in data}


def calc_score(
    required: set, candidate_skills: set, weight: float) -> float:
    if not required:
        return 0.0
    return (len(required.intersection(candidate_skills)) / len(required)) * weight * 100


def calc_candidate_score(required: list, candidate: list, desirable: list, required_weight=0.7, wanted_weight=0.3,) -> dict:

    """Calcula o score final do candidato e retorna um dicionário com os scores calculados"""

    required_skills = extract_skills(required)
    nice_to_have_skills = extract_skills(desirable)
    candidate_skills = extract_skills(candidate)

    required_match = calc_score(
        required_skills, candidate_skills, required_weight
    )
    nice_to_have_match = calc_score(
        nice_to_have_skills, candidate_skills, wanted_weight
    )
    final_score = required_match + nice_to_have_match

    return {
        "required_match": required_match,
        "nice_to_have_match": nice_to_have_match,
        "final_score": final_score,
    }


selection_process_data: list = [
    {
        "vaga": {
            "titulo": "Desenvolvedor Full Stack Junior",
            "requisitosObrigatorios": [
                "JavaScript",
                "ReactJS",
                "Node.js",
                "Git",
                "GitHub",
            ],
            "requisitosDesejaveis": ["TypeScript", "Docker"],
        }
    },
    {
        "candidato": {
            "habilidadesTecnicas": [
                "JavaScript",
                "ReactJS",
                "HTML5",
                "CSS3",
                "Git",
            ],
        }
    },
]


if __name__ == "__main__":
    required_skills = selection_process_data[0]["vaga"]["requisitosObrigatorios"]
    candidate_skills = selection_process_data[1]["candidato"]["habilidadesTecnicas"]
    desirable_skills = selection_process_data[0]["vaga"]["requisitosDesejaveis"]

    result = calc_candidate_score(required_skills, candidate_skills, desirable_skills)

    print("--- Resultado da Triagem ATS ---")
    print(f"Match Obrigatório: {result['required_match']:.2f}%")
    print(f"Match Desejável: {result['nice_to_have_match']:.2f}%")
    print(f"Score Final: {result['final_score']:.2f}%")`,
      },
      {
        type: "paragraph",
        text: "Esse código é uma versão simplória de um algoritmo de ATS. Como se pode ver, ele busca apenas a coincidência de palavras presentes nos dois lados — ou seja, se o candidato errar no texto, mesmo tendo experiência real com as habilidades exigidas pela vaga, ele acaba tendo um score baixo, porque a correspondência de palavras não olha o contexto, só a correspondência exata.",
      },
      {
        type: "paragraph",
        text: "Por exemplo: o algoritmo acima não entende, e nunca vai entender, que se uma vaga pede FastAPI e o candidato tem no currículo \"fastapi\" e \"python\", os dois fazem parte do mesmo ecossistema — o que acaba pesando negativamente contra o candidato.",
      },
    ],
  },
];

export function findPostById(post_id: string): Post | undefined {
  return posts.find((p) => p.id === post_id);
}

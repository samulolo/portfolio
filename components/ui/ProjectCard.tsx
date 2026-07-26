import { CircleChevronRight } from "lucide-react"


type CardProps = {
    title: string;
    technologies: string[];
    description: string;
    date?: string;
    onClick: () => void

}


export default function ProjectCard({title, technologies, description, date, onClick} : CardProps){

    const extractTechnologies = function(technologies: string[]){
        return technologies.map((tech, index) => (
            <li
                className="text-xs font-medium text-[#4169E1] bg-[#4169E1]/10 px-2 py-1 rounded-full"
                key={index}
            >
                #{tech}
            </li>
        ))
    }

    const hasTechnology = technologies.length > 0

    return (
        <div className="p-2 py-4 flex flex-col gap-3 border-t border-gray-200">
            {date && (
                <span className="text-xs text-gray-400">
                    {new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" })}
                </span>
            )}
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            {hasTechnology && (
                <ul className="flex flex-wrap gap-2">
                    {extractTechnologies(technologies)}
                </ul>
            )}
            <p className="text-sm text-gray-500 leading-relaxed">
                {description}
            </p>
            <div className="flex justify-end">
                <button onClick={onClick} className="text-[#4169E1] flex items-center gap-2 text-sm">
                    <CircleChevronRight />
                </button>
            </div>
        </div>
    )
}
import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import ReadItemModal from "../ReadItemModal";
import { projectSections } from "@/lib/projects";

export default function ProjectList() {
  const [openModal, setOpenModal] = useState(false);
  const [projectSelected, setProjectSelected] = useState("")

  const handleToggleModal = () =>{
    setOpenModal((prev) => !prev)
  } 


  return (
    <section className="px-4 relative">
      <h4 className="p-2 font-semibold text-xl">Projects</h4>

      {projectSections.map((section) => (
        <div key={section.category} className="mt-5">
          <h5 className="p-2 font-bold">{section.category}</h5>

          {section.projects.length === 0 ? (
            <p className="p-2 text-gray-500">Sem projetos disponíveis</p>
          ) : (
            section.projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                onClick={() => {
                    setProjectSelected(project.id)
                    handleToggleModal()
                }}
              />
            ))
          )}
        </div>
      ))}

      <div
        className={`fixed inset-0 z-50 w-full h-dvh bg-black/75 transition-opacity duration-300 ease-in-out ${
          openModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ReadItemModal
            id={projectSelected}
            apiPath="/api/projects"
            isOpenModal={openModal}
            onClick={handleToggleModal}
        />
      </div>

        
    </section>
  );
}
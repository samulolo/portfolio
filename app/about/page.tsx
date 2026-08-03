'use client'

import ResumeButton from "@/components/ui/ResumeButton"
import Contacts from "@/components/landing/Contacts"

const skills = [
    "Python", "JavaScript", "React", "FastAPI", "Vue.js", "Flask",
    "PostgreSQL", "Supabase", "Docker", "C#", "SQL", "Tailwind CSS",
]

const experience = [
    {
        company: "Nafeta",
        role: "Software Engineer",
        period: "2026 - Present",
        description: "Building a SaaS platform for billing management and automated collections, with a FastAPI + Supabase backend and a React dashboard.",
    },
    {
        company: "Kukalakala",
        role: "Software Engineer",
        period: "2026 - Present",
        description: "AI-powered recruitment platform connecting candidates and companies, with intelligent job matching and candidate screening.",
    },
    {
        company: "Kutanga",
        role: "Software Engineer",
        period: "2025 - Present",
        description: "Service marketplace connecting skilled tradespeople with customers across Angola.",
    },
    {
        company: "EGIS Road Operation Portugal",
        role: "Data Analyst Trainee",
        period: "2024",
        description: "Analyzed road accident datasets and produced data visualization reports using Python (Pandas, NumPy, Matplotlib).",
    },
]

const languages = [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Intermediate" },
    { name: "Spanish", level: "Intermediate" },
]

export default function AboutPage(){

    const downloadCurriculum = function(){
        const link = document.createElement("a")
        link.href = "/eliseu_franco_cv.pdf";
        link.download = "eliseu_franco_cv.pdf"
        link.click()
    }

    return (
        <main className="max-w-5xl mx-auto w-full">
            <section className="w-full">
                <div className="bg-[#4169E1] w-full h-96 flex flex-col items-center justify-center text-white gap-3">
                    <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center">
                        <span className="text-3xl font-bold text-[#4169E1]">ES</span>
                    </div>
                    <div className="text-center">
                        <h6 className="font-bold text-xl">Eliseu Franco Samulolo</h6>
                        <p>Software Engineer &amp; AI enthusiast</p>
                        <p>Bachelor&apos;s in Management and Informatics</p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-5">
                <h4 className="p-2 font-semibold text-xl">About me</h4>
                <p className="p-2 text-gray-600 leading-relaxed">
                    Results-driven Software Engineer with hands-on experience delivering scalable web applications
                    end-to-end. Proficient in Python, JavaScript, React, FastAPI, Vue.js, and Flask, with skills in
                    RESTful API design, relational database modelling, Docker containerisation, and agile/scrum
                    workflows. I combine solid engineering fundamentals with strong business acumen to build
                    user-focused products that create measurable impact.
                </p>

                <div className="p-2 mt-2">
                    <ResumeButton onClick={downloadCurriculum} />
                </div>
            </section>

            <section className="px-4 relative">
                <h4 className="p-2 font-semibold text-xl">Skills</h4>
                <ul className="flex flex-wrap gap-2 p-2">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="text-xs font-medium text-[#4169E1] bg-[#4169E1]/10 px-2 py-1 rounded-full"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="px-4 relative mt-5">
                <h4 className="p-2 font-semibold text-xl">Experience</h4>
                {experience.map((job) => (
                    <div key={job.company} className="p-2 py-4 flex flex-col gap-2 border-t border-gray-200">
                        <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-base font-semibold text-gray-900">{job.role} · {job.company}</h3>
                        </div>
                        <span className="text-xs text-gray-400">{job.period}</span>
                        <p className="text-sm text-gray-500 leading-relaxed">{job.description}</p>
                    </div>
                ))}
            </section>

            <section className="px-4 relative mt-5">
                <h4 className="p-2 font-semibold text-xl">Education</h4>
                <div className="p-2 py-4 flex flex-col gap-2 border-t border-gray-200">
                    <h3 className="text-base font-semibold text-gray-900">Bachelor of Science in Management and Informatics</h3>
                    <span className="text-xs text-gray-400">Graduated 2024</span>
                </div>
            </section>

            <section className="px-4 relative mt-5">
                <h4 className="p-2 font-semibold text-xl">Languages</h4>
                <ul className="flex flex-wrap gap-2 p-2">
                    {languages.map((language) => (
                        <li
                            key={language.name}
                            className="text-xs font-medium text-[#4169E1] bg-[#4169E1]/10 px-2 py-1 rounded-full"
                        >
                            {language.name} — {language.level}
                        </li>
                    ))}
                </ul>
            </section>

            <Contacts />
        </main>
    )
}

import ResumeButton from "../ui/ResumeButton"



const myName = "Eliseu Samulolo"

const stats = [
    { value: "2+", label: "Years of experience" },
    { value: "2", label: "Products in production" },
]

export default function HeroSection(){

    const downloaCurriculum = function(){

        const link = document.createElement("a")
        link.href = "/eliseu_franco_cv.pdf";
        link.download = "eliseu_franco_cv.pdf"

        link.click()

    }

    return (
        <section className="relative px-4 py-5 lg:py-20 w-full">
            {/* vertical rail, desktop only */}
            <div className="hidden lg:flex absolute left-0 top-20 bottom-20 w-8 flex-col items-center gap-4">
                <span className="text-xs font-medium tracking-widest text-gray-400 [writing-mode:vertical-lr] rotate-180">
                    Software Engineer
                </span>
                <span className="w-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-400">{new Date().getFullYear()}</span>
            </div>

            <div className="lg:pl-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
                <div>
                    <div className="hidden lg:flex gap-10 mb-10">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-2 lg:p-0">
                        <span className="lg:block lg:text-sm lg:uppercase lg:tracking-widest lg:text-gray-400">Hello, it is</span>
                        <h2 className="font-bold text-xl lg:text-6xl lg:tracking-tight text-[#4169E1] lg:mt-3">{myName}</h2>
                        <p className="text-gray-600 lg:text-base lg:max-w-md lg:mt-5">I build clean, fast, and useful web applications, combining React interfaces with Python/FastApi backends and well-structured databases.</p>
                    </div>

                    <div className="p-2 w-full lg:max-w-xs lg:mt-8 lg:p-0">
                        <ResumeButton
                        onClick={downloaCurriculum}/>
                    </div>
                </div>

                <div className="hidden lg:flex relative h-72 w-72 shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#4169E1]/10" />
                    <div className="relative h-56 w-56 rounded-3xl bg-[#4169E1] flex items-center justify-center text-white shadow-xl shadow-blue-100">
                        <span className="text-6xl font-bold tracking-tight">ES</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
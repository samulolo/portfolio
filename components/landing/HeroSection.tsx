import ResumeButton from "../ui/ResumeButton"



const myName = "Eliseu Samulolo"


export default function HeroSection(){

    const downloaCurriculum = function(){

        const link = document.createElement("a")
        link.href = "/eliseu_franco_cv.pdf";
        link.download = "eliseu_franco_cv.pdf"

        link.click()
        
    }

    return (
        <section className="px-4 py-5 w-full">
            <div className="p-2">
                <span>Hello, it's</span>
                <h2 className="font-bold text-xl text-[#4169E1]">{myName}</h2>
                <p className="text-gray-600">I build clean, fast, and useful web applications, combining React interfaces with Python/FastApi backends and well-structured databases.</p>
            </div>
            <div className="p-2 w-full">
                <ResumeButton
                onClick={downloaCurriculum}/>
            </div>
        </section>
    )
}
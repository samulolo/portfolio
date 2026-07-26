

type Prop = {
    onClick : () => void;
}



export default function ResumeButton({onClick} : Prop){

    return (
        <button
        onClick={onClick}
        className="bg-[#4169E1] py-5 w-full rounded-xl font-semibold text-white flex flex-items justify-center gap-2">
            Find my resume
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="lucide lucide-circle-arrow-down-icon lucide-circle-arrow-down animate-bounce">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/></svg></button>
    )
}
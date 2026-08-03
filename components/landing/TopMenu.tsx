import Link from "next/link"

const brand = { title: 'OnBoard', home: '/' }

const navLinks = [
    { label: 'About', url: '/about' },
    { label: 'Blog', url: '/blog' },
]

export default function TopMenu(){

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <nav className="px-4 py-4 max-w-5xl mx-auto flex items-center justify-between">
                <Link
                    href={brand.home}
                    className="flex items-center gap-2 font-semibold text-lg tracking-tight text-gray-900"
                >
                    <span className="inline-block h-2 w-2 rounded-full bg-[#4169E1]" />
                    {brand.title}
                </Link>
                <div className="flex items-center gap-6">
                    {
                        navLinks.map(link => (
                            <Link
                                key={link.label}
                                href={link.url}
                                className="text-sm font-medium text-gray-500 transition-colors hover:text-[#4169E1]"
                            >
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}
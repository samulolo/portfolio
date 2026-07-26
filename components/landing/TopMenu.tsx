import Link from "next/link"

const menuOptions = [
    {
        title: 'OnBoard',
        home: '/',
        options : [ {label : 'about', url: '#'}, {label : 'blog', url: '/blog', color: ''}]
    },

]

export default function TopMenu(){

    return (
        <header className="">
            <nav className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                <h1 className="font-semibold text-xl">
                    {
                        menuOptions.map(nav => <Link href={nav.home} key={nav.title}>{nav.title}</Link>)
                    }
                </h1>
                <div className="flex items-center gap-2">
                    {
                        menuOptions[0].options.map(option => <Link key={option.label} href={option.url}>{option.label}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}
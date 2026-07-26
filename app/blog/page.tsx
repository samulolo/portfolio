'use client'

import { useState } from "react"
import Link from "next/link"
import ProjectCard from "@/components/ui/ProjectCard"
import ReadItemModal from "@/components/ReadItemModal"
import { posts } from "@/lib/posts"


export default function BlogPage(){
    const [openModal, setOpenModal] = useState(false);
    const [postSelected, setPostSelected] = useState("");

    const handleToggleModal = () => {
        setOpenModal((prev) => !prev)
    }

    return (
        <main className="">
            <section>
                <div className="bg-[#4169E1] px-4 py-8 flex flex-col gap-2 justify-center">
                    <h1 className="text-white text-2xl font-bold">Blog</h1>
                    <p className="text-white/80">Here I share everything I'M learning</p>
                    <p className="text-white/80">I hope you enjoy and feel free to give your opinion about </p>
                </div>
            </section>

            <section className="px-4 relative">
                <h4 className="p-2 font-semibold text-xl">Posts</h4>

                <Link
                    href="/blog/mdx-example"
                    className="block mx-2 mb-2 p-3 rounded-xl border border-dashed border-[#4169E1]/40 bg-[#4169E1]/5 text-sm text-[#4169E1] font-medium"
                >
                    Exemplo: post escrito em MDX →
                </Link>

                {posts.map((post) => (
                    <ProjectCard
                        key={post.id}
                        title={post.title}
                        technologies={[]}
                        description={post.description}
                        date={post.date}
                        onClick={() => {
                            setPostSelected(post.id)
                            handleToggleModal()
                        }}
                    />
                ))}

                <div
                    className={`fixed inset-0 z-50 w-full h-dvh bg-black/75 transition-opacity duration-300 ease-in-out ${
                        openModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <ReadItemModal
                        id={postSelected}
                        apiPath="/api/posts"
                        isOpenModal={openModal}
                        onClick={handleToggleModal}
                    />
                </div>
            </section>
        </main>
    )
}

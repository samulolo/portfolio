import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ExemploMdx from "@/content/posts/exemplo-mdx.mdx";

export default function MdxExamplePage() {
  return (
    <main className="px-4 py-4">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-gray-700 font-medium w-fit pb-3 border-b border-gray-100 mb-6"
      >
        <ArrowLeft /> Voltar
      </Link>

      <ExemploMdx />
    </main>
  );
}

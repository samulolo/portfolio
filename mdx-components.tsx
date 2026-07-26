import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">{children}</h2>,
  p: ({ children }) => <p className="text-base text-gray-600 leading-relaxed mb-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside text-gray-600 mb-4 flex flex-col gap-1">{children}</ul>,
  code: ({ children }) => (
    <code className="text-sm bg-[#4169E1]/10 text-[#4169E1] px-1.5 py-0.5 rounded">{children}</code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}

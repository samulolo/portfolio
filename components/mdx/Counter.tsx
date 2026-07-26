'use client'
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount((prev) => prev + 1)}
      className="text-sm font-medium text-[#4169E1] bg-[#4169E1]/10 px-3 py-1.5 rounded-full cursor-pointer"
    >
      Cliquei {count} {count === 1 ? "vez" : "vezes"}
    </button>
  );
}

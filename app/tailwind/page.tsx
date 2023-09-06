"use client";
import React, { useState } from "react";

interface TailwindProps {
  className?: string;
}

const colors = ["rose", "green", "blue"];
const possible = ["bg-rose-400", "bg-green-400", "bg-blue-400"];

export default function Tailwind({ className }: TailwindProps) {
  const [color, setColor] = useState("rose");
  return (
    <div className="flex min-h-screen items-center  gap-4 flex-col py-10 text-white bg-slate-600">
      <button
        className={`py-1 px-6 rounded-md bg-violet-600 text-black ${className}`}
      >
        Subscribe
      </button>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className={`bg-${color}-400`}
      >
        <option value="">choose</option>
        {colors.map((color, idx) => {
          return (
            <option key={idx} value={color}>
              {color}
            </option>
          );
        })}
      </select>
      <section>
        <div className="w-20 h-20 bg-slate-700 rounded-lg shadow-neon"></div>
      </section>
      <section className="grid mt-12 place-items-center peer group h-40 w-40 bg-blue-400 hover:bg-purple-400 transition-colors duration-300">
        <div className="h-5 w-5 bg-black group-hover:bg-red-600 transition-colors duration-300"></div>
        <div className="h-5 w-5 bg-black group-hover:bg-blue-600 transition-colors duration-300"></div>
      </section>
      <div className="h-40 w-40 bg-green-400 peer-hover:bg-orange-500 transition-colors duration-300"></div>

      <section>
        <div className="animate-ping">Like</div>
        <div className="animate-pulse">Subscribe</div>
        <div className="animate-bounce">Hit the 🔔️</div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className=" h-40 w-80 bg-purple-400"></div>
        <div className=" h-40 w-80 bg-purple-400"></div>
        <div className=" h-40 w-80 bg-purple-400"></div>
        <div className=" h-40 w-80 bg-purple-400"></div>
        <div className=" h-40 w-80 bg-purple-400"></div>
        <div className=" h-40 w-80 bg-purple-400"></div>
      </section>
    </div>
  );
}

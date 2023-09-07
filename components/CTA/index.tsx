import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section className="flex flex-col items-center justify-center max-w-xl pb-12 gap-6 mx-auto lg:flex-row">
      <Link
        href="/"
        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-blue-400 border-2 border-blue-400 rounded-full inline-flex hover:bg-transparent hover:border-blue-400 hover:text-blue-400 focus:outline-none lg:w-auto focus-visible:outline-blue-400 text-sm focus-visible:ring-blue-400"
      >
        Get Started
      </Link>
      <Link
        href="/about"
        className="inline-flex items-center justify-center text-sm font-semibold text-blue-400 duration-200 hover:text-blue-600 focus:outline-none focus-visible:outline-gray-600"
      >
        Learn More &rarr;
      </Link>
    </section>
  );
}

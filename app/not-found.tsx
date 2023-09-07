"use client";
import Container from "@/components/Container";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container>
      <section className="mt-[70px] min-h-[70vh] px-5">
        <div className="justify-center w-full text-center lg:p-10 mx-auto">
          <div className="justify-center w-full mx-auto">
            <p className="text-5xl font-bold tracking-tight text-blue-400 lg:text-9xl">
              404
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
              Please check the URL in the address bar and try again
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <button
              onClick={() => router.push("/")}
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-blue-400 border-2 border-blue-400 rounded-full nline-flex hover:bg-transparent hover:border-blue-400 hover:text-blue-400 focus:outline-none lg:w-auto focus-visible:outline-blue-400 text-sm focus-visible:ring-blue-400"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}

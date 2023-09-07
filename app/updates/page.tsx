import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
export default function Updates() {
  return (
    <div>
      <Container>
        <section className="items-center justify-center flex h-[75vh]">
          <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div>
                <span className="w-auto px-6 py-1 rounded-full bg-blue-50">
                  <span className="text-sm font-medium text-blue-400">
                    Version 1.0.0
                  </span>
                </span>
                <p className="mt-8 text-3xl font-extrabold tracking-tight text-blue-400 lg:text-6xl">
                  KETT &trade;
                </p>
                <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-blue-300">
                  KETT is a simple tool to showcase how you can use the web,
                  your interactions and insights
                </p>
              </div>

              <Link
                href="/"
                className="items-center mt-8 text-lg justify-center w-full px-6 py-3 text-center text-white duration-200 bg-blue-400 border-2 border-blue-400 rounded-full inline-flex hover:bg-transparent hover:border-blue-400 hover:text-blue-400 focus:outline-none lg:w-auto focus-visible:outline-blue-400  focus-visible:ring-blue-400"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

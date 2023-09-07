import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { v4 as uuidv4 } from "uuid";

const links = [
  { id: uuidv4(), title: "Updates", href: "/updates" },
  { id: uuidv4(), title: "Mentions", href: "/mentions" },
  { id: uuidv4(), title: "Team", href: "/team" },
  { id: uuidv4(), title: "Get Started", href: "/" },
];
export const metadata: Metadata = {
  title: "About",
  description:
    "KETT - tracking software errors, bugs and issues in your software products ",
};

export default function About() {
  return (
    <div>
      <Container>
        <section className="bg-neutral-50 mt-4 min-h-[75vh]">
          <div className="relative items-center w-full px-5 py-12 mx-auto lg:pt-24 lg:px-32 max-w-7xl md:px-12">
            <div>
              <p className="text-blue-400 tracking-tighter font-medium font-serif lg:text-4xl text-2xl">
                KETT<span className="font-bold">&trade;</span> - tracking
                software errors, bugs and issues in your software products
                report errors.
              </p>
              <p className="lg:text-lg tracking-wide leading-8 max-w-5xl mt-8 text-gray-500 text-base">
                The tool connects a website by adding the issues, errors and
                issues on KETT platform to allow you and the team access this
                information via a dashboard. KETT API allows programmatic access
                of all issues interactions from a website&apos;s URL.
                <span className="block mt-3">
                  It provides information about the type of interaction and the
                  person&apos;s profile avatar. The task is to connect the
                  website to KETT and display a list of issues and errors on the
                  platform.
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {links.map((link) => {
                const { id, href, title } = link;
                return (
                  <Link
                    key={id}
                    href={href}
                    className="text-blue-400 bg-blue-50 text-sm px-4 hover:border-blue-400 border hover:text-blue-400 inline-flex items-center py-1 rounded-full"
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

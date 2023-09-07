import React from "react";
import Container from "../Container";
import Link from "next/link";
import Logo from "../Navbar/Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t-[1px] border-neutral-50">
      <Container>
        <h2 className="sr-only">Footer</h2>
        <div className="px-4 py-12 mx-auto max-w-7xl">
          <div className="flex flex-col items-baseline space-y-6">
            <div className="mx-auto">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="mx-auto">
              <span className="mx-auto mt-2 text-xs text-gray-500">
                Copyright &copy; {new Date().getFullYear()}, KETT. All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

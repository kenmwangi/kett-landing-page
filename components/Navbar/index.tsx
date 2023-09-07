import React from "react";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Container from "../Container";
import Login from "./Login";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <section className="relative bg-white p-4 lg:px-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="block w-1/3 md:hidden">
            <MobileMenu />
          </div>
          <Logo />
          <div className="hidden w-1/3 md:flex">
            <UserMenu />
          </div>
          <Login />
        </div>
      </Container>
    </section>
  );
}

"use client";
import { navLinks } from "@/data/navLinks";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export default function MobileMenu() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathName, searchParams]);
  return (
    <div>
      <button
        onClick={openMobileMenu}
        aria-label="Open Mobile Menu"
        data-testid="open-mobile-menu"
        className="md:hidden"
      >
        <AiOutlineMenu size={24} className="text-blue-400" />
      </button>

      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="tranblue-x-[-100%]"
            enterTo="tranblue-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="tranblue-x-0"
            leaveTo="tranblue-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 h-full w-full flex flex-col bg-white pb-6">
              <div className="p-4">
                <button
                  className="mb-4"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                  data-testid="close-mobile-menu"
                >
                  <GrClose
                    size={23}
                    className="h-6 w-6 text-blue-400 bg-neutral-50 rounded-full"
                  />
                </button>

                {/* Nav Links */}
                <ul className="flex flex-col gap-4">
                  {navLinks.map((navLink) => {
                    const { id, href, title } = navLink;
                    return (
                      <li key={id}>
                        <Link
                          href={href}
                          className="bg-transparent text-blue-400 hover:text-blue-500 hover:bg-neutral-50 py-0.5 px-2"
                        >
                          {title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}

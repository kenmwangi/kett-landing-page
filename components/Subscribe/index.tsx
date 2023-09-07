import Link from "next/link";
import React from "react";

export default function Subscribe() {
  return (
    <section className="object-top overflow-hidden bg-blue-50 bg-cover">
      <div>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 bg-white rounded-3xl md:py-12 md:px-12 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <p className="text-3xl lg:text-5xl tracking-tighter text-blue-400 ">
                Get New Updates
              </p>
              <p className="max-w-3xl mt-3 text-base lg:text-lg leading-6 text-gray-500">
                Sign up for our newsletter to stay up to date.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form
                className="flex flex-col items-center justify-center max-w-sm mx-auto"
                action=""
              >
                <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                  <input
                    name="email"
                    type="email"
                    className="block w-full px-4 py-2 text-sm font-medium text-blue-500 placeholder-blue-200 bg-white border border-blue-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300/50 disabled:opacity-50"
                    placeholder="Enter your email..."
                  />
                  <button
                    disabled
                    type="button"
                    className="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-blue-500 border-2 border-blue-500 rounded-full nline-flex hover:bg-transparent hover:border-blue-500 hover:text-blue-500 focus:outline-none lg:w-auto focus-visible:outline-blue-500 text-sm focus-visible:ring-blue-500 cursor-not-allowed  disabled:opacity-75"
                  >
                    <div className="relative"></div>
                    Subscribe
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-auto ml-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="justify-center mx-auto sm:max-w-lg sm:flex">
                <p className="mt-6 text-xs text-gray-600">
                  By subscribing, you agree to this site&apos;s
                  <Link
                    className="mx-1 text-blue-500 hover:text-blue-600 transition-colors unerline"
                    target="_blank"
                    href="/"
                  >
                    Terms of Service
                  </Link>
                  and
                  <Link
                    className="ml-1 text-blue-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

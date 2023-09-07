import React from "react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="items-center w-full px-5 pt-24 pb-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="w-full lg:max-w-5xl p-10 mx-auto text-center">
          <div>
            <p className="bg-blue-50 text-blue-500 text-xs rounded-full max-w-fit mx-auto px-1.5 text-center">
              work in progress
            </p>
            <p className="my-8 text-2xl lg:text-5xl font-medium tracking-tighter text-black">
              Easy record of Software Errors & Issues
            </p>
            <p className="lg:max-w-3xl mx-auto mt-6 text-base lg:text-lg tracking-tight text-gray-500">
              The KETT platform report errors on websites or applications, and
              users can access this information via a dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

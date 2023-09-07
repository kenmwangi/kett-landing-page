import React from "react";
import Link from "next/link";
import { BiNetworkChart } from "react-icons/bi";
export default function Logo() {
  return (
    <div className="">
      {/* <BiNetworkChart
        size={32}
        className="text-white bg-blue-300 rounded-full"
      /> */}
      <h2 className="font-bold text-2xl text-blue-400">
        <Link href="/">KETT.</Link>
      </h2>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";

export default async function Login() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {!session ? (
        <Link
          href="/api/auth/signin"
          className="items-center justify-center w-full px-4 py-1.5 text-center text-white duration-200 bg-blue-400 border-2 border-blue-400 rounded-full inline-flex hover:bg-transparent hover:border-blue-400 hover:text-blue-400 focus:outline-none lg:w-auto focus-visible:outline-blue-400 text-sm focus-visible:ring-blue-400"
        >
          Get Started
        </Link>
      ) : (
        <div className="flex items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            Hello,
            <span className="text-blue-400 ml-2 font-semibold">
              {session.user?.name}
            </span>
          </p>
          <Link
            href="/api/auth/signout"
            className="text-xs text-rose-500 font-bold hover:underline transition-all"
          >
            Sign Out
          </Link>
          <Image
            src={session.user?.image as string}
            height={30}
            width={30}
            className="object-cover rounded-full grayscale"
            alt={session.user?.name as string}
          />
        </div>
      )}
    </div>
  );
}

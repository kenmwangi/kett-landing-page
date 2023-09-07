import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";
import React, { useReducer } from "react";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  const content = (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        {users.map((user) => {
          return (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="text-gray-500 hover:text-blue-400 transition-colors "
            >
              {user.name}
            </Link>
          );
        })}
      </div>
      <h2 className="my-4 items-end">
        <Link
          href="/"
          className="bg-neutral-50 text-blue-400 p-2 rounded-sm hover:bg-neutral-100 hover:text-blue-500 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </h2>
    </section>
  );

  return (
    <div className="">
      <section className="container mx-auto px-4 lg:px-0">
        <h2 className="text-2xl mb-5 lg:text-4xl font-semibold text-blue-400">
          List of Users
        </h2>

        {content}
      </section>
    </div>
  );
}

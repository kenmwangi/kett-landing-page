import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

// metadata

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is user data`,
  };
}
export default async function UserPage({ params: { userId } }: Params) {
  // get this data in parallel
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPost(userId);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <section className="container mx-auto px-4 lg:px-0 mt-5">
      <div className="bg-neutral-50 text-blue-300 p-2 flex flex-col mb-5">
        <h2 className="text-blue-500 mb-4 font-semibold text-3xl">
          📑️ {user.name}
        </h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          {userPosts.map((userPost) => {
            return <p key={userPost.id}>{userPost.body}</p>;
          })}
        </Suspense>
      </div>
      <Link
        href="/users"
        className=" bg-neutral-100 font-semibold rounded-lg text-blue-500 hover:text-blue-600 hover:bg-neutral-100 p-1"
      >
        &larr; Users
      </Link>
    </section>
  );
}

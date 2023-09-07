import React from "react";
import Container from "@/components/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignIn from "../(auth)/signin/page";

export default async function Tracker() {
  const session = await getServerSession();
  if (!session) return <SignIn />;
  return (
    <div>
      <Container>
        <h2 className="text-2xl lg:text-4xl">KETT Dashboard</h2>
      </Container>
    </div>
  );
}

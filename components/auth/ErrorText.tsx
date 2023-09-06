import React from "react";

interface ErrorTextProps {
  children?: string;
}

export default function ErrorText({ children }: ErrorTextProps) {
  return <>{children && <p className="text-xs text-red-500">{children}</p>}</>;
}

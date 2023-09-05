import React from "react";

type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  type,
  autoFocus,
  variant,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Click me
    </button>
  );
}

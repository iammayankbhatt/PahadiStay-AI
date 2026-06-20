/**
 * Button Component
 *
 * Props:
 * - children: React Node
 * - variant: primary | secondary | outline
 * - onClick: click handler
 */

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-green-700 text-white hover:bg-green-800",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-800",
    outline:
      "border border-green-700 text-green-700 hover:bg-green-50",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 font-medium transition ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
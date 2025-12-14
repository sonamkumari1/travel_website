import Image from "next/image";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string; // allow any Tailwind class
};

const Button = ({ type = "button", title, icon, variant = "" }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full border px-6 py-3 transition-all ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="text-[16px] font-[700] whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;

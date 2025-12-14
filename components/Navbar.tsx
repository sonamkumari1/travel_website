import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <nav className=" flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 realtive z-30 py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/tlogo.png" alt="Logo" width={100} height={80} />
      </Link>

      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-[16px] font-[400] flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-green-800 px-5 py-3 text-white transition-all hover:bg-black"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}

export default Navbar;

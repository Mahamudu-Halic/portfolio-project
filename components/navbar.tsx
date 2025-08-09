"use client";
import { name } from "@/constants";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl w-full">
      <nav className="flex justify-between items-center container !py-6">
        <Link href="/" className="text-gray-300">
          <h3 className="font-bebas-neue text-3xl font-bold">{name}</h3>
        </Link>
        <ul className="hidden lg:flex gap-4 items-center text-gray-400">
          <li>
            <Link href="/#work">Work</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button aria-label="Toggle menu" type="button">
              <AlignJustify />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-black-100 lg:hidden">
            <ul className="flex flex-col gap-10 text-lg mt-20 px-10">
              <li className="hover:text-green-400">
                <Link href="/#work" onClick={() => setOpen(false)}>
                  Work
                </Link>
              </li>
              <li className="hover:text-green-400">
                <Link href="/#about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li className="hover:text-green-400">
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;

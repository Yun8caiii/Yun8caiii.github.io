import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ModeToggle from "@/components/nav/mode-toggle";
import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  return (
    <Menubar className="sticky top-0 z-50 flex items-center rounded-none">
      <div className="flex-none">
        <MenubarMenu>
          <Link href="/">
            <Image
              src="/face.png" 
              alt="Yun Cai"
              width={28} // Width in pixels
              height={28} // Height in pixels
              className="rounded-lg shadow-lg"
            />
          </Link>
        </MenubarMenu>
      </div>
      <div className="flex flex-grow items-center justify-end space-x-6 text-base font-normal">
        <MenubarMenu>
          <MenubarTrigger className="text-base font-normal">
            <Link href="/">
              <span>home</span>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-base font-normal">
            <Link href="/projects">
              <span>projects</span>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-base font-normal">
            <Link href="/contact">
              <span>contact</span>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-base font-normal">
            <a
              href="https://docs.google.com/document/d/1f3-ErB9qMv5Hu2YMi4JRlhM0pJHN7P2I1RhQ4kN_1oo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>resume</span>
            </a>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex flex-grow items-center justify-end gap-1">
        <MenubarMenu>
          <ModeToggle />
        </MenubarMenu>
      </div>
    </Menubar>
  );
}

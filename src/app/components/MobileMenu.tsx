"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import React from "react";
import { navigationItems } from "./Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/toggle-light-black";
import { LanguageSwitcher } from "@/src/app/components/LanguageSwitcher";

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-3 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-sm">
        <DialogTitle>
          <VisuallyHidden>Mobile navigation menu</VisuallyHidden>
        </DialogTitle>
        <div className="mt-5 flex flex-col space-y-2">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                pathname === item.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-75",
                "group flex items-center px-2 py-2 text-md font-medium rounded-md"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 justify-center align-middle">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
        <div>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

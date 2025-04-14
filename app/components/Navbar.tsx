"use client";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";
import { MobileMenu } from "./MobileMenu";
import { ModeToggle } from "@/components/ui/toggle-light-black";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "@/lib/181n";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Guestbook",
    href: "/guestbook",
  },
  {
    name: "Projects",
    href: "/project",
  },
];

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12 items-center">
      {/* Left Logo */}
      <div className="col-span-6 md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            {t("nav.firstname")}{" "}
            <span className="text-blue-400">{t("nav.lastname")}</span>
          </h1>
        </Link>
      </div>

      {/* Navigation Menu - Large Screens */}
      <div className="hidden sm:flex justify-center col-span-6 md:col-span-6">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href}>
                    {t(`nav.${item.name.toLowerCase()}`)}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Side: Language Switcher, Mode Toggle, Contact Button */}
      <div className="flex items-center justify-end md:col-span-3 col-span-6 gap-4 ">
        <div className="flex items-center gap-4 ">
          <div className=" hidden sm:block">
            <div className="flex gap-5">
              <ModeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Button for larger screens */}
          <Button className="hidden sm:block">{t("nav.contact")}</Button>

          {/* Mobile Menu for smaller screens */}
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/" },
    { label: "Products", href: "/" },
    { label: "Blogs", href: "/" },
    { label: "Contact Us", href: "/" },
    { label: "Request a Quote", href: "/" },
  ];

  const isMenuActive = (href) => {
    if (href === "/") return pathname === "/##"; /* need to change */
    return pathname.startsWith(href);
  };

  return (
    <>
      {menuItems.map((item) => (
        <li className="menu-item" key={item.href}>
          <Link
            href={item.href}
            className={`item-link ${isMenuActive(item.href) ? "menuActive" : ""}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

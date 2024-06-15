'use client'
import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
 interface paths{
    href:string,
    description:string
}
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const path = usePathname();
  const routes: paths[] = [
    {
      href: "/",
      description: "Dashboard",
    },
    {
      href: "/users",
      description: "users",
    },
    {
        href: "/products",
        description: "Products",
      },
    {
      href: "/settings",
      description: "Settings",
    },
  ];

  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 border p-5 ",
        className
      )}
      {...props}
    >
      {routes.map((route, index) => {
        return (
          <Link key={index}
            href={route.href}
            className={`${route.href===path?'bg-black text-white':'text-black'} p-3 text-sm rounded-md font-medium transition-colors hover:text-gray-500`}
          >
            {route.description}
          </Link>
        );
      })}
    </nav>
  );
}

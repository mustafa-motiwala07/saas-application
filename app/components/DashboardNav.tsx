"use client"
import { cn } from "@/lib/utils"
import { CreditCard, Home, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "./UserNav"



export default function DashboardNav() {
    const pathname = usePathname();
    console.log(pathname);
    return(
        <nav className="grid items-start gap-2">
            {navItems.map((items, index) => (
                <Link key={index} href={items.href}>
                    <span className={cn (
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground", 
                        pathname === items.href ? 'bg-accent' : "bg-transparent"
                    )}>
                        <items.icon className="mr-2 h-4 w-4 text-primary" />
                        <span>{items.name}</span>
                    </span>
                </Link>
            ))}
        </nav>
    )
}
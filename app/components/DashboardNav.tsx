import { CreditCard, Home, Settings } from "lucide-react"
import Link from "next/link"

export const navItems = [
    {name: 'Home', href:'/dashboard', icon: Home},
    {name: 'Settings', href:'/dashboard/settings', icon: Settings},
    {name: 'Billing', href:'/dashboard/billing', icon: CreditCard}
]

export default function DashboardNav() {
    return(
        <nav className="grid items-start gap-2">
            {navItems.map((items, index) => (
                <Link key={index} href={items.href}>
                    <span>
                        <items.icon className="mr-2 h-4 w-4" />
                        <span>{items.name}</span>
                    </span>
                </Link>
            ))}
        </nav>
    )
}
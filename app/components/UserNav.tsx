import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Ghost } from "lucide-react";

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full ">
                    <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage  src="https://github.com/shadcn.png" alt=""/>
                        <AvatarFallback>Jan</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="">

                    </div>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
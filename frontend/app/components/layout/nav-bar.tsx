import Image from "next/image";

import logo from "@/app/assets/logo.png";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function NavBar() {
    const menuItems = [
        {
            label: "Platform",
            code: "platform",
            href: "/"
        },
        {
            label: "Templates",
            code: "templates",
            href: "/templates"
        }
    ]
    return (
        <div id="nav-bar" className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-3 shrink-0">
                    <Image
                        src={logo}
                        alt="logo"
                        width={36}
                        height={36}
                        priority
                        className="rounded-lg"
                    />
                    <span className="font-headline text-xl font-bold tracking-tighter text-foreground">
                        Taste UI
                    </span>
                </div>

                <nav className="hidden md:flex items-center justify-center grow px-8 gap-1">
                    {menuItems.map((item) => (
                        <div
                            key={item.code}
                            className={cn(
                                "px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md",
                                "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            )}
                        >
                            {item.label}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground">
                        Sign In
                    </Button>
                    <Button size="sm" className="rounded">
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}
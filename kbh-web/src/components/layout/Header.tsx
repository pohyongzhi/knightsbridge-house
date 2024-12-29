import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className="flex justify-between py-5">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/images/logo/logo.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>
                <div className="hidden md:flex justify-evenly items-center gap-2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    About Us
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[400px]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/mission"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Mission
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Learn about our values
                                                        and goals
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/team"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Team
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Meet our leadership team
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Academic
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[400px]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/mission"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Mission
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Learn about our values
                                                        and goals
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/team"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Team
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Meet our leadership team
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Student Life
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[400px]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/mission"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Mission
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Learn about our values
                                                        and goals
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/team"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Team
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Meet our leadership team
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Admission
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 w-[400px]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/mission"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Mission
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Learn about our values
                                                        and goals
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/about/team"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium">
                                                        Our Team
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Meet our leadership team
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <NavigationMenuViewport />
                    </NavigationMenu>
                    <Button variant="default" size="default">
                        Contact us
                    </Button>
                </div>
            </header>
        </>
    );
}

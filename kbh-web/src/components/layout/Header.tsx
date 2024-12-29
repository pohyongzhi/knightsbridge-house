import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
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
                                <NavigationMenuTrigger>
                                    Item One
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>
                                        Link
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Item Two
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>
                                        Link
                                    </NavigationMenuLink>
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

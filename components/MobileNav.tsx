'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { Link } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"


const MobileNav = ({user}: MobileNavProps) => {
  return (
    <section className="w-ful max-w-[264px]">
        <Sheet>
        <SheetTrigger>
            <Image
                src="/icons/corvo.svg"
                width={30}
                height={30}
                alt="menu"
                className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
            <Link href="/"
            className="mb-12
            flex
            cursor-pointer
            items-center gap-2">
                <Image
                    src="/icons/corvo.svg"
                    width={34}
                    height={34}
                    alt="Logo"
                />
                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                    Corvo do Investimento
                </h1>
            </Link>

            {sidebarLinks.map((item) => {
                const pathname = usePathname();
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link href={item.route}
                    key={item.label}
                    className={cn('sidebar-link', {
                        'bg-bank-gradient': isActive
                    })}
                    >
                        <div className="relative size-6">
                         <Image
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            className={cn({
                                'brightness [3] invert-0':
                                isActive
                            })}
                            />
                        </div>
                        <p className={cn('sidebar-link-label', {
                            '!text-white':
                            isActive })}>
                            {item.label}
                        </p>   
                    </Link>

                )
            })}
        </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav
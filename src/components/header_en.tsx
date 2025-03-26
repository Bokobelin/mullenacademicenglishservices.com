import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header_en() {
    return (
        <header className="w-full flex items-center flex-col justify-center gap-4 bg-red-400 pl-12 pt-12">
            <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={80}
                priority
            />
            <div className="flex flex-row items-center">
                <Button variant="link"><Link href="/">Home</Link></Button>
                <Button variant="link"><Link href="/en/about">About</Link></Button>
                <Button variant="link"><Link href="/en/pricing">Pricing</Link></Button>
                <Button variant="link"><Link href="/en/portfolio">Portfolio</Link></Button>
            </div>
        </header>
    );
}

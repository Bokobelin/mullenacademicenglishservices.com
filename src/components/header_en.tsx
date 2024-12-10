import Image from "next/image";
import { Button } from "./ui/button";

export default function Header_en() {
    return (
        <header className="w-full flex items-center flex-col justify-center gap-4 bg-red-400 pl-12 pt-12">
            <Image
                src="/logo.png"
                alt="Logo"
                width={127}
                height={80}
                priority
            />
            <div className="flex flex-col items-center">
                <Button variant="link"><a href="/">Home</a></Button>
            </div>
        </header>
    );
}

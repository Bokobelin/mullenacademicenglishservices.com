import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-center gap-4">
            <Image
                src="/logo.png"
                alt="Logo"
                width={127}
                height={80}
                priority
            />
        </header>
    );
}

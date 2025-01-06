import Footer from "@/components/footer";
import Header_en from "@/components/header_en";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full mx-4">
        <div className="flex w-full items-center justify-between px-4">
          <Header_en />
          <Link href="/fr/pricing" className="pr-4 pb-24 self-end">Français</Link>
        </div>
        <div className="pl-12 pr-12 w-full bg-cyan-950 items-center flex flex-col pb-12 px-32">
            <h1 className="text-5xl font-bold font-forum-regular text-red-400 text-center w-full my-10">Pricing</h1>
            <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }} className="flex flex-col gap-4">
                <li className="text-red-400 text-xl text-forum-regular">Copyediting, Proofreading, Revision of English</li>
                <p className="text-forum text-white">For a free quote, please send me a representative sample of your text (500-1000 words) and indicate the length of the text.</p>
                <li className="text-red-400 text-xl text-forum-regular">Translation</li>
                <p className="text-forum text-white">0,06 euros per word</p>
                <li className="text-red-400 text-xl text-forum-regular">Pronunciation training</li>
                <p className="text-forum text-white">35 euros / hour
                    <br/>
                On line or face-to-face</p>
                <li className="text-red-400 text-xl text-forum-regular">English lessons</li>
                <p className="text-forum text-white">45 euros / hour
                    <br/>
                    On line or face-to-face
                </p>
            </ul>
        </div>
    </main>
    <Footer />
</div>
  );
}

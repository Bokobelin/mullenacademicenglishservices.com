import Footer from "@/components/footer";
import Header_en from "@/components/header_fr";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full mx-4">
        <div className="flex w-full items-center justify-between px-4">
          <Header_en />
          <Link href="/en/pricing" className="pr-4 pb-24 self-end">English</Link>
        </div>
        <div className="pl-12 pr-12 w-full bg-cyan-950 items-center flex flex-col pb-12 px-32">
            <h1 className="text-5xl font-bold font-forum-regular text-red-400 text-center w-full my-10">Tarifs</h1>
            <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }} className="flex flex-col gap-4">
                <li className="text-red-400 text-xl text-forum-regular">Relecture-correction</li>
                <p className="text-forum text-white">Pour recevoir un devis gratuit, merci de m&apos;envoyer un extrait de votre texte (entre 500 et 1000 mots) et de m&apos;indiquer la longueur totale du texte.</p>
                <li className="text-red-400 text-xl text-forum-regular">Traduction</li>
                <p className="text-forum text-white">0,06 euros le mot.</p>
                <li className="text-red-400 text-xl text-forum-regular">Formation à la prononciation</li>
                <p className="text-forum text-white">35 euros / heure.
                    <br/>
                En ligne ou en présentiel selon les cas</p>
                <li className="text-red-400 text-xl text-forum-regular">Cours d&apos;anglais</li>
                <p className="text-forum text-white">45 euros / heure
                    <br/>
                    En ligne ou en présentiel selon les cas
                </p>
            </ul>
        </div>
    </main>
    <Footer />
</div>
  );
}

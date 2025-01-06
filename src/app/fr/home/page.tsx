import Footer from "@/components/footer";
import Header_en from "@/components/header_fr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full mx-4">
        <div className="flex w-full items-center justify-between px-4">
          <Header_en />
          <Link href="/" className="pr-4 pb-24 self-end">English</Link>
        </div>
        <div className="pl-12 pr-12 w-full bg-cyan-950 items-center flex flex-col">
            <h1 className="text-5xl font-bold font-forum-regular text-black text-center w-full my-10 text-red-400">Mullen Academic English Services</h1>
            <Image src="/old-library-5.jpg" alt="Logo" width={700} height={80} priority />
            <p className="text-2xl font-bold font-forum text-white text-center w-full my-10">
TRADUCTION, RELECTURE-CORRECTION ET FORMATION À LA PRONONCIATION
<br/>
EN ANGLAIS
<br/>
POUR DES PROFESSEURS, DES ÉTUDIANTS ET DES ÉDITEURS ACADÉMIQUES
            </p>
            <div className="text-xl font-bold font-forum text-white w-full my-10">
            Ecrire et parler en anglais de façon correcte est important. Si vous écrivez votre thèse, donnez un papier lors d&apos;un colloque ou publiez un article ou encore un livre, utiliser l&apos;anglais de façon claire et juste vous aidera à communiquer vos idées de façon plus convaincante.
Mullen Academic English Services fournit les services suivants :
<br/>
<br/>
            <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                <li>Relecture-correction en anglais</li>
                <li>Traduction du français vers l&apos;anglais</li>
                <li>Formation à la prononciation</li>
                <li>Cours d&apos;anglais</li>
            </ul>
            </div>
        </div>
        <div className="pl-12 pr-12 w-full items-center flex flex-col pb-12">
            <h1 className="text-5xl font-bold font-forum-regular text-black text-center w-full my-10">Témoignages</h1>
            <div className="testimonial-grid">
                <div className="testimonial centered">
                    <p>

C’est EXACTEMENT ce dont j’avais besoin. Sarah a non seulement corrigé mes erreurs de langue, mais aussi amélioré mon style. Il est rare de pouvoir confier son manuscrit à quelqu’un qui a une formation solide en humanités et en langues anciennes. Elle a également effectué le travail rapidement. Je suis très impressionné.</p>
                    <br />
                    <span>RÉGIS BURNET, PROFESSEUR DU NOUVEAU TESTAMENT, VICE-DOYEN, FACULTÉ DE THÉOLOGIE, UCLOUVAIN</span>
                </div>
            </div>
        </div>
        <div className="pl-12 w-full bg-cyan-950 items-center flex flex-row">
        <div className="flex flex-col gap-6 text-red-400 px-4 md:px-8 lg:px-16">
  <h1 className="text-4xl md:text-5xl font-bold font-forum-regular text-center w-full mt-10">
    Services
  </h1>

  <div className="flex flex-col my-4">
    <h2 className="text-xl md:text-2xl font-bold font-forum-regular text-center w-full">
      Relecture-correction
    </h2>
    <p className="text-base md:text-lg font-bold font-forum text-white w-full text-center md:text-left">
      Pour des thèses et des dissertations, des articles et des livres, je
      fournis des corrections méticuleuses et appropriées, tout en respectant
      votre &quot;voix&quot; d&apos;auteur.
    </p>
  </div>

  <div className="flex flex-col my-4">
    <h2 className="text-xl md:text-2xl font-bold font-forum-regular text-center w-full">
      Traduction
    </h2>
    <p className="text-base md:text-lg font-bold font-forum text-white w-full text-center md:text-left">
      Vous avez donné un papier en français mais vous voudriez le publier en
      anglais ? Ou bien vous voudriez en obtenir une traduction de qualité
      professionnelle, sans avoir à peiner pour exprimer vos idées en anglais ?
      Je traduirai votre texte en un anglais correct et idiomatique qui respecte
      les normes académiques. En tant que relectrice formée, je peux également
      assurer la mise aux normes éditoriales (editorial guidelines).
    </p>
  </div>

  <div className="flex flex-col my-4">
    <h2 className="text-xl md:text-2xl font-bold font-forum-regular text-center w-full">
      Formation à la prononciation
    </h2>
    <p className="text-base md:text-lg font-bold font-forum text-white w-full text-center md:text-left">
      Afin que votre papier ou présentation ait un impact maximal, il est
      important que vos auditeurs comprennent ce que vous dites et ne soient
      pas distraits par votre accent ou par des erreurs de prononciation. Je
      peux passer en revue votre texte avec vous pour vous aider à corriger
      votre prononciation et communiquer vos idées avec clarté.
    </p>
  </div>

  <div className="flex flex-col my-4">
    <h2 className="text-xl md:text-2xl font-bold font-forum-regular text-center w-full">
      Cours d&apos;anglais
    </h2>
    <p className="text-base md:text-lg font-bold font-forum text-white w-full text-center md:text-left">
      Améliorer votre anglais est toujours utile, que ce soit pour répondre aux
      questions après une présentation, parler aux autres chercheurs lors
      d&apos;un colloque, faire du réseautage ou vous impliquer dans des projets
      de recherche. Je peux vous aider à progresser et gagner en confiance dans
      l&apos;anglais parlé et écrit, à l&apos;aide de cours personnalisés.
      Contactez-moi !
    </p>
  </div>
</div>

             <Image src="/writing.png" alt="Writing" width={400} height={80} priority className="self-end align-self-end ml-auto" />
        </div>
        <div className="p-12 w-full bg-red-400 items-center flex flex-col text-center">
            <h1 className="text-5xl font-bold font-forum-regular text-black text-center w-full my-10">
            Champs de spécialisation</h1>
            <h6 className="font-bold font-forum text-black w-full px-12">Je me spécialise dans l&apos;aide à l&apos;expression anglaise auprès du monde académique (étudiants, professeurs-chercheurs, éditeurs académiques). Pour la traduction et la relecture-correction, je travaille sur des textes dans les domaines des lettres et des sciences humaines. Mes champs particuliers de spécialisation sont la théologie (j&apos;ai un bon niveau d&apos;hébreu et de grec anciens), l&apos;histoire, l&apos;archéologie, l&apos;épigraphie, la paléographie, ainsi que la littérature en latin, grec classique, français et anglais.</h6>
        </div>
      </main>
        <Footer/>
    </div>
  );
}

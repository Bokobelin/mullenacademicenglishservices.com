import Footer from "@/components/footer";
import Header_en from "@/components/header_fr";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full mx-4">
        <div className="flex w-full items-center justify-between px-4">
          <Header_en />
          <Link href="/en/about" className="pr-4 pb-24 self-end">English</Link>
        </div>
        <div className="pl-12 pr-12 w-full bg-cyan-950 items-center flex flex-col pb-12">
            <h1 className="text-5xl font-bold font-forum-regular text-red-400 text-center w-full my-10">
            A propos de Sarah Mullen</h1>
            <Image src="/sarah.png" alt="Sarah" width={300} height={80} priority />
            <p className="text-white font-forum lg:px-32 mt-14">
Je m&apos;intéresse depuis toujours aux langues et à la littérature. Je viens d&apos;une famille qui gardait un dictionnaire près de la table à manger au cas où on avait besoin de chercher un mot pendant le repas.
<br/>
<br/>
Je suis diplômée en Lettres classiques de l&apos;Université d&apos;Oxford, et j&apos;ai aussi étudié la théologie en France. J&apos;ai également été formée en relecture-correction (proofreading) par le Chartered Institute of Editing and Proofreading (CIEP).
<br/>
<br/>
J&apos;ai travaillé dans des contextes variés, notamment en aidant des étudiants à examiner des textes bibliques, en supervisant des cours de théologie en e-learning, et en corrigeant des devoirs d&apos;étudiants.
<br/>
<br/>
Depuis plus de dix ans, j&apos;aide mon mari, qui est un académique, par la traduction et/ou la relecture de ses articles en anglais (30 articles y compris une douzaine dans des revues évaluées par des pairs et six  &quot;peer-reviewed chapters&quot; dans des livres collectifs). J&apos;ai traduit deux de ses livres en anglais et je l&apos;ai aidé à se préparer pour des colloques et des entretiens en anglais. J&apos;ai une bonne compréhension du monde académique ainsi que des besoins et attentes des professeurs, étudiants et éditeurs.
​<br/>
<br/>
J&apos;ai également donné des cours particuliers d&apos;anglais à des individus et à des groupes. J&apos;ai de nombreuses années d&apos;expérience auprès de personnes dont l&apos;anglais n&apos;est pas la langue maternelle.
<br/>
<br/>
Je suis née et j&apos;ai grandi en Angleterre. J&apos;ai habité pendant 18 ans en France, et j&apos;habite en Belgique depuis 2020.
<br/>
<br/>
J&apos;apporte une attention méticuleuse au détail des formulations et au respect de la &quot;voix&quot; des auteurs. Je suis patiente et avenante. Si vous avez besoin d&apos;aide pour vos projets académiques en anglais, n&apos;hésitez pas à me contacter.
            </p>
            <Image src="/ciep.png" alt="CIEP" width={400} height={80} priority className="self-center justify-center align-self-center" />
            <h6 className="font-forum-regular text-2xl text-red-400">
                Affiliation
            </h6>
            <p className="text-xl text-white font-forum">Membre du <Link className="underline" href="https://www.ciep.uk/">Chartered Institute of Editing and Proofreading (CIEP)</Link></p>
        </div>
     </main>
     <Footer />
    </div>
        );
    }
